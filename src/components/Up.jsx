import { Link } from "react-router-dom";

const up = () => {

    return (
        <>
            <Link to="#Logo">
                <div className="relative">
                    <div className="fixed top-32 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
                            <path d="M18 20v-17" />
                            <path d="M15 6l3 -3l3 3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default up;