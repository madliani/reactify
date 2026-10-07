import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Counter } from "./Counter"

describe("Counter", () => {
    test("loads and displays heading", async () => {
        const screen = render(<Counter />)

        const countEl = await screen.findByTestId("counter__heading")

        const countStr = countEl.textContent
        const count = parseInt(countStr)

        expect(count).toBe(0)
    })
})
