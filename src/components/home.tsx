import React from "react";
import { Link } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Car, Calendar, Users, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transportation Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform for managing transportation services,
            bookings, and fleet operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Admin Portal
            </h2>
            <p className="text-gray-600 mb-8">
              Access the administrative dashboard to manage users, drivers,
              vehicles, bookings, and view comprehensive reports.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    User & Driver Management
                  </h3>
                  <p className="text-gray-600">
                    Manage user accounts and driver profiles with role-based
                    access control.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Fleet Management
                  </h3>
                  <p className="text-gray-600">
                    Track and maintain your vehicle fleet with detailed
                    maintenance records.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Booking Management
                  </h3>
                  <p className="text-gray-600">
                    View and manage all bookings with real-time status updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Financial Tools</h3>
                  <p className="text-gray-600">
                    Track revenue, manage expenses, and handle payroll
                    operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/admin/dashboard">
                <Button className="mr-4">Access Admin Panel</Button>
              </Link>
              <Link to="/passenger">
                <Button variant="outline">Passenger Portal</Button>
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <AdminLogin
              onLogin={(values) => {
                console.log("Login attempt:", values);
                // In a real app, this would authenticate and redirect to the dashboard
              }}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Comprehensive Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get a complete overview of your transportation operations with
                  real-time metrics and analytics.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track vehicle status, maintenance schedules, and driver
                  assignments in one place.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Booking System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage ride bookings, assign drivers, and track trip status
                  with ease.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Control access with role-based permissions for administrators,
                  managers, and staff.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Financial Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor revenue, expenses, and generate detailed financial
                  reports.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Reporting & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate comprehensive reports with exportable formats for
                  business intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access the admin panel to begin managing your transportation
            operations efficiently.
          </p>
          <Link to="/admin/dashboard">
            <Button size="lg" className="px-8">
              Go to Admin Panel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Transportation Management System
              </h3>
              <p className="text-gray-300">
                A comprehensive solution for managing transportation services
                and operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-300 hover:text-white"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/passenger"
                    className="text-gray-300 hover:text-white"
                  >
                    Passenger Portal
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Public Website
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@tms-example.com</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Transportation Management
              System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
