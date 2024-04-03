const Cap2 = () => {
    const paginasDobles = [];
    const imagenes = [];

    for (let i = 1; i <= 205;) {
        let paddedNumber = String(i).padStart(3, '0');
        if (paginasDobles.includes(i)) {
            const nextPage = String(i + 1).padStart(3, '0');
            paddedNumber = `${paddedNumber}-${nextPage}`;
            i += 2;
        } else {
            i++;
        }
        imagenes.push(`20thCB-02_${paddedNumber}.jpg`);
    }

    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-4xl text-center">Cap 2 - ¡Abrid los Ojos!</h1>
                {imagenes.map((imagen, index) => (
                    <img className="p-5 w-fit h-fit" key={index} src={`./20th Century Boys, 02 - ¡Abrid los Ojos! (Spanish, CRG) por Umbriel/${imagen}`} alt={`Imagen ${index + 1}`} />
                ))}
            </section>
        </>
    )
}

export default Cap2;
