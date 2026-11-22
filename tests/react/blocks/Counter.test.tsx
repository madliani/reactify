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
import { afterAll, afterEach, beforeAll, expect, suite, test, vi } from "vitest"

vi.mock(import("@react/blocks/Counter/Counter.atom"), { spy: true })

suite("Counter: Rendering", () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should render title", async () => {
        const titleElement = await screen.findByTestId("counter__title")

        expect(titleElement.textContent).toBe("Reactify")
    })

    test("should render count", async () => {
        const INITIAL_COUNT = 0
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INITIAL_COUNT)
    })

    test("should render increment button", async () => {
        const incrementButtonElements =
            await screen.findAllByTestId("counter__inc-btn")
        const incrementButtonElement = first(incrementButtonElements)

        expect(incrementButtonElement).toBeInTheDocument()
    })

    test("should render disabled decrement button", async () => {
        const decrementButtonElements =
            await screen.findAllByTestId("counter__dec-btn")
        const decrementButtonElement = first(decrementButtonElements)

        expect(decrementButtonElement).toBeDisabled()
    })

    test("should render reset button", async () => {
        const resetButtonElement =
            await screen.findByTestId("counter__reset-btn")

        expect(resetButtonElement).toBeInTheDocument()
    })

    test("should render attribution", async () => {
        const attributionElement = await screen.findByTestId(
            "counter__attribution"
        )

        expect(attributionElement.textContent).toBe("@madliani")
    })
})

suite("Counter: Increment button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger increment", async () => {
        const user = userEvent.setup()
        const incrementButtonElements =
            await screen.findAllByTestId("counter__inc-btn")
        const incrementButtonElement = first(incrementButtonElements)

        if (incrementButtonElement) {
            await user.click(incrementButtonElement)
        }

        expect(counterAtom.increment).toHaveBeenCalledOnce()
    })

    test("should increment count", async () => {
        const INCREMENTED_COUNT = 1
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INCREMENTED_COUNT)
    })
})

suite("Counter: Decrement button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger decrement", async () => {
        const user = userEvent.setup()
        const decrementButtonElements =
            await screen.findAllByTestId("counter__dec-btn")
        const decrementButtonElement = first(decrementButtonElements)

        if (decrementButtonElement) {
            await user.click(decrementButtonElement)
        }

        expect(counterAtom.decrement).toHaveBeenCalledOnce()
    })

    test("shouldn't decrement count", async () => {
        const INITIAL_COUNT = 0
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INITIAL_COUNT)
    })
})

suite("Counter: Resetting button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger reset", async () => {
        const user = userEvent.setup()
        const resetButtonElements =
            await screen.findAllByTestId("counter__reset-btn")
        const resetButtonEl = first(resetButtonElements)

        if (resetButtonEl) {
            await user.click(resetButtonEl)
        }

        expect(counterAtom.reset).toHaveBeenCalledOnce()
    })

    test("shouldn't reset count", async () => {
        const INITIAL_COUNT = 0
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INITIAL_COUNT)
    })
})

suite("Counter: Increment hook", () => {
    afterEach(() => cleanup())

    test("should increment count", async () => {
        const INCREMENTED_COUNT = 1
        const { result } = renderHook(() => CounterHooks.use())

        act(() => result.current.incrementCount())

        expect(result.current.count).toBe(INCREMENTED_COUNT)
    })
})

suite("Counter: Decrement hook", () => {
    afterEach(() => cleanup())

    test("shouldn't decrement count", async () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHooks.use())

        act(() => result.current.decrementCount())

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

suite("Counter: Resetting hooks", () => {
    afterEach(() => cleanup())

    test("shouldn't reset count", async () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHooks.use())

        act(() => result.current.resetCount())

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

suite("Counter: Hook for saving to localStorage", { concurrent: false }, () => {
    afterEach(() => cleanup())

    test("should store to localStorage", async () => {
        const INCREMENTED_COUNT = 1
        const { result } = renderHook(() => CounterHooks.use())

        act(() => result.current.incrementCount())

        expect(result.current.count).toBe(INCREMENTED_COUNT)
    })

    test("should restore from localStorage", async () => {
        const COUNT_FALLBACK = "0"
        const INCREMENTED_COUNT = 1
        renderHook(() => CounterHooks.use())

        const countItem = localStorage.getItem("count")
        const countFromLS = parseInt(countItem ?? COUNT_FALLBACK)

        expect(countFromLS).toBe(INCREMENTED_COUNT)
    })
})
