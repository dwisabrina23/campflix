interface TruncateTextParams {
  text: string;
  limit: number;
}
export const TruncateText = ({ text, limit }: TruncateTextParams) => {
  if (text.length <= limit) {
    return text;
  }
  const truncatedText = text.slice(0, limit);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");
  if (lastSpaceIndex !== -1) {
    return truncatedText.slice(0, lastSpaceIndex) + "...";
  }
  return truncatedText + "...";
};
