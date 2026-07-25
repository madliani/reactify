import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Clicker } from "../src/components/Clicker";

describe("Clicker", () => {
    test("loads and displays Clicker's heading", async () => {
        render(<Clicker />);

        await screen.findByTestId("clicker__heading");

        const countStr = screen.getByTestId("clicker__heading").textContent;
        const count = parseInt(countStr);

        expect(count).toBe(0);
    });
});
