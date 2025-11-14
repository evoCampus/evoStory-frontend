import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

export default function Settings() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState<"en" | "hu">(
    document.documentElement.dataset.language === "en" ? "en" : "hu"
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-language"
        ) {
          const htmlLang = document.documentElement.dataset.language;
          if (htmlLang === "en" || htmlLang === "hu") {
            setLanguage(htmlLang);
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-language"],
    });

    return () => observer.disconnect();
  }, []);

  const [showControls, setShowControls] = useState(false);

  const texts = {
    hu: {
      title: "Beállítások",
      showControls: "Irányítás mutatása",
      hideControls: "Irányítás elrejtése",
      controls: "Irányítás",
      home: "Főoldal",
    },
    en: {
      title: "Settings",
      showControls: "Show Controls",
      hideControls: "Hide Controls",
      controls: "Controls",
      home: "Home",
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-t from-black to-gray-800">
      <div className="flex flex-col w-full bg-gray-700 rounded-2xl items-center justify-center p-6">
        <h1 className="font-bold text-center text-white">{t.title}</h1>

        <div className="m-5">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LanguageToggle />
            </div>
          </div>
        </div>


        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => setShowControls((prev) => !prev)}
          >
            {showControls ? t.hideControls : t.showControls}
          </button>
        </div>

        {showControls && (
          <div className="flex flex-col items-center justify-center bg-black rounded text-white m-5 p-4">
            <h2 className="font-semibold">{t.controls}</h2>
            {/* Controls content goes here */}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <Button
            text={t.home}
            className="mt-4"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
