import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentBookings from "@/components/admin/dashboard/RecentBookings";

const ViewAllBookings = () => {
  const handleViewBooking = (id) => {
    console.log("Viewing booking:", id);
  };

  const handleEditBooking = (id) => {
    console.log("Editing booking:", id);
  };

  const handleDeleteBooking = (id) => {
    console.log("Deleting booking:", id);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <RecentBookings
          onView={handleViewBooking}
          onEdit={handleEditBooking}
          onDelete={handleDeleteBooking}
        />
      </CardContent>
    </Card>
  );
};

export default ViewAllBookings;
