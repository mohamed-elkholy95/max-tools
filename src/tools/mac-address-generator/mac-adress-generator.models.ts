import _ from 'lodash';

export { splitPrefix, generateRandomMacAddress };

function splitPrefix(prefix: string): string[] {
  const base = prefix.match(/[^0-9a-f]/i) === null ? prefix.match(/.{1,2}/g) ?? [] : prefix.split(/[^0-9a-f]/i);

  return base.filter(Boolean).map(byte => byte.padStart(2, '0'));
}

function generateRandomMacAddress({ prefix: rawPrefix = '', separator = ':', getRandomByte = () => _.random(0, 255).toString(16).padStart(2, '0') }: { prefix?: string; separator?: string; getRandomByte?: () => string } = {}) {
  const prefix = splitPrefix(rawPrefix).slice(0, 6);

  const remainingBytes = Math.max(0, 6 - prefix.length);
  const randomBytes = _.times(remainingBytes, getRandomByte);
  const bytes = [...prefix, ...randomBytes];

  return bytes.join(separator);
}
