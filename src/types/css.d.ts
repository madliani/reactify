declare module "*.module.css" {
    type Rules = { [property: string]: string };

    const rules: Readonly<Rules>;

    export default rules;
}
