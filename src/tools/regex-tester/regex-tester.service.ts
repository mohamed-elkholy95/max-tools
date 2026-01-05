interface RegExpGroupIndices {
  [name: string]: [number, number]
}
interface RegExpIndices extends Array<[number, number]> {
  groups: RegExpGroupIndices
}
interface RegExpExecArrayWithIndices extends RegExpExecArray {
  indices: RegExpIndices
}
interface GroupCapture {
  name: string
  value: string
  start: number
  end: number
};

export function matchRegex(regex: string, text: string, flags: string) {
  let lastIndex = -1;
  // Ensure 'd' flag is always included for indices support
  const flagsWithIndices = flags.includes('d') ? flags : `d${flags}`;
  const re = new RegExp(regex, flagsWithIndices);
  const results = [];
  let match = re.exec(text) as RegExpExecArrayWithIndices;
  while (match !== null) {
    if (re.lastIndex === lastIndex || match[0] === '') {
      break;
    }
    const indices = match.indices;
    const captures: Array<GroupCapture> = [];
    Object.entries(match).forEach(([captureName, captureValue]) => {
      if (captureName !== '0' && captureName.match(/\d+/)) {
        const captureIndices = indices[Number(captureName)];
        if (captureIndices) {
          captures.push({
            name: captureName,
            value: captureValue,
            start: captureIndices[0],
            end: captureIndices[1],
          });
        }
      }
    });
    const groups: Array<GroupCapture> = [];
    Object.entries(match.groups || {}).forEach(([groupName, groupValue]) => {
      const groupIndices = indices.groups?.[groupName];
      if (groupIndices) {
        groups.push({
          name: groupName,
          value: groupValue,
          start: groupIndices[0],
          end: groupIndices[1],
        });
      }
    });
    results.push({
      index: match.index,
      value: match[0],
      captures,
      groups,
    });
    lastIndex = re.lastIndex;
    match = re.exec(text) as RegExpExecArrayWithIndices;
  }
  return results;
}
