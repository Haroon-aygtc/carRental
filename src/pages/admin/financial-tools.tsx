import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const FinancialTools = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    switch (value) {
      case "payroll":
        navigate("/admin/financial-tools/payroll");
        break;
      case "expenses":
        navigate("/admin/financial-tools/expenses");
        break;
      case "revenue":
        navigate("/admin/financial-tools/revenue");
        break;
      default:
        navigate("/admin/financial-tools/payroll");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <div className="rounded-full bg-green-100 p-2">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$16,012.50</div>
              <div className="flex items-center mt-1">
                <span className="flex items-center text-xs text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  12%
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Expenses
              </CardTitle>
              <div className="rounded-full bg-red-100 p-2">
                <DollarSign className="h-5 w-5 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$6,300.75</div>
              <div className="flex items-center mt-1">
                <span className="flex items-center text-xs text-red-500">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  5%
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Net Profit
              </CardTitle>
              <div className="rounded-full bg-blue-100 p-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$9,711.75</div>
              <div className="flex items-center mt-1">
                <span className="flex items-center text-xs text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  18%
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs
          defaultValue="payroll"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="payroll">Payroll</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
        </Tabs>

        <Outlet />
      </div>
    </div>
  );
};

export default FinancialTools;
