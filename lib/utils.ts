import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix a root-relative public asset path with the deploy base path.
 * Unoptimized images and metadata icons are emitted as-is by Next.js,
 * so basePath (GitHub Pages project sites) must be applied manually.
 */
export function publicPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
}
