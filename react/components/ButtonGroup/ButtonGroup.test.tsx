import { ButtonGroup } from "@react/components/ButtonGroup/ButtonGroup"
import { cleanup, render, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, test } from "vitest"

describe("Button Group rendering", () => {
    beforeAll(() => render(<ButtonGroup />))
    afterAll(() => cleanup())

    test("should render mobile button group", async () => {
        const mobileBtnEl = await screen.findByTestId("btn-group__mobile-btns")

        expect(mobileBtnEl).toBeInTheDocument()
    })

    test("should render desktop button group", async () => {
        const desktopBtnEl = await screen.findByTestId(
            "btn-group__desktop-btns"
        )

        expect(desktopBtnEl).toBeInTheDocument()
    })
})
