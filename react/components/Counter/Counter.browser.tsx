import { describe, expect, test, vi } from "vitest"
import { render, renderHook } from "vitest-browser-react"

import { Counter, useCounterEffect } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter render", () => {
    test("should render count", async () => {
        const screen = await render(<Counter />)
        const countEl = screen.getByRole("heading", { name: "0" })

        await expect.element(countEl).toBeVisible()
    })

    test("should render disabled decrementing button", async () => {
        const screen = await render(<Counter />)
        const decBtnEl = screen.getByRole("button", { name: "Decrement" })

        await expect.element(decBtnEl).toBeDisabled()
    })
})

describe("Counter incrementing", () => {
    test("should trigger incrementing button", async () => {
        const screen = await render(<Counter />)
        const incBtnEl = screen.getByRole("button", { name: "Increment" })

        await incBtnEl.click()

        await expect.element(incBtnEl).toHaveBeenCalledOnce()
    })

    test("should increment count", async () => {
        const screen = await render(<Counter />)
        const countEl = screen.getByRole("heading", { name: "1" })

        await expect.element(countEl).toBeVisible()
    })
})

describe("Counter decrementing", () => {
    test("should trigger decrementing button", async () => {
        const screen = await render(<Counter />)
        const decBtnEl = screen.getByRole("button", { name: "Decrement" })

        await decBtnEl.click()

        await expect.element(decBtnEl).toHaveBeenCalledOnce()
    })

    test("shouldn't decrement count", async () => {
        const screen = await render(<Counter />)
        const countEl = screen.getByRole("heading", { name: "0" })

        await expect.element(countEl).toBeVisible()
    })
})

describe("Counter hooks", () => {
    test("should trigger incrementing hook", async () => {
        const { act, result } = await renderHook(() => useCounterEffect())

        await act(() => result.current.inc())

        expect(result.current.count).toBe(1)
    })

    test("shouldn't trigger decrementing hook", async () => {
        const { act, result } = await renderHook(() => useCounterEffect())

        await act(() => result.current.dec())

        expect(result.current.count).toBe(0)
    })
})
