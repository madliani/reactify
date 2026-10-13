import { decCount, incCount } from "@react/components/Counter/Counter.atom"
import {
    act,
    cleanup,
    render,
    renderHook,
    screen
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
    afterAll,
    afterEach,
    beforeAll,
    describe,
    expect,
    test,
    vi
} from "vitest"

import { Counter, useCounterEffect } from "./Counter"

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

describe("Counter", () => {
    describe("Counter rendering", () => {
        beforeAll(() => render(<Counter />))
        afterAll(() => cleanup())

        test("should render count", async () => {
            const countEl = await screen.findByTestId("counter__heading")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(0)
        })

        test("should render disabled decrement button", async () => {
            const decBtnEl = await screen.findByTestId("counter__dec-btn")

            expect(decBtnEl).toBeDisabled()
        })
    })

    describe("Counter increment", { concurrent: false }, () => {
        beforeAll(() => render(<Counter />))
        afterAll(() => cleanup())

        test("should trigger increment button", async () => {
            const user = userEvent.setup()
            const incBtnEl = await screen.findByTestId("counter__inc-btn")

            await user.click(incBtnEl)

            expect(incCount).toHaveBeenCalledOnce()
        })

        test("should increment count", async () => {
            const countEl = await screen.findByTestId("counter__heading")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(1)
        })
    })

    describe("Counter decrement", { concurrent: false }, () => {
        beforeAll(() => render(<Counter />))
        afterAll(() => cleanup())

        test("should trigger decrement button", async () => {
            const user = userEvent.setup()
            const decBtnEl = await screen.findByTestId("counter__dec-btn")

            await user.click(decBtnEl)

            expect(decCount).toHaveBeenCalledOnce()
        })

        test("shouldn't decrement count", async () => {
            const countEl = await screen.findByTestId("counter__heading")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(0)
        })
    })

    describe("Counter hooks", () => {
        afterEach(() => cleanup())

        test("should trigger hook with increment", async () => {
            const { result } = renderHook(() => useCounterEffect())

            act(() => result.current.inc())

            expect(result.current.count).toBe(1)
        })

        test("shouldn't trigger hook with decrement", async () => {
            const { result } = renderHook(() => useCounterEffect())

            act(() => result.current.dec())

            expect(result.current.count).toBe(0)
        })
    })
})
