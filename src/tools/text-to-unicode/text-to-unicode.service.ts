function convertTextToUnicode(text: string): string {
  const result: string[] = [];
  for (const char of text) {
    const codePoint = char.codePointAt(0);
    if (codePoint !== undefined) {
      result.push(`&#${codePoint};`);
    }
  }
  return result.join('');
}

function convertUnicodeToText(unicodeStr: string): string {
  return unicodeStr.replace(/&#(\d+);/g, (_match, dec) => String.fromCodePoint(Number(dec)));
}

export { convertTextToUnicode, convertUnicodeToText };
