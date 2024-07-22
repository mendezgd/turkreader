import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-200 shadow dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Turk's Reader</a>                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">Inicio</Link>
                        </li>
                        <li>
                            <Link to="capitulos" className="hover:underline me-4 md:me-6">20th Century Boys</Link>
                        </li>
                        <li>
                            <Link to="mailto:mendezgd88@gmail.com" className="hover:underline">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer;