import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeAll, describe, expect, test } from "vitest"

import { Counter } from "./Counter"

describe("Counter", () => {
    beforeAll(() => {
        render(<Counter />)
    })

    test("loads and displays heading", async () => {
        const countEl = await screen.findByTestId("counter__heading")

        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })

    test("loads and displays disabled decrement button", async () => {
        const decBtnEl = await screen.findByTestId("counter__dec-btn")

        expect(decBtnEl).toBeDisabled()
    })

    test("triggers increment when clicking increment button is clicked", async () => {
        const user = userEvent.setup()
        const incBtnEl = await screen.findByTestId("counter__inc-btn")
        const countEl = await screen.findByTestId("counter__heading")

        await user.click(incBtnEl)

        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(1)
    })

    test("not trigger decrement when clicking decrement button", async () => {
        const user = userEvent.setup()
        const decBtnEl = await screen.findByTestId("counter__dec-btn")
        const countEl = await screen.findByTestId("counter__heading")

        await user.click(decBtnEl)

        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })
})
