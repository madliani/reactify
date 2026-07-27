import Counter from "../components/Counter/Counter";
import SEO from "../components/SEO/SEO";
import Layout from "../layouts/Layout/Layout";

const HomePage = () => (
    <Layout>
        <SEO title="Home" />
        <Counter />
    </Layout>
);

export default HomePage;
