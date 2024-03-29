const Blog = () => {
    const paginasDobles = [9, 61, 203];
    const imagenes = [];

    for (let i = 1; i <= 211; ) {
        let paddedNumber = String(i).padStart(3, '0');
        if (paginasDobles.includes(i)) {
            const nextPage = String(i + 1).padStart(3, '0');
            paddedNumber = `${paddedNumber}-${nextPage}`;
            i += 2;
        } else {
            i++;
        }
        imagenes.push(`20thCB_${paddedNumber}.jpg`);
    }

    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center">20th Century Boys</h1>
                {imagenes.map((imagen, index) => (
                    <img className="p-5 w-fit h-fit" key={index} src={`./20th Century Boys, 01 - Amigo (Spanish, CRG) por Umbriel/${imagen}`} alt={`Imagen ${index + 1}`} />
                ))}
            </section>
        </>
    )
}

export default Blog;
