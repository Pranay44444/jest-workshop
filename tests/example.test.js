const { calculateFinalAmount } = require("../src/pricing")

test("no coupon",()=>{
  expect(calculateFinalAmount(100)).toBe(100)
})

test("SAVE10 coupon",()=>{
  expect(calculateFinalAmount(500,"SAVE10")).toBe(450)
})

test("FLAT50 boundary",()=>{
  expect(calculateFinalAmount(30,"FLAT50")).toBe(0)
})

test("invalid subtotal",()=>{
  expect(() => calculateFinalAmount(-100,"SAVE10")).toThrow("Invalid subtotal")
})

test("case-insensitive coupon",()=>{
  expect(calculateFinalAmount(500,"save10")).toBe(450)
})

test("invalid coupon",()=>{
  expect(() => calculateFinalAmount(100,"INVALID")).toThrow("Invalid Coupon")
})


