import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const err = useRouteError();

    console.log(err)
    return (
        <div className="error">
            400 : This path does not exist
        </div>
    )
}

export default Error;