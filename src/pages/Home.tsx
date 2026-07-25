import Counter from "../components/Counter";
import SEO from "../components/SEO";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <Main>
                <Counter />
            </Main>
        </>
    );
};
