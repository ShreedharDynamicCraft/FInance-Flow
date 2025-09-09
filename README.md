# FinanceFlow

FinanceFlow is a modern, AI-powered finance management platform designed to help individuals and businesses optimize their financial health. Built with Next.js, Prisma, Clerk, and Tailwind CSS, it offers a beautiful, interactive dashboard, smart analytics, and seamless account management.

## Features

- **AI-Powered Insights:** Get actionable recommendations to optimize your spending and savings.
- **Multi-Account Support:** Manage multiple bank accounts, credit cards, and investment accounts in one place.
- **Budget Planning:** Set budgets, track expenses, and receive alerts when you approach your limits.
- **Smart Receipt Scanner:** Upload receipts and let AI extract and categorize expenses automatically.
- **Interactive Charts & Analytics:** Visualize your income, expenses, and trends with beautiful, responsive charts.
- **Multi-Currency Support:** Track finances in different currencies with real-time conversion.
- **Secure Authentication:** User authentication and management powered by Clerk.
- **Email Notifications:** Get important alerts and monthly reports via email (powered by Resend).
- **Responsive UI:** Built with Tailwind CSS and shadcn/ui for a premium, mobile-friendly experience.

## Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Prisma ORM, PostgreSQL
- **Authentication:** Clerk
- **AI & Automation:** Google Gemini API, Inngest (event-driven workflows)
- **Email:** Resend

## Folder Structure

```
├── actions/           # Server actions for accounts, transactions, dashboard, etc.
├── app/               # Next.js app directory (routes, pages, layouts)
│   ├── (main)/        # Main dashboard, account, transaction pages
│   ├── (auth)/        # Authentication pages (sign-in, sign-up)
│   ├── api/           # API routes (inngest, seed)
│   ├── lib/           # Shared libraries (schema, utils, prisma, inngest)
├── components/        # Reusable UI components (cards, buttons, forms, etc.)
├── data/              # Static data (categories, landing page)
├── emails/            # Email templates
├── hooks/             # Custom React hooks
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets (images, logos)
├── README.md          # Project documentation
├── .env               # Environment variables
```

## How It Works

1. **Sign Up & Connect Accounts:** Securely sign up and link your financial accounts.
2. **AI Analysis:** The platform analyzes your transactions and spending patterns.
3. **Dashboard:** View your financial overview, budgets, and recent transactions in a beautiful dashboard.
4. **Insights & Alerts:** Receive AI-powered insights, budget alerts, and monthly reports.
5. **Receipt Scanning:** Upload receipts for automatic data extraction and categorization.

## Key Files & Modules

- `app/(main)/dashboard/page.jsx`: Main dashboard UI, personalized greeting, budget, and analytics.
- `app/(main)/account/[id]/page.jsx`: Account details, interactive charts, and transaction table.
- `actions/dashboard.js`: Server actions for fetching user accounts and dashboard data.
- `actions/account.js`: Server actions for account management and transactions.
- `lib/prisma.js`: Prisma client setup for database access.
- `lib/checkUser.js`: Ensures user exists in the database after authentication.
- `prisma/schema.prisma`: Database schema for users, accounts, transactions, budgets.
- `components/ui/`: Reusable UI components (cards, buttons, tables, etc.).

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `DIRECT_URL`: Direct database connection for Prisma
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key
- `CLERK_SECRET_KEY`: Clerk secret key
- `GEMINI_API_KEY`: Google Gemini AI key
- `RESEND_API_KEY`: Resend email API key
- `ARCJET_KEY`: Arcjet API key

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Set up environment variables:**
   Copy `.env.example` to `.env` and fill in your credentials.
3. **Run database migrations:**
   ```sh
   npx prisma migrate dev
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization & Extensibility

- Add new account types, transaction categories, or analytics modules in the schema and UI.
- Integrate additional AI models or financial APIs for deeper insights.
- Customize UI components using Tailwind CSS and shadcn/ui.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Make your changes and commit (`git commit -am 'Add new feature'`)
4. Push to your branch (`git push origin feature-xyz`)
5. Open a pull request

## License

MIT

---

Made with 💗 by Shreedhar Anand.
# FInance-Flow
