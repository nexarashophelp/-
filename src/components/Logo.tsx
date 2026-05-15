import { motion } from "motion/react";

export default function Logo({ size = 32, className = "" }: { size?: number, className?: string }) {
  return (
    <motion.div 
      className={`inline-flex items-center justify-center relative ${className}`}
      initial={{ rotate: -45, scale: 0.5, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Glowing Orb (Defines the vibe) */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#glow)" />

        {/* Outer Circular Path - Tech element */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="40" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeDasharray="10 15"
          className="text-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* The Main 'A' Symbol - Sophisticated Geometry */}
        <path 
          d="M50 15L85 85H70L50 45L30 85H15L50 15Z" 
          fill="currentColor" 
          className="text-white"
        />
        
        {/* Neon Accent Overlay on 'A' */}
        <path 
          d="M50 25L75 75M50 25L25 75" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="text-primary"
        />

        {/* Central Kinetic Core */}
        <motion.circle 
          cx="50" 
          cy="60" 
          r="4" 
          fill="currentColor" 
          className="text-primary"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Abstract Data Nodes */}
        <circle cx="50" cy="15" r="2" fill="currentColor" className="text-primary" />
        <circle cx="85" cy="85" r="2" fill="currentColor" className="text-primary" />
        <circle cx="15" cy="85" r="2" fill="currentColor" className="text-primary" />
      </svg>
      
      {/* Absolute positioned rings for extra flair */}
      <div className="absolute inset-0 border border-primary/10 rounded-full animate-ping opacity-20" />
    </motion.div>
  );
}
