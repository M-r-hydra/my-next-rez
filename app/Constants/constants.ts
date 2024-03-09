import { en } from "./langs/en";
import { fa } from "./langs/fa";

export const lang: (_lang: string) => {
  [key: string]: string | string[];
} = (_lang = "en") => {
  if (_lang === "fa") return fa;
  if (_lang === "en") return en;
  return en;
};
