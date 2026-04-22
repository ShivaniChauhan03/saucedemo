SauceDemo Playwright Automation 

## Tech Stack 
- Playwright 
- TypeScript 
- Chrome Browser 

## Scenarios Covered 
1. Valid login with standard_user 
2. Invalid login with wrong password 
3. Login with locked_out_user 
4. Add product to cart 
5. Complete checkout successfully 

## Project Setup
1. Download the project
2. Open terminal in project folder
3. Install dependencies
   - npm install
   # Run all test cases:
   - npx playwright test
   # Run tests in headed mode
   - npx playwright test --headed
   # To view the Playwright execution report
   - npx playwright show-report

## Project Structure
pages/
 |-─ LoginPage.ts
 ├── InventoryPage.ts
 └── CheckoutPage.ts
tests/
 ├── login.spec.ts
 ├── cart.spec.ts
 └── checkout.spec.ts
playwright.config.ts
package.json
README.md 

## Browser
The test cases were executed and verified on Chromium/Chrome.

## Notes
- Project is git initialized
- node_modules is excluded from the submission
- Tests were executed successfully on Chrome
- All 5 scenarios are passing
