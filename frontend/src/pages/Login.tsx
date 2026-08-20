import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0B0C0F] overflow-hidden font-sans select-none">
      
      {/* Futuristic Cinematic Ambient Glow Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Neon Pink Glowing Orb Top Right */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.45, 0.35],
            x: [0, 15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#FF4F70]/20 blur-[120px]"
        />

        {/* Neon Pink Glowing Orb Bottom Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.35, 0.25],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#FF4F70]/15 blur-[140px]"
        />

        {/* Center Muted Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full bg-slate-900/30 blur-[100px]" />
        
        {/* Subtle Cybernetic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF4F70 1px, transparent 0)`,
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      {/* Main Login Layout Container */}
      <div className="relative z-10 w-full max-w-md px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glassmorphism shadow-pink-glow rounded-3xl p-8 sm:p-10 border border-white/[0.04]"
        >
          {/* Logo / Branding Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 bg-gradient-to-tr from-[#111318] to-white/[0.03] rounded-2xl border border-[#FF4F70]/20 shadow-md cursor-pointer group mb-4"
            >
              {/* Subtle back-glow on logo hover */}
              <div className="absolute inset-0 bg-[#FF4F70]/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ShieldCheck className="relative h-8 w-8 text-[#FF4F70] text-glow" />
            </motion.div>
            
            <h2 className="text-2xl font-extrabold text-[#F5F5F5] tracking-tight sm:text-3xl">
              Welcome Back
            </h2>
            <p className="text-sm mt-2 text-white/55">
              Sign in to continue to the hackathon
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="text-xs font-semibold text-[#F5F5F5]/85 uppercase tracking-wider block"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-12 px-4 rounded-xl text-sm text-[#F5F5F5] glassmorphism-input placeholder-white/20 outline-none transition-all duration-300 focus:border-[#FF4F70]/40 focus:ring-1 focus:ring-[#FF4F70]/40"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="text-xs font-semibold text-[#F5F5F5]/85 uppercase tracking-wider block"
                >
                  Password
                </label>
                <motion.a
                  href="#forgot"
                  whileHover={{ scale: 1.02 }}
                  className="text-xs text-white/55 hover:text-[#FF4F70] transition-colors duration-200"
                >
                  Forgot password?
                </motion.a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 pl-4 pr-12 rounded-xl text-sm text-[#F5F5F5] glassmorphism-input placeholder-white/20 outline-none transition-all duration-300 focus:border-[#FF4F70]/40 focus:ring-1 focus:ring-[#FF4F70]/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/60 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 79, 112, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="relative w-full h-12 rounded-xl bg-[#FF4F70] hover:bg-[#ff3d61] text-[#0B0C0F] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-pink-glow-strong"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-[#0B0C0F] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-4 bg-[#111318]/90 text-white/40 tracking-widest font-mono text-[10px]">
                or
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-3 gap-3">
            {/* GitHub */}
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 79, 112, 0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#F5F5F5]/80 hover:text-white hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.button>

            {/* Google */}
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 79, 112, 0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#F5F5F5]/80 hover:text-white hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.415 0-6.192-2.777-6.192-6.192s2.777-6.192 6.192-6.192c1.479 0 2.88.528 3.992 1.488L21.05 4.72A11.96 11.96 0 0 0 12.24 1.778C6.65 1.778 2.11 6.318 2.11 11.91s4.54 10.13 10.13 10.13c5.823 0 9.682-4.093 9.682-9.854 0-.667-.06-1.305-.172-1.9H12.24v.001z"/>
              </svg>
            </motion.button>

            {/* LinkedIn */}
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 79, 112, 0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#F5F5F5]/80 hover:text-white hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.button>
          </div>

          {/* Bottom Link */}
          <div className="mt-8 text-center text-xs">
            <span className="text-white/55">Don't have an account? </span>
            <motion.a
              href="#signup"
              whileHover={{ scale: 1.02 }}
              className="text-[#FF4F70] hover:text-[#ff3d61] font-bold transition-colors duration-200 ml-1"
            >
              Sign up
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
