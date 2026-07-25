import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Counter } from "../src/components/Counter";

describe("Counter", () => {
    test("loads and displays Counters's heading", async () => {
        render(<Counter />);

        await screen.findByTestId("counter__heading");

        const countStr = screen.getByTestId("counter__heading").textContent;
        const count = parseInt(countStr);

        expect(count).toBe(0);
    });
});
