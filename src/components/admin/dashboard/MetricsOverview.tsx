import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Car,
  DollarSign,
  Users,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: {
    value: number;
    isPositive: boolean;
  };
  trendLabel: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  icon = <DollarSign className="h-5 w-5" />,
  trend = { value: 0, isPositive: true },
  trendLabel = "vs last period",
}: MetricCardProps) => {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="rounded-full bg-muted p-2">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          <span
            className={`flex items-center text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}
          >
            {trend.isPositive ? (
              <ArrowUp className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDown className="h-3 w-3 mr-1" />
            )}
            {trend.value}%
          </span>
          <span className="text-xs text-muted-foreground ml-1">
            {trendLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricsOverviewProps {
  metrics?: {
    totalBookings: {
      value: string;
      trend: { value: number; isPositive: boolean };
    };
    activeDrivers: {
      value: string;
      trend: { value: number; isPositive: boolean };
    };
    revenue: {
      value: string;
      trend: { value: number; isPositive: boolean };
    };
    pendingTasks: {
      value: string;
      trend: { value: number; isPositive: boolean };
    };
  };
}

const MetricsOverview = ({
  metrics = {
    totalBookings: { value: "1,248", trend: { value: 12, isPositive: true } },
    activeDrivers: { value: "36", trend: { value: 8, isPositive: true } },
    revenue: { value: "$24,780", trend: { value: 18, isPositive: true } },
    pendingTasks: { value: "12", trend: { value: 5, isPositive: false } },
  },
}: MetricsOverviewProps) => {
  return (
    <div className="w-full bg-slate-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Metrics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Bookings"
          value={metrics.totalBookings.value}
          icon={<Calendar className="h-5 w-5" />}
          trend={metrics.totalBookings.trend}
          trendLabel="vs last month"
        />
        <MetricCard
          title="Active Drivers"
          value={metrics.activeDrivers.value}
          icon={<Users className="h-5 w-5" />}
          trend={metrics.activeDrivers.trend}
          trendLabel="vs last week"
        />
        <MetricCard
          title="Revenue"
          value={metrics.revenue.value}
          icon={<DollarSign className="h-5 w-5" />}
          trend={metrics.revenue.trend}
          trendLabel="vs last month"
        />
        <MetricCard
          title="Pending Tasks"
          value={metrics.pendingTasks.value}
          icon={<Car className="h-5 w-5" />}
          trend={metrics.pendingTasks.trend}
          trendLabel="vs yesterday"
        />
      </div>
    </div>
  );
};

export default MetricsOverview;
