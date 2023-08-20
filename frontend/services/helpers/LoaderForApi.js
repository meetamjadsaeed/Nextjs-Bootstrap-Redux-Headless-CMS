import React from "react";
import { BounceLoader } from "react-spinners";

const CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const LoaderForApi = () => {
    return (
        <BounceLoader
            color="#7dab3c"
            cssOverride={CSSProperties}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default LoaderForApi;
