import { OpaqueToken } from '@angular/core';

/**
 * import translations
 */
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';


/**
 * Translation token
 * An opaque token is an object with no application interfaces.
 * It's a special kind of provider lookup key for use in dependency injection
 */
export const TRANSLATIONS = new OpaqueToken('translations');

/**
 * All Language translations
 * Variable links all our translations.
 */
export const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_ES_NAME]: LANG_ES_TRANS
};

/**
 * Providers
 * TRANSLATION_PROVIDERS notes that we use the opaque token that we defined earlier,
 * and supply our dictionary as value. Later we will register TRANSLATION_PROVIDERS
 * during bootstrap
 */
export const TRANSLATION_PROVIDERS = [
  {
    provide: TRANSLATIONS,
    useValue: dictionary
  }
];
