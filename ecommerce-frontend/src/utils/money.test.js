import { it, expect, describe } from "vitest";

import { formatMoney } from "./money";

describe("formatMoney function testing", () => {
    it("format cents to dollar", () => {
        expect(formatMoney(1999)).toBe("$19.99");
    })
    it("displaying two decimals", () => {
        expect(formatMoney(100)).toBe("$1.00");
        expect(formatMoney(1910)).toBe("$19.10");
    })
})