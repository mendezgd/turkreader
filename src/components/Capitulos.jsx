import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import portadas from './Portadas'; // Asegúrate de que la ruta sea correcta
import Loader from './Loader';

const Capitulos = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Portadas importadas:", portadas); // Verifica que las portadas se están importando correctamente

        // Simulamos una pequeña carga para la experiencia de usuario
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1 className="text-center text-4xl p-5 dark:bg-slate-700 dark:text-white">Capítulos</h1>
            <section className="flex flex-col items-center dark:bg-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {loading ? (
                        <Loader />
                    ) : (
                        portadas.map(({ capitulo, url }) => (
                            <Link target='_blank' to={`/Cap${capitulo}`} key={capitulo}>
                                <div className="flex flex-col items-center m-4">
                                    <img loading="lazy" className="h-auto w-auto rounded" src={url} alt={`Portada del Capítulo ${capitulo}`} />
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default Capitulos;
