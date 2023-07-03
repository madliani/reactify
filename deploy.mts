import { publish } from "gh-pages";

publish(
    "./dist",
    {
        branch: "main",
        dest: "reactify",
        repo: "https://github.com/crystallographer/crystallographer.github.io.git"
    },
    console.error
);
