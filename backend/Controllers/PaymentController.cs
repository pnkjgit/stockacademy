using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentController : ControllerBase
{
    private readonly ILogger<PaymentController> _logger;
    
    // Get from environment variables
    private readonly string? _razorpayKeyId = Environment.GetEnvironmentVariable("RAZORPAY_KEY_ID");
    private readonly string? _razorpayKeySecret = Environment.GetEnvironmentVariable("RAZORPAY_KEY_SECRET");

    public PaymentController(ILogger<PaymentController> logger)
    {
        _logger = logger;
    }

    [HttpPost("create-order")]
    public async Task<IActionResult> CreateOrder([FromBody] CreateOrderRequest request)
    {
        try
        {
            // Validate request
            if (request?.Amount <= 0)
            {
                return BadRequest(new { error = "Invalid amount" });
            }

            if (string.IsNullOrEmpty(request.UserEmail))
            {
                return BadRequest(new { error = "Email is required" });
            }

            // In production, you would:
            // 1. Call Razorpay API to create an order
            // 2. Save order details to database
            // 3. Return order ID to frontend

            // For now, we'll create a mock order ID
            // In real implementation, call Razorpay API:
            // POST https://api.razorpay.com/v1/orders
            // with Authorization header and request body

            string orderId = GenerateMockOrderId();

            _logger.LogInformation($"Order created: {orderId} for email: {request.UserEmail}");

            return Ok(new
            {
                orderId = orderId,
                amount = request.Amount,
                currency = request.Currency ?? "INR",
                description = "StockAcademy Annual Subscription"
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error creating order: {ex.Message}");
            return StatusCode(500, new { error = "Failed to create order" });
        }
    }

    [HttpPost("verify")]
    public async Task<IActionResult> VerifyPayment([FromBody] VerifyPaymentRequest request)
    {
        try
        {
            // Validate request
            if (string.IsNullOrEmpty(request?.OrderId) || 
                string.IsNullOrEmpty(request.PaymentId) || 
                string.IsNullOrEmpty(request.Signature))
            {
                return BadRequest(new { error = "Missing payment details" });
            }

            // Verify signature
            if (!VerifySignature(request.OrderId, request.PaymentId, request.Signature))
            {
                _logger.LogWarning($"Payment verification failed for order: {request.OrderId}");
                return BadRequest(new { error = "Invalid payment signature" });
            }

            // In production, you would:
            // 1. Verify payment status with Razorpay API
            // 2. Update subscription in database
            // 3. Send confirmation email

            _logger.LogInformation($"Payment verified successfully: OrderId={request.OrderId}, PaymentId={request.PaymentId}");

            // TODO: Save subscription to database using userId
            // TODO: Send confirmation email to user

            return Ok(new
            {
                success = true,
                message = "Payment verified successfully",
                orderId = request.OrderId,
                paymentId = request.PaymentId
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error verifying payment: {ex.Message}");
            return StatusCode(500, new { error = "Failed to verify payment" });
        }
    }

    /// <summary>
    /// Verify Razorpay payment signature using HMAC SHA256
    /// Format: {order_id}|{payment_id}, Key: Razorpay Key Secret
    /// </summary>
    private bool VerifySignature(string orderId, string paymentId, string signature)
    {
        try
        {
            if (string.IsNullOrEmpty(_razorpayKeySecret))
            {
                _logger.LogWarning("Razorpay Key Secret not configured");
                return false;
            }

            string message = $"{orderId}|{paymentId}";
            byte[] secretBytes = Encoding.UTF8.GetBytes(_razorpayKeySecret);
            
            using (var hmac = new HMACSHA256(secretBytes))
            {
                byte[] messageBytes = Encoding.UTF8.GetBytes(message);
                byte[] hashBytes = hmac.ComputeHash(messageBytes);
                string generatedSignature = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
                
                // Constant-time comparison to prevent timing attacks
                return TimingSafeCompare(generatedSignature, signature.ToLower());
            }
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error verifying signature: {ex.Message}");
            return false;
        }
    }

    /// <summary>
    /// Constant-time string comparison to prevent timing attacks
    /// </summary>
    private bool TimingSafeCompare(string a, string b)
    {
        if (string.IsNullOrEmpty(a) || string.IsNullOrEmpty(b))
            return false;

        if (a.Length != b.Length)
            return false;

        int result = 0;
        for (int i = 0; i < a.Length; i++)
        {
            result |= a[i] ^ b[i];
        }

        return result == 0;
    }

    /// <summary>
    /// Generate mock order ID for testing (Razorpay format: order_XXXXXXXXXX)
    /// </summary>
    private string GenerateMockOrderId()
    {
        return $"order_{Guid.NewGuid().ToString("N")[..10]}";
    }
}

public class CreateOrderRequest
{
    public int Amount { get; set; }
    public string? Currency { get; set; }
    public string? UserEmail { get; set; }
    public string? UserId { get; set; }
}

public class VerifyPaymentRequest
{
    public string? OrderId { get; set; }
    public string? PaymentId { get; set; }
    public string? Signature { get; set; }
    public string? UserId { get; set; }
}
