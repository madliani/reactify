import { Helmet } from "react-helmet";

type Meta = Readonly<{ content: string; name: string }>;

type Properties = Readonly<{
    description?: string;
    lang?: string;
    meta?: Meta[];
    title: string;
}>;

export const SEO = ({
    description = "The React Starter Kit.",
    lang = "en",
    meta = [],
    title
}: Properties) => {
    const titleTemplates = "Reactify | %s";

    const htmlAttributes = {
        lang
    };

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
            meta={[
                {
                    content: description,
                    name: "description"
                },
                {
                    content: description,
                    property: "og:description"
                },
                {
                    content:
                        "https://raw.githubusercontent.com/madliani/reactify/main/src/assets/images/logo.svg",
                    name: "og:image"
                },
                {
                    content: "github.com/reactify",
                    name: "og:site_name"
                },
                {
                    content: title,
                    property: "og:title"
                },
                ...meta
            ]}
            title={title}
            titleTemplate={titleTemplates}
        />
    );
};
