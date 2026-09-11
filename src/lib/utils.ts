import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeStaticPath(src: string) {
  return src
    .split("/")
    .map((segment) => encodeURIComponent(segment).replace(/%28/g, "(").replace(/%29/g, ")"))
    .join("/");
}
