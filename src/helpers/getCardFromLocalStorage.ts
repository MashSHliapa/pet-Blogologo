export function getCardFromLocalStorage(name: string) {
  const storedData = JSON.parse(localStorage.getItem(name) as string);
  if (!storedData) return [];
  return storedData;
}
