import { Main } from "@react/components/Main/Main"
import { cleanup, render, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, test } from "vitest"

const MainComponent = <Main />

describe("Main", () => {
    describe("Main rendering", () => {
        beforeAll(() => render(MainComponent))
        afterAll(() => cleanup())

        test("should render main", async () => {
            const mainEl = await screen.findByTestId("main")

            expect(mainEl).toBeVisible()
        })
    })
})
