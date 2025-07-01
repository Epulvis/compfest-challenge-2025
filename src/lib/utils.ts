import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPasswordStrength(password: string): 'Weak' | 'Medium' | 'Strong' | '' {
  if (!password) return '';

  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  ];

  const strength = checks.filter(Boolean).length;

  if (strength < 3) return 'Weak';
  if (strength < 5) return 'Medium';
  return 'Strong';
}