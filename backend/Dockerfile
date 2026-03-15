# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the project file
COPY ["backend.csproj", "./"]

# Restore dependencies
RUN dotnet restore "backend.csproj"

# Copy the source code
COPY . .

# Build the application
RUN dotnet build "backend.csproj" -c Release -o /app/build

# Publish stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS production
WORKDIR /app

# Copy built application
COPY --from=build /app/build .

# Expose port
EXPOSE 8080

# Set environment
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:8080

# Run the application
ENTRYPOINT ["dotnet", "backend.dll"]
