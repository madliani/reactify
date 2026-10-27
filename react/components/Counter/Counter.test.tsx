import { Counter, useCounter } from "@react/components/Counter/Counter"
import {
    decrementCount,
    incrementCount
} from "@react/components/Counter/Counter.atom"
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

vi.mock(import("@react/components/Counter/Counter.atom"), { spy: true })

const CounterComponent = <Counter />

describe("Counter", () => {
    describe("Rendering", () => {
        beforeAll(() => render(CounterComponent))
        afterAll(() => cleanup())

        test("should render title", async () => {
            const titleEl = await screen.findByTestId("counter__title")
            const titleStr = titleEl.textContent

            expect(titleStr).toBe("Counter")
        })

        test("should render count", async () => {
            const countEl = await screen.findByTestId("counter__count")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(0)
        })

        test("should render increment button", async () => {
            const incBtnElements =
                await screen.findAllByTestId("counter__inc-btn")
            const incBtnEl = incBtnElements[0]

            expect(incBtnEl).toBeInTheDocument()
        })

        test("should render decrement button", async () => {
            const decBtnElements =
                await screen.findAllByTestId("counter__dec-btn")
            const decBtnEl = decBtnElements[0]

            expect(decBtnEl).toBeInTheDocument()
        })

        test("should render disabled decrement button", async () => {
            const decBtnElements =
                await screen.findAllByTestId("counter__dec-btn")
            const decBtnEl = decBtnElements[0]

            expect(decBtnEl).toBeDisabled()
        })

        test("should render attribution", async () => {
            const attributionEl = await screen.findByTestId(
                "counter__attribution"
            )
            const attributionStr = attributionEl.textContent

            expect(attributionStr).toBe("by @madliani")
        })
    })

    describe("Increment", { concurrent: false }, () => {
        beforeAll(() => render(CounterComponent))
        afterAll(() => cleanup())

        test("should trigger increment button", async () => {
            const user = userEvent.setup()
            const incBtnElements =
                await screen.findAllByTestId("counter__inc-btn")
            const incBtnEl = incBtnElements[0]

            if (incBtnEl) {
                await user.click(incBtnEl)
            }

            expect(incrementCount).toHaveBeenCalledOnce()
        })

        test("should increment count", async () => {
            const countEl = await screen.findByTestId("counter__count")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(1)
        })
    })

    describe("Decrement", { concurrent: false }, () => {
        beforeAll(() => render(CounterComponent))
        afterAll(() => cleanup())

        test("should trigger decrement button", async () => {
            const user = userEvent.setup()
            const decBtnElements =
                await screen.findAllByTestId("counter__dec-btn")
            const decBtnEl = decBtnElements[0]

            if (decBtnEl) {
                await user.click(decBtnEl)
            }

            expect(decrementCount).toHaveBeenCalledOnce()
        })

        test("shouldn't decrement count", async () => {
            const countEl = await screen.findByTestId("counter__count")
            const countStr = countEl.textContent
            const count = parseInt(countStr)

            expect(count).toBe(0)
        })
    })
})

describe("Counter hooks", () => {
    afterEach(() => cleanup())

    test("should trigger hook with increment", async () => {
        const { result } = renderHook(() => useCounter())

        act(() => result.current.increment())

        expect(result.current.count).toBe(1)
    })

    test("shouldn't trigger hook with decrement", async () => {
        const { result } = renderHook(() => useCounter())

        act(() => result.current.decrement())

        expect(result.current.count).toBe(0)
    })
})
