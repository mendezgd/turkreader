import { Link } from "react-router-dom";

const Capitulos = () => {
    const capitulos = Array.from({ length: 22 }, (_, i) => i + 1);

    return (
        <>
            <h1 className="text-center text-4xl m-5">Capítulos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                {capitulos.map((capitulo) => (
                    <Link to={`/Cap${capitulo}`} key={capitulo}>
                        <button className="bg-heroboys bg-cover sepia hover:sepia-0 text-3xl h-36 w-64 text-yellow-50 text-center mb-1 border-black rounded-lg">
                            Capítulo {capitulo}
                        </button>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Capitulos;