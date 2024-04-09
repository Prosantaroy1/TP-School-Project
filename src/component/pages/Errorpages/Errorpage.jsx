import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oppp!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'>
               <button>Go to Back Home</button>
            </Link>
        </div>
    );
};

export default Errorpage;