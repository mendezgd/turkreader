import React, { useEffect, useState } from 'react';
import { storage } from '../Firebase/data';
import { ref, listAll, getDownloadURL } from "firebase/storage";

function Capitulo({ numero }) {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            const pathReference = ref(storage, `gs://poxreader.appspot.com/Manga/CAP${numero}`);
            const res = await listAll(pathReference);
            const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
            setImageUrls(urls);
            setLoading(false);
        };

        fetchImages();
    }, [numero]);

    return (
        <section className="flex flex-col items-center">
            {loading ? (
                <div className="flex flex-row gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
                </div>
            ) : (
                imageUrls.map((url, index) => (
                    <img className="p-5 w-fit h-fit" key={index} src={url} alt={`Imagen del capítulo ${numero}`} />
                ))
            )}
        </section>
    );
}

export default Capitulo;
