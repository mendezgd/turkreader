import React, { createContext, useContext, useState, useEffect } from 'react';

const UseContext = createContext();

export const useDarkMode = () => {
    const context = useContext(UseContext);
    if (!context) {
        throw new Error('useDarkMode debe ser usado dentro de un DarkModeProvider');
    }
    return context;
};

export const portadas = [
    { capitulo: 1, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP1%2F20thCB_001.jpg?alt=media&token=d46d6b21-de62-4b04-af51-274793152afc" },
    { capitulo: 2, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP2%2F20thCB-02_001.jpg?alt=media&token=85c0e86b-2ecf-45a1-b2e9-5a6fac8dcd3a" },
    { capitulo: 3, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP3%2F20thCB-03_001.jpg?alt=media&token=00526453-427f-439d-a6e6-b67ba3b88e2a" },
    { capitulo: 4, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP4%2F20thCB-04_001.jpg?alt=media&token=6c51ab98-d164-48f8-b4f2-11437f9139a2" },
    { capitulo: 5, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP5%2F20thCB-05_001.jpg?alt=media&token=e6034816-2278-4f70-8f38-007acf3486af" },
    { capitulo: 6, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP6%2F20thCB-06_001.jpg?alt=media&token=af1890c5-7d9b-405a-8040-2dc718fcd713" },
    { capitulo: 7, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP7%2F20thCB-07_001.jpg?alt=media&token=5c7a87da-c635-441d-a782-cec116cfa3bf" },
    { capitulo: 8, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP8%2F20thCB-08_001.jpg?alt=media&token=fd34647b-d219-414d-98e3-4ce6c10fff67" },
    { capitulo: 9, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP9%2F20thCB-09_001.jpg?alt=media&token=66d642a3-3a4d-4076-ba03-fd65c8364fce" },
    { capitulo: 10, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP10%2F20thCB-10_001.jpg?alt=media&token=c19cd96e-1369-4ac7-8c53-e37c1ba688a3" },
    { capitulo: 11, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP11%2F20thCB-11_001.jpg?alt=media&token=e8750d25-e4a0-4c1b-b995-1dd0cc4122b7" },
    { capitulo: 12, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP12%2F20thCB-12_001.jpg?alt=media&token=33b4cc0f-3c2e-403a-939c-383848a2a850" },
    { capitulo: 13, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP13%2F20thCB-13_001.jpg?alt=media&token=81e06d8f-8b18-4744-956a-a7dc4b9f81e9" },
    { capitulo: 14, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP14%2F20thCB-14_001.jpg?alt=media&token=301d2adc-097e-4af6-811f-44ba4e008380" },
    { capitulo: 15, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP15%2F20thCB-15_001.jpg?alt=media&token=f0ba83e9-583f-4c1c-9a49-feff55e604f8" },
    { capitulo: 16, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP16%2F20thCB-16_001.jpg?alt=media&token=040a72f1-865f-40b9-b832-d9b72ef48720" },
    { capitulo: 17, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP17%2F20thCB-17_001.jpg?alt=media&token=7edb5828-cd14-48c6-9069-8af4eb815e71" },
    { capitulo: 18, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP18%2F20thCB-18_001.jpg?alt=media&token=19cb6c33-448d-4424-8710-096a56c93377" },
    { capitulo: 19, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP19%2F20thCB-19_001.jpg?alt=media&token=b60f49d7-28fd-431c-b114-23ab291c67bc" },
    { capitulo: 20, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP20%2F20thCB-20_001.jpg?alt=media&token=d5449153-76a5-4b64-b5ac-896e3520579d" },
    { capitulo: 21, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP21%2F20thCB-21_001.jpg?alt=media&token=d5c0b1d2-ad22-4f80-9169-ac543cb3d00a" },
    { capitulo: 22, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP22%2F20thCB-22_001.jpg?alt=media&token=e0c9115d-2638-4fba-a534-0f596f170456" }
];

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <UseContext.Provider value={{ darkMode, toggleDarkMode, portadas }}>
            {children}
        </UseContext.Provider>
    );
};


export { UseContext };