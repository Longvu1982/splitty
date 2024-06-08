import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
export const cn = (...inputs: clsx.ClassValue[]) => {
  return twMerge(clsx(...inputs));
};
