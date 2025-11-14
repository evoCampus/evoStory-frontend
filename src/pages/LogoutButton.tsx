import { JSX, useState, useEffect } from "react";

export default function LogoutButton(): JSX.Element {
  const [language, setLanguage] = useState<"hu" | "en">(
    document.documentElement.dataset.language === "en" ? "en" : "hu"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.dataset.language;
      if (lang === "en" || lang === "hu") {
        setLanguage(lang);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-language"],
    });

    return () => observer.disconnect();
  }, []);

  const buttonText = language === "hu" ? "Kijelentkezés" : "Logout";

  return (
    <button
      onClick={() => {
        console.log("Logging out...");
      }}
      className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4
                 transition duration-300 ease-in-out
                 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 hover:text-black
                 focus:outline-none focus:shadow-outline"
    >
      {buttonText}
    </button>
  );
}
