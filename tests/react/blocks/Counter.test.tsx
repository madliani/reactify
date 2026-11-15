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
        const titleString = titleElement.textContent

        expect(titleString).toBe("Counter")
    })

    test("should render count", async () => {
        const countElement = await screen.findByTestId("counter__count")
        const countString = countElement.textContent
        const count = parseInt(countString)

        expect(count).toBe(0)
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
        const attributionString = attributionElement.textContent

        expect(attributionString).toBe("by @madliani")
    })
})

describe("Counter: Increment", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger increment button", async () => {
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
        const countString = countElement.textContent
        const count = parseInt(countString)

        expect(count).toBe(1)
    })
})

describe("Counter: Decrement", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger decrement button", async () => {
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
        const countElement = await screen.findByTestId("counter__count")
        const countString = countElement.textContent
        const count = parseInt(countString)

        expect(count).toBe(0)
    })
})

describe("Counter: Resetting", { concurrent: false }, () => {
    beforeAll(() => render(<Counter />))
    afterAll(() => cleanup())

    test("should trigger reset button", async () => {
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
        const countElement = await screen.findByTestId("counter__count")
        const countString = countElement.textContent
        const count = parseInt(countString)

        expect(count).toBe(0)
    })
})

describe("Counter: Increment hook", () => {
    afterEach(() => cleanup())

    test("should trigger increment hook", async () => {
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.incrementCount())

        expect(result.current.count).toBe(1)
    })
})

describe("Counter: Decrement hook", () => {
    afterEach(() => cleanup())

    test("shouldn't trigger decrement hook", async () => {
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.decrementCount())

        expect(result.current.count).toBe(0)
    })
})

describe("Counter: Resetting hooks", () => {
    afterEach(() => cleanup())

    test("shouldn't trigger resetting hook", async () => {
        const { result } = renderHook(() => CounterHook.use())

        act(() => result.current.resetCount())

        expect(result.current.count).toBe(0)
    })
})

describe(
    "Counter: Hook for saving to localStorage",
    { concurrent: false },
    () => {
        afterEach(() => cleanup())

        test("should trigger hook for storing to localStorage", async () => {
            const { result } = renderHook(() => CounterHook.use())

            act(() => result.current.incrementCount())

            expect(result.current.count).toBe(1)
        })

        test("should trigger hook for restoring from localStorage", async () => {
            renderHook(() => CounterHook.use())

            const countFromLS = localStorage.getItem("count")

            expect(countFromLS).toBe("1")
        })
    }
)
