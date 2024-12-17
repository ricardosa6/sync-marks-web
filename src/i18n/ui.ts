export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const showDefaultLang = true;

export const routes: { [key in keyof typeof ui]: Record<string, string> } = {
  en: {
    "politica-de-privacidad": "privacy-policy",
    "privacy-policy": "privacy-policy",
  },
  es: {
    "politica-de-privacidad": "politica-de-privacidad",
    "privacy-policy": "politica-de-privacidad",
  },
} as const;

export const ui = {
  en: {
    "nav.privacyPolicy": "Privacy policy",
    "welcome.subtitle": "Sync your bookmarks in your different browsers",
    "welcome.title": "Welcome to",
    syncMarks: "Sync Marks",
    installExtension: "Install extension",
    "features.sync.title": "Synchronization",
    "features.sync.description":
      'Synchronize your bookmarks <strong class="font-bold">automatically</strong>, no matter what browser you are working on.',
    "features.browserCompatibility.title": "Compatible browsers",
    "features.browserCompatibility.description":
      'Compatible only with Chromium-based browsers: <strong class="font-bold">Chrome</strong>, <strong  class="font-bold">Edge</strong>, <strong class="font-bold">Opera</strong>, and <strong class="font-bold">Brave</strong>. Available soon in more browsers!',
  },
  es: {
    "nav.privacyPolicy": "Política de privacidad",
    "welcome.title": "Bienvenid@ a",
    "welcome.subtitle":
      "Sincroniza tus marcadores en tus diferentes navegadores",
    syncMarks: "Sync Marks",
    installExtension: "Instalar extensión",
    "features.sync.title": "Sincronización",
    "features.sync.description":
      'Sincronizar tus marcadores <strong class="font-bold">automáticamente</strong>, sin importar en qué navegador estés trabajando.',
    "features.browserCompatibility.title": "Navegadores compatibles",
    "features.browserCompatibility.description":
      'Compatible solo con navegadores basados en Chromium: <strong class="font-bold">Chrome</strong>, <strong  class="font-bold">Edge</strong>, <strong class="font-bold">Opera</strong>, y <strong class="font-bold">Brave</strong>. ¡Pronto disponible en más navegadores!',
  },
} as const;
