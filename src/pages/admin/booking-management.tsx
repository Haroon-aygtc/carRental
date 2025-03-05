import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BookingManagement = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    switch (value) {
      case "view":
        navigate("/admin/booking-management/view");
        break;
      case "status":
        navigate("/admin/booking-management/status");
        break;
      case "assign-drivers":
        navigate("/admin/booking-management/assign-drivers");
        break;
      default:
        navigate("/admin/booking-management/view");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <Tabs
          defaultValue="view"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="view">View Bookings</TabsTrigger>
            <TabsTrigger value="status">Manage Status</TabsTrigger>
            <TabsTrigger value="assign-drivers">Assign Drivers</TabsTrigger>
          </TabsList>
        </Tabs>

        <Outlet />
      </div>
    </div>
  );
};

export default BookingManagement;
