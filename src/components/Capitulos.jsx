import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { storage } from '../Firebase/data';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Loader from './Loader';

const Capitulos = () => {
    const [portadas, setPortadas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortadas = async () => {
            try {
                const portadasPromises = [];
                for (let i = 1; i <= 22; i++) {
                    portadasPromises.push((async () => {
                        const pathReference = ref(storage, `gs://poxreader.appspot.com/Manga/CAP${i}`);
                        const res = await listAll(pathReference);
                        if (res.items.length > 0) {
                            const firstImageRef = res.items.find(item => item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png'));
                            if (firstImageRef) {
                                const url = await getDownloadURL(firstImageRef);
                                return { capitulo: i, url };
                            }
                        }
                        return null;
                    })());
                }

                const portadasUrls = await Promise.all(portadasPromises);
                setPortadas(portadasUrls.filter(p => p !== null));
            } catch (error) {
                console.error('Error fetching portadas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortadas();
    }, []);

    return (
        <>
            <h1 className="text-center text-4xl p-5 dark:bg-slate-700 dark:text-white">Capítulos</h1>
            <section className="flex flex-col items-center dark:bg-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {loading ? (
                        <Loader />
                    ) : (
                        portadas && portadas.length > 0 ? (
                            portadas.map(({ capitulo, url }) => (
                                <Link target='_blank' to={`/Cap${capitulo}`} key={capitulo}>
                                    <div className="flex flex-col items-center m-4">
                                        <img loading="lazy" className="h-auto w-auto rounded" src={url} alt={`Portada del Capítulo ${capitulo}`} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No se encontraron portadas disponibles.</p>
                        )
                    )}
                </div>
            </section>
        </>
    );
};

export default Capitulos;
