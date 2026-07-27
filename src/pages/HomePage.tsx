import Counter from "../components/Counter";
import SEO from "../components/SEO/SEO";
import Main from "../layouts/Main";

const Homepage = () => (
    <Main>
        <SEO title="Home" />
        <Counter />
    </Main>
);

export default Homepage;
