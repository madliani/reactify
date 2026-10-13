import { decCount, incCount } from "@react/components/Counter/Counter.atom"
import { cleanup, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, test, vi } from "vitest"

import { Counter } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter render", () => {
    afterEach(() => cleanup())

    test("should render count", async () => {
        const screen = render(<Counter />)
        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })

    test("should render disabled decrement button", async () => {
        const screen = render(<Counter />)
        const decBtnEl = await screen.findByTestId("counter__dec-btn")

        expect(decBtnEl).toBeDisabled()
    })
})

describe("Counter incrementing", () => {
    afterEach(() => cleanup())

    test("should trigger increment button", async () => {
        const screen = render(<Counter />)
        const user = userEvent.setup()
        const incBtnEl = await screen.findByTestId("counter__inc-btn")

        await user.click(incBtnEl)

        expect(incCount).toHaveBeenCalledOnce()
    })

    test("should increment count", async () => {
        const screen = render(<Counter />)
        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(1)
    })
})

describe("Counter decrementing", () => {
    afterEach(() => cleanup())

    test("should trigger decrement button", async () => {
        const screen = render(<Counter />)
        const user = userEvent.setup()
        const decBtnEl = await screen.findByTestId("counter__dec-btn")

        await user.click(decBtnEl)

        expect(decCount).toHaveBeenCalledOnce()
    })

    test("shouldn't decrement count", async () => {
        const screen = render(<Counter />)
        const countEl = await screen.findByTestId("counter__heading")
        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })
})
