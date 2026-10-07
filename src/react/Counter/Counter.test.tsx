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

    test("trigger increment when clicking button", async () => {
        const incBtnEl = await screen.findByTestId("counter__inc-btn")
        const countEl = await screen.findByTestId("counter__heading")

        await userEvent.click(incBtnEl)

        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(1)
    })
})
