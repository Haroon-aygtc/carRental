import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Save, CheckCircle } from "lucide-react";

const mockBookings = [
  {
    id: "BK-1001",
    customerName: "John Smith",
    pickupLocation: "123 Main St, New York",
    destination: "JFK Airport, New York",
    dateTime: new Date(2023, 5, 15, 14, 30),
    status: "completed",
  },
  {
    id: "BK-1002",
    customerName: "Emma Johnson",
    pickupLocation: "456 Park Ave, New York",
    destination: "Grand Central Station, New York",
    dateTime: new Date(2023, 5, 16, 9, 15),
    status: "in-progress",
  },
  {
    id: "BK-1003",
    customerName: "Michael Brown",
    pickupLocation: "789 Broadway, New York",
    destination: "LaGuardia Airport, New York",
    dateTime: new Date(2023, 5, 17, 11, 45),
    status: "scheduled",
  },
  {
    id: "BK-1004",
    customerName: "Sarah Davis",
    pickupLocation: "321 5th Ave, New York",
    destination: "Newark Airport, New Jersey",
    dateTime: new Date(2023, 5, 15, 16, 0),
    status: "cancelled",
  },
  {
    id: "BK-1005",
    customerName: "Robert Wilson",
    pickupLocation: "555 Madison Ave, New York",
    destination: "Brooklyn Bridge, New York",
    dateTime: new Date(2023, 5, 18, 13, 30),
    status: "scheduled",
  },
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
  scheduled: "bg-yellow-100 text-yellow-800",
};

const ManageBookingStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusUpdates, setStatusUpdates] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const filteredBookings = mockBookings.filter(
    (booking) =>
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleStatusChange = (bookingId, newStatus) => {
    setStatusUpdates((prev) => ({
      ...prev,
      [bookingId]: newStatus,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving status updates:", statusUpdates);
    setSuccessMessage("Booking statuses updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const getBookingStatus = (booking) => {
    return statusUpdates[booking.id] || booking.status;
  };

  return (
    <div className="space-y-6">
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Manage Booking Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search bookings..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={handleSaveChanges}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Current Status</TableHead>
                <TableHead>Update Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>
                    {booking.dateTime.toLocaleDateString()}{" "}
                    {booking.dateTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[getBookingStatus(booking)]}>
                      {getBookingStatus(booking).charAt(0).toUpperCase() +
                        getBookingStatus(booking).slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={statusUpdates[booking.id] || booking.status}
                      onValueChange={(value) =>
                        handleStatusChange(booking.id, value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {Object.keys(statusUpdates).length > 0 && (
            <div className="mt-6 flex justify-end">
              <Button onClick={handleSaveChanges}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Save All Changes
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageBookingStatus;
