import { decCount, incCount } from "@react/components/Counter/Counter.atom"
import { describe, expect, test, vi } from "vitest"
import { render } from "vitest-browser-react"

import { Counter } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter", () => {
    test("should render heading", async () => {
        const screen = await render(<Counter />)

        const countEl = screen.getByRole("heading", { name: "0" })

        await expect.element(countEl).toBeVisible()
    })

    test("should render disabled decrement button", async () => {
        const screen = await render(<Counter />)

        const decBtnEl = screen.getByRole("button", { name: "Decrement" })

        await expect.element(decBtnEl).toBeDisabled()
    })

    test("should trigger increment", async () => {
        const screen = await render(<Counter />)

        const incBtnEl = screen.getByRole("button", { name: "Increment" })
        const countEl = screen.getByRole("heading", { name: "1" })

        await incBtnEl.click()

        expect(incCount).toHaveBeenCalledOnce()
        await expect.element(countEl).toBeVisible()
    })

    test("shouldn't trigger decrement", async () => {
        const screen = await render(<Counter />)

        const decBtnEl = screen.getByRole("button", { name: "Decrement" })
        const countEl = screen.getByRole("heading", { name: "0" })

        await decBtnEl.click()

        expect(decCount).toHaveBeenCalledOnce()
        await expect.element(countEl).toBeVisible()
    })
})
