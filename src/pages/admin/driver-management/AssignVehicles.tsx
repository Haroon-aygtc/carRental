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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Car, Check } from "lucide-react";

const mockDrivers = [
  {
    id: "DRV001",
    name: "John Smith",
    status: "available",
    currentVehicle: "Tesla Model S (ABC-1234)",
  },
  {
    id: "DRV002",
    name: "Sarah Johnson",
    status: "on trip",
    currentVehicle: "Mercedes E-Class (XYZ-5678)",
  },
  {
    id: "DRV003",
    name: "Michael Chen",
    status: "on break",
    currentVehicle: "BMW 5 Series (DEF-9012)",
  },
  {
    id: "DRV004",
    name: "Emily Davis",
    status: "available",
    currentVehicle: null,
  },
];

const mockVehicles = [
  { id: "V001", name: "Tesla Model S", plate: "ABC-1234", status: "assigned" },
  {
    id: "V002",
    name: "Mercedes E-Class",
    plate: "XYZ-5678",
    status: "assigned",
  },
  { id: "V003", name: "BMW 5 Series", plate: "DEF-9012", status: "assigned" },
  { id: "V004", name: "Audi A6", plate: "GHI-3456", status: "available" },
  { id: "V005", name: "Lexus ES", plate: "JKL-7890", status: "available" },
  {
    id: "V006",
    name: "Toyota Camry",
    plate: "MNO-1234",
    status: "maintenance",
  },
];

const AssignVehicles = () => {
  const [assignments, setAssignments] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleAssign = (driverId, vehicleId) => {
    setAssignments((prev) => ({
      ...prev,
      [driverId]: vehicleId,
    }));
  };

  const handleSaveAssignments = () => {
    console.log("Saving vehicle assignments:", assignments);
    setSuccessMessage("Vehicle assignments updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "available":
        return (
          <Badge variant="default" className="bg-green-500">
            Available
          </Badge>
        );
      case "on trip":
        return (
          <Badge variant="default" className="bg-blue-500">
            On Trip
          </Badge>
        );
      case "on break":
        return (
          <Badge variant="default" className="bg-yellow-500">
            On Break
          </Badge>
        );
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>;
      case "assigned":
        return <Badge variant="secondary">Assigned</Badge>;
      case "maintenance":
        return (
          <Badge
            variant="outline"
            className="border-orange-500 text-orange-500"
          >
            Maintenance
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const availableVehicles = mockVehicles.filter(
    (v) => v.status === "available",
  );

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
          <CardTitle className="flex items-center">
            <Car className="mr-2 h-5 w-5" />
            Vehicle Assignment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current Vehicle</TableHead>
                <TableHead>Assign Vehicle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{getStatusBadge(driver.status)}</TableCell>
                  <TableCell>
                    {driver.currentVehicle || (
                      <span className="text-gray-400 italic">
                        None assigned
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Select
                        value={assignments[driver.id] || ""}
                        onValueChange={(value) =>
                          handleAssign(driver.id, value)
                        }
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">None</SelectItem>
                          {availableVehicles.map((vehicle) => (
                            <SelectItem key={vehicle.id} value={vehicle.id}>
                              {vehicle.name} ({vehicle.plate})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 flex justify-end">
            <Button onClick={handleSaveAssignments}>
              <Check className="mr-2 h-4 w-4" />
              Save Assignments
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Available Vehicles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.name}</TableCell>
                  <TableCell>{vehicle.plate}</TableCell>
                  <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignVehicles;
