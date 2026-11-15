import Counter from "@react/blocks/Counter/Counter"
import CounterAtom from "@react/blocks/Counter/Counter.atom"
import CounterHook from "@react/blocks/Counter/Counter.hook"
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

vi.mock(import("@react/blocks/Counter/Counter.atom"), { spy: true })

describe("Counter: Rendering", () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should render title", async () => {
        const titleElement = await screen.findByTestId("counter__title")

        expect(titleElement.textContent).toBe("Counter")
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
        const incrementButtonElement = incrementButtonElements[0]

        expect(incrementButtonElement).toBeInTheDocument()
    })

    test("should render disabled decrement button", async () => {
        const decrementButtonElements =
            await screen.findAllByTestId("counter__dec-btn")
        const decrementButtonElement = decrementButtonElements[0]

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

        expect(attributionElement.textContent).toBe("by @madliani")
    })
})

describe("Counter: Increment button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger increment", async () => {
        const user = userEvent.setup()
        const incrementButtonElements =
            await screen.findAllByTestId("counter__inc-btn")
        const incrementButtonElement = incrementButtonElements[0]

        if (incrementButtonElement) {
            await user.click(incrementButtonElement)
        }

        expect(CounterAtom.increment).toHaveBeenCalledOnce()
    })

    test("should increment count", async () => {
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(1)
    })
})

describe("Counter: Decrement button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger decrement", async () => {
        const user = userEvent.setup()
        const decrementButtonElements =
            await screen.findAllByTestId("counter__dec-btn")
        const decrementButtonElement = decrementButtonElements[0]

        if (decrementButtonElement) {
            await user.click(decrementButtonElement)
        }

        expect(CounterAtom.decrement).toHaveBeenCalledOnce()
    })

    test("shouldn't decrement count", async () => {
        const INITIAL_COUNT = 0
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INITIAL_COUNT)
    })
})

describe("Counter: Resetting button", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger reset", async () => {
        const user = userEvent.setup()
        const resetButtonElements =
            await screen.findAllByTestId("counter__reset-btn")
        const resetButtonEl = resetButtonElements[0]

        if (resetButtonEl) {
            await user.click(resetButtonEl)
        }

        expect(CounterAtom.reset).toHaveBeenCalledOnce()
    })

    test("shouldn't reset count", async () => {
        const INITIAL_COUNT = 0
        const countElement = await screen.findByTestId("counter__count")
        const count = parseInt(countElement.textContent)

        expect(count).toBe(INITIAL_COUNT)
    })
})

describe("Counter: Increment hook", () => {
    afterEach(() => cleanup())

    test("should increment count", async () => {
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.incrementCount())

        expect(result.current.count).toBe(1)
    })
})

describe("Counter: Decrement hook", () => {
    afterEach(() => cleanup())

    test("shouldn't decrement count", async () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.decrementCount())

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

describe("Counter: Resetting hooks", () => {
    afterEach(() => cleanup())

    test("shouldn't reset count", async () => {
        const INITIAL_COUNT = 0
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.resetCount())

        expect(result.current.count).toBe(INITIAL_COUNT)
    })
})

describe(
    "Counter: Hook for saving to localStorage",
    { concurrent: false },
    () => {
        afterEach(() => cleanup())

        test("should store to localStorage", async () => {
            const INCREMENTED_COUNT = 1
            const { result } = renderHook(() => CounterHook.use())

            act(() => result.current.incrementCount())

            expect(result.current.count).toBe(INCREMENTED_COUNT)
        })

        test("should restore from localStorage", async () => {
            renderHook(() => CounterHook.use())

            const countFromLS = localStorage.getItem("count")

            expect(countFromLS).toBe("1")
        })
    }
)
