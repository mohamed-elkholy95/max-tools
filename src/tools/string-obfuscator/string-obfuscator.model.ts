import { get } from '@vueuse/core';
import { type MaybeRef, computed } from 'vue';

export { obfuscateString, useObfuscateString };

function obfuscateString(
  str: string,
  { replacementChar = '*', keepFirst = 4, keepLast = 0, keepSpace = true }: { replacementChar?: string; keepFirst?: number; keepLast?: number; keepSpace?: boolean } = {}): string {
  const safeKeepFirst = Math.max(0, keepFirst);
  const safeKeepLast = Math.max(0, keepLast);

  // If keepFirst + keepLast >= length, show entire string
  if (safeKeepFirst + safeKeepLast >= str.length) {
    return str;
  }

  return str
    .split('')
    .map((char, index, array) => {
      if (keepSpace && char === ' ') {
        return char;
      }

      return (index < safeKeepFirst || index >= array.length - safeKeepLast) ? char : replacementChar;
    })
    .join('');
}

function useObfuscateString(
  str: MaybeRef<string>,
  config: { replacementChar?: MaybeRef<string>; keepFirst?: MaybeRef<number>; keepLast?: MaybeRef<number>; keepSpace?: MaybeRef<boolean> } = {},

) {
  return computed(() => obfuscateString(
    get(str),
    {
      replacementChar: get(config.replacementChar),
      keepFirst: get(config.keepFirst),
      keepLast: get(config.keepLast),
      keepSpace: get(config.keepSpace),
    },
  ));
}
