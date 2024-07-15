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
            const portadasUrls = [];
            for (let i = 1; i <= 22; i++) {
                const pathReference = ref(storage, `gs://poxreader.appspot.com/Manga/CAP${i}`);
                const res = await listAll(pathReference);
                if (res.items.length > 0) {
                    const firstImageRef = res.items.find(item => item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png'));
                    if (firstImageRef) {
                        const url = await getDownloadURL(firstImageRef);
                        portadasUrls.push({ capitulo: i, url });
                    }
                }
            }
            setLoading(false);
            setPortadas(portadasUrls);
        };

        fetchPortadas();
    }, []);

    return (
        <>
            <h1 className="text-center text-4xl m-5">Capítulos</h1>
            <section className="flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {loading ? (
                        <Loader />
                    ) : (
                        portadas.map(({ capitulo, url }) => (
                            <Link target='_blank' to={`/Cap${capitulo}`} key={capitulo}>
                                <div className="flex flex-col items-center m-4">
                                    <img loading="lazy" className="h-96 w-auto" src={url} alt={`Portada del Capítulo ${capitulo}`} />
                                </div>
                            </Link>
                        )))
                    }
                </div>
            </section>
        </>
    )
}
export default Capitulos;  