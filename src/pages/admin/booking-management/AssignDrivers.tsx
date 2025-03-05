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
    status: "scheduled",
    assignedDriver: null,
  },
  {
    id: "BK-1002",
    customerName: "Emma Johnson",
    pickupLocation: "456 Park Ave, New York",
    destination: "Grand Central Station, New York",
    dateTime: new Date(2023, 5, 16, 9, 15),
    status: "in-progress",
    assignedDriver: "John Smith",
  },
  {
    id: "BK-1003",
    customerName: "Michael Brown",
    pickupLocation: "789 Broadway, New York",
    destination: "LaGuardia Airport, New York",
    dateTime: new Date(2023, 5, 17, 11, 45),
    status: "scheduled",
    assignedDriver: null,
  },
  {
    id: "BK-1004",
    customerName: "Sarah Davis",
    pickupLocation: "321 5th Ave, New York",
    destination: "Newark Airport, New Jersey",
    dateTime: new Date(2023, 5, 15, 16, 0),
    status: "cancelled",
    assignedDriver: null,
  },
  {
    id: "BK-1005",
    customerName: "Robert Wilson",
    pickupLocation: "555 Madison Ave, New York",
    destination: "Brooklyn Bridge, New York",
    dateTime: new Date(2023, 5, 18, 13, 30),
    status: "scheduled",
    assignedDriver: "Sarah Johnson",
  },
];

const mockDrivers = [
  { id: "DRV001", name: "John Smith", status: "on trip" },
  { id: "DRV002", name: "Sarah Johnson", status: "on trip" },
  { id: "DRV003", name: "Michael Chen", status: "available" },
  { id: "DRV004", name: "Emily Davis", status: "available" },
  { id: "DRV005", name: "David Wilson", status: "available" },
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
  scheduled: "bg-yellow-100 text-yellow-800",
};

const AssignDrivers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [driverAssignments, setDriverAssignments] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const filteredBookings = mockBookings.filter(
    (booking) =>
      (booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.customerName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      booking.status !== "cancelled" &&
      booking.status !== "completed",
  );

  const availableDrivers = mockDrivers.filter(
    (driver) => driver.status === "available",
  );

  const handleDriverAssignment = (bookingId, driverId) => {
    setDriverAssignments((prev) => ({
      ...prev,
      [bookingId]: driverId,
    }));
  };

  const handleSaveAssignments = () => {
    console.log("Saving driver assignments:", driverAssignments);
    setSuccessMessage("Driver assignments updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const getAssignedDriver = (booking) => {
    if (driverAssignments[booking.id]) {
      const driver = mockDrivers.find(
        (d) => d.id === driverAssignments[booking.id],
      );
      return driver ? driver.name : "Unknown";
    }
    return booking.assignedDriver;
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
          <CardTitle>Assign Drivers to Bookings</CardTitle>
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
            <Button onClick={handleSaveAssignments}>
              <Save className="mr-2 h-4 w-4" />
              Save Assignments
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current Driver</TableHead>
                <TableHead>Assign Driver</TableHead>
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
                    <Badge className={statusColors[booking.status]}>
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {getAssignedDriver(booking) || (
                      <span className="text-gray-400 italic">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={driverAssignments[booking.id] || ""}
                      onValueChange={(value) =>
                        handleDriverAssignment(booking.id, value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select driver" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Unassigned</SelectItem>
                        {availableDrivers.map((driver) => (
                          <SelectItem key={driver.id} value={driver.id}>
                            {driver.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {Object.keys(driverAssignments).length > 0 && (
            <div className="mt-6 flex justify-end">
              <Button onClick={handleSaveAssignments}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Save All Assignments
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Available Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.id}</TableCell>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        driver.status === "available"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {driver.status.charAt(0).toUpperCase() +
                        driver.status.slice(1).replace("-", " ")}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignDrivers;
