import { Counter } from "../../components/Counter/Counter";
import { SEO } from "../../components/SEO/SEO";
import { Layout } from "../../layouts/Layout/Layout";

export const HomePageView = () => (
    <Layout>
        <SEO title="Home" />
        <Counter />
    </Layout>
);
