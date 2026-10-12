import { decCount, incCount } from "@react/components/Counter/Counter.atom"
import { cleanup, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, test, vi } from "vitest"

import { Counter } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter", () => {
    afterEach(() => cleanup())

    test("should render count", async () => {
        const screen = render(<Counter />)
        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })

    test("should render disabled decrementing button", async () => {
        const screen = render(<Counter />)
        const decBtnEl = await screen.findByTestId("counter__dec-btn")

        expect(decBtnEl).toBeDisabled()
    })

    test("should trigger incrementing", async () => {
        const screen = render(<Counter />)
        const user = userEvent.setup()
        const incBtnEl = await screen.findByTestId("counter__inc-btn")

        await user.click(incBtnEl)

        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(incCount).toHaveBeenCalledOnce()
        expect(count).toBe(1)
    })

    test("shouldn't trigger decrementing", async () => {
        const screen = render(<Counter />)
        const user = userEvent.setup()
        const decBtnEl = await screen.findByTestId("counter__dec-btn")

        await user.click(decBtnEl)

        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(decCount).toHaveBeenCalledOnce()
        expect(count).toBe(0)
    })
})
