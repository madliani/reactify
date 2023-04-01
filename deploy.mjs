import { publish } from "gh-pages";

try {
    publish("./dist", {
        branch: "main",
        repo: "https://github.com/crystallographer/crystallographer.github.io.git",
        dest: "portfolio/reactify"
    });
} catch (error) {
    console.error(error);
}
