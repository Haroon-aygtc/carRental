import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import MetricsOverview from "@/components/admin/dashboard/MetricsOverview";
import RecentBookings from "@/components/admin/dashboard/RecentBookings";
import ActiveDrivers from "@/components/admin/dashboard/ActiveDrivers";
import SystemNotifications from "@/components/admin/dashboard/SystemNotifications";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, BarChart3, ArrowRight } from "lucide-react";

const Dashboard = () => {
  // Mock data for quick stats
  const quickStats = [
    {
      title: "Today's Bookings",
      value: "24",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      change: "+8% from yesterday",
    },
    {
      title: "Active Trips",
      value: "7",
      icon: <Clock className="h-5 w-5 text-green-500" />,
      change: "2 completing soon",
    },
    {
      title: "Weekly Revenue",
      value: "$12,543",
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
      change: "+12% from last week",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 space-y-6 p-6 md:p-8 bg-slate-50 overflow-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Tabs defaultValue="day" className="w-[300px]">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-3">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="rounded-full bg-muted p-2">{stat.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Metrics Overview */}
          <MetricsOverview />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Bookings - Takes up 2/3 of the width on medium screens and up */}
            <div className="md:col-span-2">
              <RecentBookings />
            </div>

            {/* Active Drivers - Takes up 1/3 of the width on medium screens and up */}
            <div>
              <ActiveDrivers />
            </div>
          </div>

          {/* System Notifications */}
          <SystemNotifications />

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">User Management</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage system users and roles
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/admin/user-management">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Driver Management</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage drivers and assignments
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/admin/driver-management">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Fleet Management</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage vehicles and maintenance
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/admin/fleet-management">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Reports</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      View and export system reports
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/admin/reports">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
