# Jest + CI Workshop (Graded)

## Rules
- Do NOT modify files inside `src/`
- Write your tests inside `tests/`
- CI must be green for evaluation

## Task
- Write Jest tests for:
`calculateFinalAmount(subtotal, coupon)`
- no coupon case
- SAVE10 coupon
- FLAT50 boundary case
- invalid subtotal throws error
- case-insensitive coupon
- invalid coupon
- Add GitHub Actions CI to run `npm test` on push and PR

## Run locally
npm install
npm test
