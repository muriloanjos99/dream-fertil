export const calculateReadTime = (content: string) => {
  const words = content.split(' ');
  const averageWordsPerMinute = 200;
  const readTime = Math.ceil(words.length / averageWordsPerMinute);

  return `${readTime} min.`;
}