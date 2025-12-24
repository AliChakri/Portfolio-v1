import React, { useState, useEffect, useRef } from "react";
import { Send, Globe, CheckCircle, AlertCircle, Loader } from "lucide-react";

const RocketHeader = () => (
  <div className="flex justify-center mb-6">
    <div className="w-12 h-12 text-blue-400 animate-bounce">🚀</div>
  </div>
);

const MissionControl = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFocused, setIsFocused] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const sectionRef = useRef(null);
  const submissionTimesRef = useRef([]);

  // Rate limiting check using useRef instead of localStorage
  useEffect(() => {
    const checkRateLimit = () => {
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;
      
      // Filter out submissions older than 1 hour
      submissionTimesRef.current = submissionTimesRef.current.filter(
        time => now - time < oneHour
      );
      
      if (submissionTimesRef.current.length >= 3) {
        const oldestSubmission = Math.min(...submissionTimesRef.current);
        const timeUntilReset = oneHour - (now - oldestSubmission);
        setCanSubmit(false);
        setCountdown(Math.ceil(timeUntilReset / 1000 / 60));
      } else {
        setCanSubmit(true);
        setCountdown(0);
      }
    };

    checkRateLimit();
    const interval = setInterval(checkRateLimit, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Input sanitization - FIXED: Only sanitize dangerous content, not spaces
  const sanitizeInput = (input) => {
    // Remove script tags and other dangerous HTML
    return input.replace(/<script[^>]*>.*?<\/script>/gi, "")
                .replace(/<[^>]*>/g, ""); // Remove all HTML tags
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: sanitizeInput(value)
    });
    if (status.message) setStatus({ type: "", message: "" });
  };

  // FIXED: Update rate limit using ref
  const updateRateLimit = () => {
    const now = Date.now();
    submissionTimesRef.current.push(now);
  };

  const sendEmail = async (templateParams) => {
    return new Promise((resolve, reject) => {
      if (window.emailjs) {
        window.emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          templateParams, 
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
          .then(resolve)
          .catch(reject);
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
          window.emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            templateParams, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
            .then(resolve)
            .catch(reject);
        };
        script.onerror = reject;
        document.body.appendChild(script);
      }
    });
  };

  const handleSubmit = async () => {
    if (!canSubmit) {
      setStatus({
        type: "error",
        message: `Rate limit exceeded. Please try again in ${countdown} minutes.`
      });
      return;
    }

    // Trim values only for validation
    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: "error", message: "All fields are required" });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    if (trimmedMessage.length < 10) {
      setStatus({ type: "error", message: "Message must be at least 10 characters" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "info", message: "Sending your message..." });

    try {
      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        message: trimmedMessage,
      };

      await sendEmail(templateParams);

      updateRateLimit(); // Update rate limit after successful send

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll respond within 24 hours."
      });
      
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Enter key in textarea (Shift+Enter for new line, Enter to submit)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-24 bg-black text-white overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_40%)]" />
      </div>

      {/* Floating stars effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
        }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <RocketHeader /> */}
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Mission <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Control</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <Globe className="w-4 h-4" />
            <p className="text-lg">Ready for Launch</p>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            This is the point where ideas become plans and plans become products.<br/>
            Whether it’s a new build or an evolving system,
            let’s align objectives and launch with confidence.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <div 
            className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-10 shadow-2xl hover:border-gray-700/50 transition-all duration-300"
            style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
          >
            {/* Status Messages */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-2xl border flex items-start gap-3 ${
                status.type === "success" 
                  ? "bg-green-500/10 border-green-500/30 text-green-300" 
                  : status.type === "error"
                  ? "bg-red-500/10 border-red-500/30 text-red-300"
                  : "bg-blue-500/10 border-blue-500/30 text-blue-300"
              }`}>
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : status.type === "info" ? (
                  <Loader className="w-5 h-5 flex-shrink-0 mt-0.5 animate-spin" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused("name")}
                  onBlur={() => setIsFocused("")}
                  placeholder="Enter your name"
                  className={`w-full bg-gray-800/50 text-white rounded-2xl px-5 py-4 border ${
                    isFocused === "name" ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-700/50"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-gray-500`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused("email")}
                  onBlur={() => setIsFocused("")}
                  placeholder="your.email@example.com"
                  className={`w-full bg-gray-800/50 text-white rounded-2xl px-5 py-4 border ${
                    isFocused === "email" ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-700/50"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-gray-500`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setIsFocused("message")}
                  onBlur={() => setIsFocused("")}
                  placeholder="Tell me about your project or just say hi..."
                  rows="6"
                  className={`w-full bg-gray-800/50 text-white rounded-2xl px-5 py-4 border ${
                    isFocused === "message" ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-700/50"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none placeholder:text-gray-500`}
                  required
                  disabled={isSubmitting}
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to submit • Shift+Enter for new line
                </p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !canSubmit}
                className={`group relative w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg overflow-hidden ${
                  isSubmitting || !canSubmit
                    ? "bg-gray-700 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Launching...
                    </>
                  ) : !canSubmit ? (
                    <>Wait {countdown}min</>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      Launch Message
                    </>
                  )}
                </span>
                {!isSubmitting && canSubmit && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Secure submission • Response within 24 hours • {canSubmit ? `${3 - submissionTimesRef.current.length} submissions remaining this hour` : 'Rate limited'}
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-blue-300 font-medium mb-2">Ready for Liftoff</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strong products start with the right conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControl;