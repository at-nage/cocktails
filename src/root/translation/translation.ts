import data from "../../assets/translation.json";

export function useTranslation() {
  const translation = data as Record<string, string>;
  return (key: string) => translation[key] ?? key;
}
