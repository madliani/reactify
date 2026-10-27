import { Main } from "@react/components/Main/Main"
import { cleanup, render, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, test } from "vitest"

describe("Main rendering", () => {
    beforeAll(() => render(<Main />))
    afterAll(() => cleanup())

    test("should render main", async () => {
        const mainEl = await screen.findByTestId("main")

        expect(mainEl).toBeVisible()
    })
})
