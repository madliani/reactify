import { Head } from "vite-react-ssg";

type Properties = Readonly<{
    description?: string;
    lang?: string;
    title: string;
}>;

export const SEO = ({
    description = "The React Starter Kit.",
    title
}: Properties) => {
    return (
        <Head>
            <meta content={description} name="description" />
            <meta content={description} name="og:description" />
            <meta
                content="https://raw.githubusercontent.com/madliani/reactify/main/assets/images/reactify-homepage.png"
                name="og:image"
            />
            <meta content="github.com/reactify" name="og:site_name" />
            <meta content={title} name="og:title" />

            <title>Reactify | {title}</title>
        </Head>
    );
};
