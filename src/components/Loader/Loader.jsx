import { Triangle } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => (
    <LoaderWrapper>
        <Triangle color="#0ffff8" height={100} width={100} ariaLabel='loading' />
    </LoaderWrapper>
);