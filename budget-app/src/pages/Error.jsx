// RRD
import { Link, useNavigate, useRouteError } from "react-router-dom";

// libraries
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <p>Error</p>
            <h3>{error.message || isRouteErrorResponse.statusText}</h3>
            <div className="flex-md">
                <button 
                    className="btn btn--dark"
                    onClick={ () => navigate(-1) }
                >
                    <ArrowUturnLeftIcon width={20}/>
                    <span>Go Back</span>
                </button>
                <Link to="/" className="btn btn--dark">
                    <HomeIcon width={20}/>
                    <span>Go Home</span>
                </Link>
            </div>
        </div>
    )
}
export default Error;