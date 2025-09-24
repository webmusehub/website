import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--card-border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
        
        // Enhanced Neon colors
        "neon-cyan": {
          DEFAULT: "hsl(var(--neon-cyan))",
          bright: "hsl(var(--neon-cyan-bright))",
          dim: "hsl(var(--neon-cyan-dim))",
        },
        "neon-blue": {
          DEFAULT: "hsl(var(--neon-blue))",
          bright: "hsl(var(--neon-blue-bright))",
        },
        "neon-purple": {
          DEFAULT: "hsl(var(--neon-purple))",
          bright: "hsl(var(--neon-purple-bright))",
        },
        "neon-pink": {
          DEFAULT: "hsl(var(--neon-pink))",
          bright: "hsl(var(--neon-pink-bright))",
        },
        "neon-green": "hsl(var(--neon-green))",
        "neon-orange": "hsl(var(--neon-orange))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          bright: "hsl(var(--primary-bright))",
          dim: "hsl(var(--primary-dim))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          bright: "hsl(var(--secondary-bright))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          elevated: "hsl(var(--card-elevated))",
          foreground: "hsl(var(--card-foreground))",
          border: {
            DEFAULT: "hsl(var(--card-border))",
            bright: "hsl(var(--card-border-bright))",
          },
        },
        glass: {
          bg: {
            DEFAULT: "hsl(var(--glass-bg))",
            strong: "hsl(var(--glass-bg-strong))",
          },
          border: {
            DEFAULT: "hsl(var(--glass-border))",
            bright: "hsl(var(--glass-border-bright))",
          },
        },
        hover: {
          DEFAULT: "hsl(var(--hover))",
          bright: "hsl(var(--hover-bright))",
        },
        active: "hsl(var(--active))",
        focus: "hsl(var(--focus))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        md: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-tertiary': 'var(--gradient-tertiary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-glass': 'var(--gradient-glass)',
      },
      boxShadow: {
        'glow-cyan': 'var(--glow-cyan)',
        'glow-cyan-strong': 'var(--glow-cyan-strong)',
        'glow-blue': 'var(--glow-blue)',
        'glow-purple': 'var(--glow-purple)',
        'glow-pink': 'var(--glow-pink)',
        'glass': 'var(--shadow-glass)',
        'glass-strong': 'var(--shadow-glass-strong)',
        'elevated': 'var(--shadow-elevated)',
        'floating': 'var(--shadow-floating)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      transitionTimingFunction: {
        'bounce': 'var(--transition-bounce)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
