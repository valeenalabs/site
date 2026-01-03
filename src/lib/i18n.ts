import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: [
    "af-ZA",
    "ar-SA",
    "de-DE",
    "en",
    "es-ES",
    "fr-FR",
    "hi-IN",
    "id-ID",
    "it-IT",
    "ja-JP",
    "lv-LV",
    "nl-NL",
    "pt-BR",
    "pt-PT",
    "ro-RO",
    "ru-RU",
    "tr-TR",
    "vi-VN",
  ],
  parser: "dir",
});

// see: https://github.com/vercel/next.js/issues/74897
export const ogLanguageBlacklist = ["ar-SA"];
