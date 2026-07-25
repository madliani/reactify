import { Clicker } from "../components/Clicker";
import { SEO } from "../components/SEO";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <Main>
                <Clicker />
            </Main>
        </>
    );
};
