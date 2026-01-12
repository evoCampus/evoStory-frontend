import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      languageToggle:{
        title: 'Language',
        currentLanguage: 'English',
        switchLanguage: 'Switch language',
      },
      theme: {
        title: 'Theme',
        dark: 'Dark',
        light: 'Light',
        switchTheme: 'Switch theme',
      },
      homePage:{
        title: 'Faded Memories',
        continue: 'Continue Game',
        newGame: 'New Game',
        dashboard: 'Dashboard',
        settings: 'Settings',
      },
      settings:{
        title: 'Settings',
        showControls: 'Show Controls',
        hideControls: 'Hide Controls',
        controls: 'Controls',
        home: 'Home',
      },
      loginPage:{
        login: 'Login',
        register: 'Register',
        noAccount: "Don't have an account yet?",
      },
      registerPage:{
        title: 'Register',
        haveAccount: 'Already have an account?',
      },
      dashboard:{
        title: 'Dashboard',
        info: 'Information',
        welcome: 'Welcome',
        email: 'Email',
        noUser: 'Not logged in.',
        deleteAccount: 'Delete Account',
        profilePicture: 'Profile picture',
        deleteSuccess: 'Account successfully deleted!',
        deleteError: 'Error deleting account: ',
        unknownError: 'Unknown error',
      },
      deleteAccountModal:{
        title: 'Delete Account',
        confirm: 'Delete',
        cancel: 'Cancel',
        question: 'Are you sure you want to delete your account?',
        warning: 'This action is irreversible!',
      },
      endingScreen:{
        gameOver: 'Game Over',
        newGame: 'New Game',
        home: 'Home',
      },
      notFoundPage:{
        pageNotFound: '404 - Page not found',
      },
      chapter:{
        errorLoadingScene: 'Error while loading scene.',
        continue: 'Continue',
        home: 'Home',
      },
      logout:{
        button: 'Logout',
      },
      modal:{
        ok: 'OK',
        success: 'Success',
        error: 'Error',
      },
      authForms:{
        username: 'Username',
        email: 'Email',
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
  },
  hu: {
    translation: {
      languageToggle:{
        title: 'Nyelv',
        currentLanguage: 'Magyar',
        switchLanguage: 'Nyelv váltása',
      },
      theme: {
        title: 'Téma',
        dark: 'Sötét',
        light: 'Világos',
        switchTheme: 'Téma váltása',
      },
      homePage:{
        title: 'Halvány emlékek',
        continue: 'Játék folytatása',
        newGame: 'Új játék',
        dashboard: 'Felhasználói felület',
        settings: 'Beállítások',
      },
      settings:{
        title: 'Beállítások',
        showControls: 'Irányítás mutatása',
        hideControls: 'Irányítás elrejtése',
        controls: 'Irányítás',
        home: 'Főoldal',
      },
      loginPage:{
        login: 'Bejelentkezés',
        register: 'Regisztráció',
        noAccount: 'Nincs még fiókod?',
      },
      registerPage:{
        title: 'Regisztráció',
        haveAccount: 'Van már fiókod?',
      },
      dashboard:{
        title: 'Felhasználói felület',
        info: 'Információk',
        welcome: 'Üdv',
        email: 'E-mail',
        noUser: 'Nincs bejelentkezve.',
        deleteAccount: 'Fiók törlése',
        profilePicture: 'Profilkép',
        deleteSuccess: 'Fiók sikeresen törölve!',
        deleteError: 'Hiba a fiók törlésekor: ',
        unknownError: 'Ismeretlen hiba',
      },
      deleteAccountModal:{
        title: 'Fiók törlése',
        confirm: 'Törlés',
        cancel: 'Mégse',
        question: 'Biztosan törölni szeretnéd a fiókodat?',
        warning: 'Ez a művelet visszavonhatatlan!',
      },
      endingScreen:{
        gameOver: 'Játék vége',
        newGame: 'Új játék',
        home: 'Főoldal',
      },
      notFoundPage:{
        pageNotFound: '404 - Oldal nem található',
      },
      chapter:{
        errorLoadingScene: 'Hiba történt a jelenet betöltésekor.',
        continue: 'Tovább',
        home: 'Főoldal',
      },
      logout:{
        button: 'Kijelentkezés',
      },
      modal:{
        ok: 'OK',
        success: 'Sikeres',
        error: 'Hiba',
      },
      authForms:{
        username: 'Felhasználónév',
        email: 'E-mail',
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

