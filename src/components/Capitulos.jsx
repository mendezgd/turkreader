import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from './UseContext';

const Capitulos = () => {
    const { portadas } = useContext(UseContext); 

    return (
        <div className="portadas-container">
            {portadas.map((portada) => (
                <Link key={portada.capitulo} to={`/Cap${portada.capitulo}`}>
                    <img
                        src={portada.url}
                        alt={`Portada del capítulo ${portada.capitulo}`}
                        className="portada-img h-96 w-72"
                    />
                </Link>
            ))}
        </div>
    );
};

export default Capitulos;
