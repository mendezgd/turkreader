const Hero = () => {
    return (
        <>
            <div className="bg-slate-900 dark:bg-slate-400">
                <section className="relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-80"
                        style={{ backgroundImage: "url('./heroboys.png')" }}
                    ></div>
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                        <div className=" space-y-5 max-w-4xl mx-auto text-center">
                            <h2 className=" text-4xl text-white dark:text-amber-200 font-extrabold mx-auto md:text-5xl">
                                turK&apos;s Reader
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-400 dark:text-amber-200">
                                En turK&apos;s reader, nos enorgullecemos de ofrecer una experiencia de lectura de manga completamente libre de publicidades. Disfruta de tus mangas favoritos sin interrupciones y con la máxima comodidad gracias a nuestro formato de lectura en cascada.
                            </p>
                        </div>
                    </div>
                    <div
                        className="inset-0 m-auto max-w-xs h-[399px] blur-[118px] sm:max-w-md md:max-w-lg"
                        style={{
                            background:
                                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                        }}
                    ></div>
                </section>
            </div>
        </>
    );
};

export default Hero;
