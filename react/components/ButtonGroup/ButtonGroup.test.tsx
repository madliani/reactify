import ButtonGroup from "@react/components/ButtonGroup/ButtonGroup"
import { cleanup, render, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, test } from "vitest"

describe("ButtonGroup rendering", () => {
    beforeAll(() => render(<ButtonGroup />))
    afterAll(() => cleanup())

    test("should render mobile button group", async () => {
        const mobileBtnEl = await screen.findByTestId("btn-group")

        expect(mobileBtnEl).toBeInTheDocument()
    })
})
