import Counter from "../components/Counter/Counter";
import SEO from "../components/SEO/SEO";
import Main from "../layouts/Main";

const Homepage = () => (
    <Main>
        <SEO title="Home" />
        <Counter />
    </Main>
);

export default Homepage;
