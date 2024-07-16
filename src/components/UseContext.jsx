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
    { capitulo: 2, url: "gs://poxreader.appspot.com/Manga/CAP2/20thCB-02_001.jpg" },
    { capitulo: 3, url: "gs://poxreader.appspot.com/Manga/CAP3/20thCB-03_001.jpg" },
    { capitulo: 4, url: "gs://poxreader.appspot.com/Manga/CAP4/20thCB-04_001.jpg" },
    { capitulo: 5, url: "gs://poxreader.appspot.com/Manga/CAP5/20thCB-05_001.jpg" },
    { capitulo: 6, url: "gs://poxreader.appspot.com/Manga/CAP6/20thCB-06_001.jpg" },
    { capitulo: 7, url: "gs://poxreader.appspot.com/Manga/CAP7/20thCB-07_001.jpg" },
    { capitulo: 8, url: "gs://poxreader.appspot.com/Manga/CAP8/20thCB-08_001.jpg" },
    { capitulo: 9, url: "gs://poxreader.appspot.com/Manga/CAP9/20thCB-09_001.jpg" },
    { capitulo: 10, url: "https://firebasestorage.googleapis.com/v0/b/poxreader.appspot.com/o/Manga%2FCAP10%2F20thCB-10_001.jpg?alt=media&token=c19cd96e-1369-4ac7-8c53-e37c1ba688a3" },
    { capitulo: 11, url: "gs://poxreader.appspot.com/Manga/CAP11/20thCB-11_001.jpg" },
    { capitulo: 12, url: "gs://poxreader.appspot.com/Manga/CAP12/20thCB-12_001.jpg" },
    { capitulo: 13, url: "gs://poxreader.appspot.com/Manga/CAP13/20thCB-13_001.jpg" },
    { capitulo: 14, url: "gs://poxreader.appspot.com/Manga/CAP14/20thCB-14_001.jpg" },
    { capitulo: 15, url: "gs://poxreader.appspot.com/Manga/CAP15/20thCB-15_001.jpg" },
    { capitulo: 16, url: "gs://poxreader.appspot.com/Manga/CAP16/20thCB-16_001.jpg" },
    { capitulo: 17, url: "gs://poxreader.appspot.com/Manga/CAP17/20thCB-17_001.jpg" },
    { capitulo: 18, url: "gs://poxreader.appspot.com/Manga/CAP18/20thCB-18_001.jpg" },
    { capitulo: 19, url: "gs://poxreader.appspot.com/Manga/CAP19/20thCB-19_001.jpg" },
    { capitulo: 20, url: "gs://poxreader.appspot.com/Manga/CAP20/20thCB-20_001.jpg" },
    { capitulo: 21, url: "gs://poxreader.appspot.com/Manga/CAP21/20thCB-21_001.jpg" },
    { capitulo: 22, url: "gs://poxreader.appspot.com/Manga/CAP22/20thCB-22_001.jpg" }
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