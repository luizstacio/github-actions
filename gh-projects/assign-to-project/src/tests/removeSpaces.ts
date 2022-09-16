export function removeSpaces(text: string) {
  return text.replace(/  |\r\n|\n|\r/gm, '');
}
