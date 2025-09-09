import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, TrendingUp, Wallet, PiggyBank, CreditCard } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

// Loading skeleton components
const BudgetSkeleton = () => (
  <Card className="w-full">
    <CardContent className="pt-6">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded animate-pulse w-full"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </div>
    </CardContent>
  </Card>
);

const OverviewSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {Array(4).fill(0).map((_, i) => (
      <Card key={i}>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const AccountsSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {Array(3).fill(0).map((_, i) => (
      <Card key={i}>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get user name from first account (assuming all accounts belong to same user)
  const userName = accounts?.[0]?.user?.name || "User";

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight drop-shadow-lg animate-slide-in">
                👋 Welcome back, {userName}!
              </h1>
              <p className="text-indigo-700 mt-2 text-lg animate-fade-in">
                Here’s your personalized financial dashboard
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-base font-semibold shadow animate-bounce">
                <TrendingUp className="inline h-5 w-5 mr-2" />
                All systems good
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Budget Progress Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 mr-4 shadow-lg animate-pop-in">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-900">Budget Overview</h2>
                <p className="text-base text-indigo-700">Track your monthly spending and stay on top of your goals</p>
              </div>
            </div>
            <Suspense fallback={<BudgetSkeleton />}>
              <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden animate-fade-in">
                <BudgetProgress
                  initialBudget={budgetData?.budget}
                  currentExpenses={budgetData?.currentExpenses || 0}
                />
              </div>
            </Suspense>
          </section>

          <div className="border-t border-indigo-200 my-8" />

          {/* Dashboard Overview Section */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg p-3 mr-4 shadow-lg animate-pop-in">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">Financial Overview</h2>
                <p className="text-base text-emerald-700">Your key metrics at a glance, powered by AI</p>
              </div>
            </div>
            <Suspense fallback={<OverviewSkeleton />}>
              <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden p-8 animate-fade-in">
                <DashboardOverview
                  accounts={accounts}
                  transactions={transactions || []}
                />
              </div>
            </Suspense>
          </section>

          <div className="border-t border-indigo-200 my-8" />

          {/* Accounts Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg p-3 mr-4 shadow-lg animate-pop-in">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-900">Your Accounts</h2>
                  <p className="text-base text-purple-700">
                    Manage your {accounts?.length || 0} account{accounts?.length !== 1 ? 's' : ''} with ease
                  </p>
                </div>
              </div>
              {accounts?.length > 0 && (
                <div className="text-base text-gray-500 font-medium">
                  {accounts.length} account{accounts.length !== 1 ? 's' : ''} total
                </div>
              )}
            </div>
            <Suspense fallback={<AccountsSkeleton />}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Add New Account Card */}
                <CreateAccountDrawer>
                  <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-dashed border-indigo-300 hover:border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 animate-pop-in">
                    <CardContent className="flex flex-col items-center justify-center text-center h-52 pt-8">
                      <div className="bg-indigo-100 group-hover:bg-indigo-200 rounded-full p-5 mb-4 transition-colors">
                        <Plus className="h-10 w-10 text-indigo-600" />
                      </div>
                      <h3 className="font-semibold text-indigo-900 mb-2">Add New Account</h3>
                      <p className="text-base text-indigo-700">
                        Create a new account to track your finances
                      </p>
                    </CardContent>
                  </Card>
                </CreateAccountDrawer>

                {/* Existing Accounts */}
                {accounts?.length > 0 ? (
                  accounts.map((account) => (
                    <div 
                      key={account.id} 
                      className="transform hover:scale-105 transition-all duration-300 animate-pop-in"
                    >
                      <AccountCard account={account} />
                    </div>
                  ))
                ) : (
                  <div className="md:col-span-2 lg:col-span-2">
                    <Card className="border-indigo-200 animate-pop-in">
                      <CardContent className="flex flex-col items-center justify-center text-center py-16">
                        <div className="bg-indigo-100 rounded-full p-8 mb-6">
                          <CreditCard className="h-14 w-14 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-900 mb-3">
                          No accounts yet
                        </h3>
                        <p className="text-indigo-700 mb-8 max-w-md text-lg">
                          Get started by creating your first account to begin tracking your finances
                        </p>
                        <CreateAccountDrawer>
                          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-lg font-semibold">
                            <Plus className="h-5 w-5 mr-3" />
                            Create Account
                          </button>
                        </CreateAccountDrawer>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  );
}