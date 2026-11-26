import { es } from './es';
import type { Locale, Translations } from './types';

const dictionaries: Record<Locale, Translations> = {
  es,
};

export function useTranslations(locale: Locale = 'es'): Translations {
  return dictionaries[locale];
}
