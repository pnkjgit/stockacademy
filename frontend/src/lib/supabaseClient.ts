import { createClient } from "@supabase/supabase-js";

// Get these values from your Supabase project settings
// https://supabase.com/dashboard/project/_/settings/api
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn(
    "Supabase credentials not found. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file",
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
