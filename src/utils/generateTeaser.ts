export const generateTeaser = (text: string, maxLength: number = 150): string => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength).trim();
    return truncated.endsWith('.') ? truncated : `${truncated}...`;
  };
  