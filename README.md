# About the project
This repo is my solution to the [TechGuilds React Coding Challange](https://github.com/TechGuilds/React-coding-challange).

# Project outline:
The application is going to be developed and deployed in incremental steps that will mimic the challenge's goals in extent:

1. First, a **MVP** version of the app will be released. No changes in the way the images are fetched.
2. Create a dedicated SQL database to hold the images.
3. Add a microservice that extracts the data from the SQL database.

# Technologies:
The following is not a conclusive and/or exhaustive list of the tools and programming languages that will be used to implement the final solution, and its only intent is to serve as a development guide:

- [NextJS](https://nextjs.org/).
- Typescript.
- [Jest](https://jestjs.io/) for Unit and Snapshot testing.
- MySQL or SQLite, for the dedicated database.
- [Go](https://go.dev) to handle the database microservice.
- [GitHub Actions](https://github.com/features/actions) to build a CI/CD pipeline that handles testing and deploying the app.
- If needed, [Docker](https://www.docker.com/).

# Git Strategy:
1. All features will be developed in its own branch. Unit tests will be run on code commit within each feature's branch.
2. If all Unit Tests are passed for a given feature branch, the GitHub action will generate a PR to the main branch.
3. On code commit to the main branch (app built), Integration Tests should be run to test the database. On success, an End-to-End test should be performed. At this moment, Cypress does not support the latest version of NextJS, therefore the E2E test is going to be performed via a Python script (most likely leveraging on Selenium).

**Each commit must start** with one of the following keywords:
- **ADD**: on commits that add a new feature (example: ADD: grid layout)
- **EDIT**: on commits that refactor an existing feature. The commit message **must end** with a hyphen and a short explanation of the edited part (example: EDIT: grid layout - column width)
- **FIX**: on commits that fix bugs (example: FIX: search bar - filter method).
- **DEL**: on commits that remove existing features (example: DEL: grid layout).

**Note**: The EDIT and FIX keywords are not interchangeable. EDIT must be used only on commits that do not alter the logic implementation of the feature due better code design and/or UI changes, whereas FIX must be use on commits that changes the implementation due bug fixing.

# Note:
This is a work in progress and the information listed above is subject to change.

Thanks,

Dan Almenar Williams.

