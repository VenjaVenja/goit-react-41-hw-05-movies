// import { Navigation } from "components/Navigation/Navigation";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout = () => (
    <Container>
        <AppBar/>
        <Outlet/>
    </Container>
);