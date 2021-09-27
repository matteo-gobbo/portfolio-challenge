export const formatDate = (date: string): string => {
  const d = new Date(date)
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
};