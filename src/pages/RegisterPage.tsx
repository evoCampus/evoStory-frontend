import RegisterForm from '../auth/forms/RegisterForm';
import '../index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface RegisterPageProps { }

export default function RegisterPage({ }: RegisterPageProps): React.JSX.Element {

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

    const texts = {
        hu: {
            register: "Regisztráció",
            login: "Jelentkezz be",
            haveAccount: "Van már fiókod?",
        },
        en: {
            register: "Register",
            login: "Login",
            haveAccount: "Already have an account?",
        },
    };

    const t = texts[language];

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                    <h2>{t.register}</h2>
                    <RegisterForm />
                    <p className="text-center text-gray-400">
                        {t.haveAccount} <Link to="/login" className="text-blue-500 hover:underline">{t.login}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}