import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useEffectMock, useEffectSpy } from "../mocks/Code.mock";
import { Code } from "../src/components/Code";

test("loads and displays code", async () => {
    const arrange = () => {
        render(<Code />);
    };

    const act = async () => {
        await screen.findByTestId("code");
    };

    const assert = () => {
        const code = screen.getByTestId("code").textContent;

        expect(useEffectMock).toHaveBeenCalled();
        expect(code).toBe("");
    };

    useEffectSpy.mockImplementation(useEffectMock);
    arrange();
    await act();
    assert();
    useEffectSpy.mockClear();
});
