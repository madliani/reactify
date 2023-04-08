import { Header } from "../components/Header";
import { SEO } from "../components/SEO";
import { Main } from "../layouts/Main";

export const Home = function () {
    return (
        <>
            <SEO title="Home" />
            <Main>
                <Header />
            </Main>
        </>
    );
};
