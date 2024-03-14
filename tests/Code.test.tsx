import "@testing-library/jest-dom";
import {
    act,
    render,
    screen,
    waitFor,
    waitForOptions
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useEffectSpy } from "../mocks/Code.mock";
import { Code } from "../src/components/Code";

describe("Code", async () => {
    test("loads and displays code", async () => {
        const options: Readonly<waitForOptions> = {
            timeout: 1_000
        };

        render(<Code />);

        useEffectSpy.mockReturnValue(
            void {
                CODE: "src/App.tsx"
            }
        );

        await act(async () => {
            await screen.findByTestId("code");
        });

        await waitFor(() => {
            const code = screen.getByTestId("code").textContent;

            expect(code).toBe("src/App.tsx");
        }, options);

        useEffectSpy.mockClear();
    });
});
