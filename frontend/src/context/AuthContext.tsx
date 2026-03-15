import React, { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import { AuthContext } from "./authContextType";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        // Add timeout to prevent hanging if Supabase is not configured
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 5000),
        );

        const getSessionPromise = supabase.auth.getSession();
        const {
          data: { session },
        } = (await Promise.race([getSessionPromise, timeoutPromise])) as any;

        setUser(session?.user || null);
      } catch (error) {
        console.warn("Could not fetch auth session:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Only subscribe if Supabase is configured
    let subscription: any;
    try {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });
      subscription = data.subscription;
    } catch (error) {
      console.warn("Could not subscribe to auth changes:", error);
    }

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (
    email: string,
    password: string,
  ): Promise<{ error: string | null }> => {
    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 8000),
      );

      const signUpPromise = supabase.auth.signUp({
        email,
        password,
      });

      const { error } = (await Promise.race([
        signUpPromise,
        timeoutPromise,
      ])) as any;

      if (error) {
        return { error: error.message };
      }

      return { error: null };
    } catch (err: any) {
      const message =
        err?.message === "Request timeout" ?
          "Request timed out. Supabase may not be configured. Please add your credentials to .env.local"
        : "Sign up failed. Please try again.";
      return { error: message };
    }
  };

  const signIn = async (
    email: string,
    password: string,
  ): Promise<{ error: string | null }> => {
    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 8000),
      );

      const signInPromise = supabase.auth.signInWithPassword({
        email,
        password,
      });

      const { error } = (await Promise.race([
        signInPromise,
        timeoutPromise,
      ])) as any;

      if (error) {
        return { error: error.message };
      }

      return { error: null };
    } catch (err: any) {
      const message =
        err?.message === "Request timeout" ?
          "Request timed out. Supabase may not be configured. Please add your credentials to .env.local"
        : "Sign in failed. Please try again.";
      return { error: message };
    }
  };

  const signOut = async () => {
    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 5000),
      );

      await Promise.race([supabase.auth.signOut(), timeoutPromise]);
      setUser(null);
    } catch (err) {
      console.warn("Sign out warning:", err);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUp,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
