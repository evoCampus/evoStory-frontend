import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // LanguageToggle
      language: 'Language',
      currentLanguage: 'English',
      switchLanguage: 'Switch language',
      // HomePage
      continue: 'Continue Game',
      newGame: 'New Game',
      dashboard: 'Dashboard',
      settings: 'Settings',
      // Settings
      settingsTitle: 'Settings',
      showControls: 'Show Controls',
      hideControls: 'Hide Controls',
      controls: 'Controls',
      home: 'Home',
      // LoginPage
      login: 'Login',
      register: 'Register',
      noAccount: "Don't have an account yet?",
      // RegisterPage
      haveAccount: 'Already have an account?',
      // Dashboard
      info: 'Information',
      welcome: 'Welcome',
      email: 'Email',
      noUser: 'Not logged in.',
      deleteAccount: 'Delete Account',
      profilePicture: 'Profile picture',
      // LogoutButton
      logout: 'Logout',
      // Dashboard Modal
      deleteAccountTitle: 'Delete Account',
      deleteAccountConfirm: 'Delete',
      deleteAccountCancel: 'Cancel',
      deleteAccountQuestion: 'Are you sure you want to delete your account?',
      deleteAccountWarning: 'This action is irreversible!',
      success: 'Success!',
      error: 'Error!',
      accountDeleted: 'Account successfully deleted.',
      deleteError: 'An error occurred while deleting the account: ',
      // ChapterPage
      continueButton: 'Continue',
      // EndingScreen
      gameOver: 'Game Over',
      // Common
      ok: 'OK',
      // HomePage
      storyTitle: 'Faded Memories',
      // ChapterPage errors
      errorLoadingScene: 'Error while loading scene.',
      // 404 Page
      pageNotFound: '404 - Page not found',
      // Auth Forms
      username: 'Username',
      password: 'Password',
      loginButton: 'Login',
      registerButton: 'Register',
      fillAllFields: 'Please fill in all fields.',
      invalidCredentials: 'Invalid username or password. Please try again.',
      loginError: 'An error occurred during login. Please try again later.',
      registrationSuccess: 'Registration successful! You can now log in.',
      registrationFailed: 'Registration failed. Please try again.',
      registrationError: 'An error occurred during registration. Please try again later.',
    },
  },
  hu: {
    translation: {
      // LanguageToggle
      language: 'Nyelv',
      currentLanguage: 'Magyar',
      switchLanguage: 'Nyelv váltása',
      // HomePage
      continue: 'Játék folytatása',
      newGame: 'Új játék',
      dashboard: 'Felhasználói felület',
      settings: 'Beállítások',
      // Settings
      settingsTitle: 'Beállítások',
      showControls: 'Irányítás mutatása',
      hideControls: 'Irányítás elrejtése',
      controls: 'Irányítás',
      home: 'Főoldal',
      // LoginPage
      login: 'Bejelentkezés',
      register: 'Regisztráció',
      noAccount: 'Nincs még fiókod?',
      // RegisterPage
      haveAccount: 'Van már fiókod?',
      // Dashboard
      info: 'Információk',
      welcome: 'Üdv',
      email: 'E-mail',
      noUser: 'Nincs bejelentkezve.',
      deleteAccount: 'Fiók törlése',
      profilePicture: 'Profilkép',
      // LogoutButton
      logout: 'Kijelentkezés',
      // Dashboard Modal
      deleteAccountTitle: 'Fiók törlése',
      deleteAccountConfirm: 'Törlés',
      deleteAccountCancel: 'Mégse',
      deleteAccountQuestion: 'Biztosan törölni szeretnéd a fiókodat?',
      deleteAccountWarning: 'Ez a művelet visszavonhatatlan!',
      success: 'Siker!',
      error: 'Hiba!',
      accountDeleted: 'Fiók sikeresen törölve.',
      deleteError: 'Hiba történt a fiók törlésekor: ',
      // ChapterPage
      continueButton: 'Tovább',
      // EndingScreen
      gameOver: 'Játék vége',
      // Common
      ok: 'OK',
      // HomePage
      storyTitle: 'Halvány emlékek',
      // ChapterPage errors
      errorLoadingScene: 'Hiba történt a jelenet betöltésekor.',
      // 404 Page
      pageNotFound: '404 - Oldal nem található',
      // Auth Forms
      username: 'Felhasználónév',
      password: 'Jelszó',
      loginButton: 'Bejelentkezés',
      registerButton: 'Regisztráció',
      fillAllFields: 'Kérjük, töltse ki az összes mezőt.',
      invalidCredentials: 'Hibás felhasználónév vagy jelszó. Kérjük, próbálja újra.',
      loginError: 'Hiba történt a bejelentkezés során. Kérjük, próbálja meg később.',
      registrationSuccess: 'Sikeres regisztráció! Most már bejelentkezhetsz.',
      registrationFailed: 'Sikertelen regisztráció. Kérjük, próbálja újra.',
      registrationError: 'Hiba történt a regisztráció során. Kérjük, próbálja meg később.',
    },
  },
};

// Get saved language from localStorage or default to 'hu'
const getInitialLanguage = (): string => {
  try {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'hu') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'hu';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Sync i18next language changes with app element attributes
i18n.on('languageChanged', (lng) => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.dataset.language = lng;
    appElement.setAttribute('lang', lng);
  }
  try {
    localStorage.setItem('language', lng);
  } catch {
    // ignore
  }
});

// Set initial app element attributes
const initialLang = i18n.language;
const setInitialLanguage = () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.dataset.language = initialLang;
    appElement.setAttribute('lang', initialLang);
  } else {
    setTimeout(setInitialLanguage, 10);
  }
};
setInitialLanguage();

export default i18n;

