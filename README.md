# Set Up Instructions

## Prerequisites📋
- Node.js
- Git

## Quick Start 🚀

### 1. Clone the Repository
```
git clone https://github.com/Rewaren/pw-lesson-16.git
```

### 2. Install Dependencies
2.1 Install the latest version of Playwright.
```
npm init playwright@latest
```
2.2 Install the library Faker.js
```
npm install @faker-js/faker
```
2.3 Install Playwright Browsers
```
npx playwright install
```

### 3. Environment Configuration⚙️
The project uses an environment variable `APP_URL` to define the target application URL.
In WebStorm Run Configuration:
1. Go to **Run** → **Edit Configurations**
2. Create or edit your Playwright test configuration
3. In Environment variables, add: `APP_URL=https://fe-deivery.tallinn-learning.ee/signin`

### 4. GitHub Actions CI/CD Setup
**1. Configure GitHub Secrets**
1.1 Navigate to your GitHub repository
1.2 Go to **Settings** → **Secrets and Variables** → **Actions**
1.3 Click **New Repository Secret**
1.4 Add:
- Name: `APP_URL`
- Value: `https://fe-delivery.tallinn-learning.ee/signin`

**2. GitHub Actions Workflow**
The project includes `.github/workflows/playwright.yml` which automatically uses the secret:
```
env:
  APP_URL: ${{ secrets.APP_URL }}
```
