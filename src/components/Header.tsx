import logo from "../../assets/images/logo.svg";
import { Code } from "./Code";

export const Header = () => {
    return (
        <header>
            <img alt="logo" src={logo} />
            <p>
                Edit <Code /> and save to reload.
            </p>
            <a
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank"
            >
                Learn React
            </a>
        </header>
    );
};
