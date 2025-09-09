import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { TransactionTable } from "../_components/transaction-table";
import { notFound } from "next/navigation";
import { AccountChart } from "../_components/account-chart";

export default async function AccountPage({ params }) {
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-12 px-5">
      <div className="flex flex-col md:flex-row gap-8 items-end justify-between animate-fade-in">
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text capitalize drop-shadow-lg animate-slide-in">
            {account.name}
          </h1>
          <p className="text-lg text-indigo-700 mt-2 font-medium animate-fade-in">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
          </p>
        </div>

        <div className="flex flex-col items-end pb-2">
          <div className="text-3xl font-bold text-emerald-600 animate-pop-in">
            ${parseFloat(account.balance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-base text-gray-500 font-medium animate-fade-in">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 p-8 animate-fade-in">
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
          <AccountChart transactions={transactions} />
        </Suspense>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 p-8 animate-fade-in">
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
          <TransactionTable transactions={transactions} />
        </Suspense>
      </div>
    </div>
  );
}
