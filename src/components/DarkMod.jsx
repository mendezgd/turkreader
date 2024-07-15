import React, { useState } from 'react';

function DarkMod() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`App ${darkMode ? 'dark:bg-gray-900 dark:text-white' : ''}`}>
            <button
                className='darkMod'
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <>
                        <span role="img" aria-label="Light Mode">🌞</span> Light
                    </>
                ) : (
                    <>
                        <span role="img" aria-label="Dark Mode">🌙</span> Dark
                    </>
                )}
            </button>
        </div>
    );
}

export default DarkMod;
