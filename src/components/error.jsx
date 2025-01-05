import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h2>OOPS!! </h2>
            <h3>Something Went Wrong</h3>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
};

export default ErrorComponent;