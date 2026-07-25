import { Helmet } from "react-helmet-async";

type SEOProperties = Readonly<{
    description?: string;
    lang?: string;
    title: string;
}>;

const titleTemplate = (title: string) => `Reactify | ${title}`;

const SEO = ({
    description = "The React Starter Kit.",
    title
}: SEOProperties) => (
    <Helmet title={titleTemplate(title)} prioritizeSeoTags>
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta
            content="https://raw.githubusercontent.com/madliani/reactify/main/assets/images/reactify-homepage.png"
            name="og:image"
        />
        <meta content="github.com/reactify" name="og:site_name" />
        <meta content={titleTemplate(title)} name="og:title" />
    </Helmet>
);

export default SEO;
