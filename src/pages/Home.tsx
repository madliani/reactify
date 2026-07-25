import Counter from "../components/Counter";
import SEO from "../components/SEO";
import Main from "../layouts/Main";

const Home = () => (
    <Main>
        <SEO title="Home" />
        <Counter />
    </Main>
);

export default Home;
