export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export const pad = (n: number) => String(n).padStart(2, '0');
