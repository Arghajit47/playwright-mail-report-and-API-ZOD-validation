

---

# Playwright Mail Report and API-ZOD Validation

This project integrates two key functionalities:
1. **Automated Email Report with Playwright**: 
   - Generates detailed test reports from Playwright test runs and sends them via email. It includes zipping of the test report folder and an email notification system using **Nodemailer**.
   
2. **API Schema Validation using Zod**: 
   - Implements schema validation for API responses using **Zod**. Ensures that API responses adhere to the expected data structure during testing.

### Features:
- **Automated Playwright Testing**: Runs automated tests with Playwright and sends the results via email after completion.
- **Schema Validation**: Uses Zod for runtime validation of API response schemas, ensuring data integrity.
- **Email Notifications**: Sends zipped reports of test results to specified recipients with detailed statistics.
  
### Usage:
- Clone the repository.
- Configure email settings in the `sendReport.js` file.
- Define your Playwright tests and API validation logic.
- Run the tests with `npm run test`.

This setup is perfect for automating tests and receiving immediate feedback on test results, along with robust API validation.