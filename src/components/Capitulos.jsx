import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from './UseContext';
import Loader from './Loader';

const Capitulos = () => {
    const { portadas } = useContext(UseContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (portadas.length > 0) {
            setLoading(false);
        }
    }, [portadas]);

    return (
        <>
            <section className="flex flex-col items-center dark:bg-slate-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                    {loading ? (
                        <Loader />
                    ) : (
                        portadas.map((portada) => (
                            <Link key={portada.capitulo} to={`/Cap${portada.capitulo}`}>
                                <div className="flex flex-col items-center m-6 bg-slate-200 max-w-[300px] rounded-xl hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-800 hover:scale-105 duration-500 p-2">
                                    <img
                                        src={portada.url}
                                        alt={`Portada del capítulo ${portada.capitulo}`}
                                        className="portada-img h-max w-auto rounded"
                                    />
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
