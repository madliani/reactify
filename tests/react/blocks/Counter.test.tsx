import Counter from "@react/blocks/Counter/Counter"
import counterAtom from "@react/blocks/Counter/Counter.atom"
import CounterHooks from "@react/blocks/Counter/Counter.hooks"
import {
    act,
    cleanup,
    render,
    renderHook,
    screen
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { head as first } from "es-toolkit"
import { afterAll, afterEach, beforeAll, expect, it, suite, vi } from "vitest"

vi.mock(import("@react/blocks/Counter/Counter.atom"), { spy: true })

suite("Counter: Rendering", () => {
    beforeAll(() => render(<Counter />))

    afterAll(() => {
        cleanup()
    })

    it("should render title", { timeout: 500 }, async () => {
        const titleElement = await screen.findByTestId("counter__title")

        expect(titleElement.textContent).toBe("Reactify")
    })

    it("should render count", { timeout: 500 }, async () => {
        const INITIAL_COUNT = 0
        const RADIX = 10
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent, RADIX)

        expect(count).toBe(INITIAL_COUNT)
    })

    it("should render increment button", { timeout: 500 }, async () => {
        const incrementButtonElements =
            await screen.findAllByTestId("counter__inc-btn")
        const incrementButtonElement = first(incrementButtonElements)

        expect(incrementButtonElement).toBeInTheDocument()
    })

    it(
        "should render disabled decrement button",
        { timeout: 500 },
        async () => {
            const decrementButtonElements =
                await screen.findAllByTestId("counter__dec-btn")
            const decrementButtonElement = first(decrementButtonElements)

            expect(decrementButtonElement).toBeDisabled()
        }
    )

    it("should render reset button", { timeout: 500 }, async () => {
        const resetButtonElement =
            await screen.findByTestId("counter__reset-btn")

        expect(resetButtonElement).toBeInTheDocument()
    })

    it("should render attribution", { timeout: 500 }, async () => {
        const attributionElement = await screen.findByTestId(
            "counter__attribution"
        )

        expect(attributionElement.textContent).toBe("@madliani")
    })
})

suite("counter: Increment button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))

    afterAll(() => {
        cleanup()
    })

    it("should trigger increment", { timeout: 500 }, async () => {
        const user = userEvent.setup()
        const incrementButtonElements =
            await screen.findAllByTestId("counter__inc-btn")
        const incrementButtonElement = first(incrementButtonElements)

        if (incrementButtonElement) {
            await user.click(incrementButtonElement)
        }

        expect(counterAtom.increment).toHaveBeenCalledTimes(1)
    })

    it("should increment count", { timeout: 500 }, async () => {
        const INCREMENTED_COUNT = 1
        const RADIX = 10
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent, RADIX)

        expect(count).toBe(INCREMENTED_COUNT)
    })
})

suite("counter: Decrement button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))

    afterAll(() => {
        cleanup()
    })

    it("should trigger decrement", { timeout: 500 }, async () => {
        const user = userEvent.setup()
        const decrementButtonElements =
            await screen.findAllByTestId("counter__dec-btn")
        const decrementButtonElement = first(decrementButtonElements)

        if (decrementButtonElement) {
            await user.click(decrementButtonElement)
        }

        expect(counterAtom.decrement).toHaveBeenCalledTimes(1)
    })

    it("shouldn't decrement count", { timeout: 500 }, async () => {
        const INITIAL_COUNT = 0
        const RADIX = 10
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent, RADIX)

        expect(count).toBe(INITIAL_COUNT)
    })
})

suite("counter: Resetting button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))

    afterAll(() => {
        cleanup()
    })

    it("should trigger reset", { timeout: 500 }, async () => {
        const user = userEvent.setup()
        const resetButtonElements =
            await screen.findAllByTestId("counter__reset-btn")
        const resetButtonEl = first(resetButtonElements)

        if (resetButtonEl) {
            await user.click(resetButtonEl)
        }

        expect(counterAtom.reset).toHaveBeenCalledTimes(1)
    })

    it("shouldn't reset count", { timeout: 500 }, async () => {
        const INITIAL_COUNT = 0
        const RADIX = 10
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent, RADIX)

        expect(count).toBe(INITIAL_COUNT)
    })
})

suite("counter: Increment hook", () => {
    afterEach(() => {
        cleanup()
    })

    it("should increment count", { timeout: 500 }, () => {
        const INCREMENTED_COUNT = 1
        const { result } = renderHook(() => CounterHooks.use())

        act(() => {
            result.current.incrementCount()
        })

        expect(result.current.count).toBe(INCREMENTED_COUNT)
    })
})

suite("counter: Decrement hook", () => {
    afterEach(() => {
        cleanup()
    })

    it("shouldn't decrement count", { timeout: 500 }, () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHooks.use())

        act(() => {
            result.current.decrementCount()
        })

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

suite("counter: Resetting hooks", () => {
    afterEach(() => {
        cleanup()
    })

    it("shouldn't reset count", { timeout: 500 }, () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHooks.use())

        act(() => {
            result.current.resetCount()
        })

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

suite("counter: Hook for saving to localStorage", { concurrent: false }, () => {
    afterEach(() => {
        cleanup()
    })

    it("should store to localStorage", { timeout: 500 }, () => {
        const INCREMENTED_COUNT = 1
        const { result } = renderHook(() => CounterHooks.use())

        act(() => {
            result.current.incrementCount()
        })

        expect(result.current.count).toBe(INCREMENTED_COUNT)
    })

    it("should restore from localStorage", { timeout: 500 }, () => {
        const COUNT_FALLBACK = "0"
        const INCREMENTED_COUNT = 1
        const RADIX = 10
        renderHook(() => CounterHooks.use())

        const countItem = localStorage.getItem("count")
        const countFromLS = parseInt(countItem ?? COUNT_FALLBACK, RADIX)

        expect(countFromLS).toBe(INCREMENTED_COUNT)
    })
})
