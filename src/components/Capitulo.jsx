import React, { useEffect, useState } from 'react';
import { storage } from '../Firebase/data';
import { ref, listAll, getDownloadURL } from "firebase/storage";

function Capitulo({ numero }) {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const pathReference = ref(storage, `gs://poxreader.appspot.com/Manga/CAP${numero}`);
            const res = await listAll(pathReference);
            const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
            setImageUrls(urls);
        };

        fetchImages();
    }, [numero]);

    return (
        <section className="flex flex-col items-center">
            {imageUrls.map((url, index) => (
                <img className="p-5 w-fit h-fit" key={index} src={url} alt={`Imagen del capítulo ${numero}`} />
                
            ))}
        </section>
    );
}

export default Capitulo;
