import fs from 'fs';

const Blog = () => {
    const imagenes = [
        "20thCB_001.jpg",
        "20thCB_002.jpg",
        "20thCB_003.jpg",
        "20thCB_004.jpg",
        "20thCB_005.jpg",
        "20thCB_006.jpg",
        "20thCB_007.jpg",
        "20thCB_008.jpg",
    ]

    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center">20th Century Boys</h1>
                {imagenes.map((imagen, index) => (
                    <img className="p-5 my-5 w-fit h-fit" key={index} src={`./20th Century Boys, 01 - Amigo (Spanish, CRG) por Umbriel/${imagen}`} alt={`Imagen ${index + 1}`} />
                ))}
            </section>
        </>
    )
}

export default Blog;