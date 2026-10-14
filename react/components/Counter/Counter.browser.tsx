import { afterEach, describe, expect, test, vi } from "vitest"
import { cleanup, render, renderHook } from "vitest-browser-react"

import { Counter, useCounter } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter", () => {
    afterEach(() => cleanup())

    test("should render count", async () => {
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

        await incBtnEl.click()

        const countEl = screen.getByRole("heading", { name: "1" })

        await expect.element(countEl).toBeVisible()
    })

    test("shouldn't trigger decrement", async () => {
        const screen = await render(<Counter />)
        const decBtnEl = screen.getByRole("button", { name: "Decrement" })

        await decBtnEl.click()

        const countEl = screen.getByRole("heading", { name: "0" })

        await expect.element(countEl).toBeVisible()
    })
})

describe("Counter hooks", () => {
    afterEach(() => cleanup())

    test("should trigger hook with increment", async () => {
        const { act, result } = await renderHook(() => useCounter())

        await act(() => result.current.inc())

        expect(result.current.count).toBe(1)
    })

    test("shouldn't trigger hook with decrement", async () => {
        const { act, result } = await renderHook(() => useCounter())

        await act(() => result.current.dec())

        expect(result.current.count).toBe(0)
    })
})
