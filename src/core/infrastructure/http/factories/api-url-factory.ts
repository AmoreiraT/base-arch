export const makeApiUrl = (path: string): string => {
  const apiUrl: string = process.env.REACT_APP_API_BASE_URL ?? '';
  return `${apiUrl}${path}`;
};
