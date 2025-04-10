import { useEffect, useState } from 'react';
import { storage } from '../Firebase/data';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Loader from './Loader';
import PropTypes from 'prop-types';

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
        <>
            <section className="flex flex-col items-center dark:bg-slate-900">
                {loading ? (
                    <Loader />
                ) : (
                    imageUrls.map((url, index) => (
                        <img
                            loading="lazy"
                            className="p-1 w-fit h-fit"
                            key={index}
                            src={url}
                            alt={`Imagen del capítulo ${numero}`}
                        />
                    ))
                )}
            </section>
        </>
    );
}

Capitulo.propTypes = {
    numero: PropTypes.number.isRequired,
};
Capitulo.propTypes = {
    numero: PropTypes.number.isRequired,
};

export default Capitulo;