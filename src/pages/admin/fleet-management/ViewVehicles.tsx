import React from "react";
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
import { Eye, Edit } from "lucide-react";

const mockVehicles = [
  {
    id: "V001",
    make: "Tesla",
    model: "Model S",
    year: "2023",
    licensePlate: "ABC-1234",
    status: "active",
    assignedDriver: "John Smith",
  },
  {
    id: "V002",
    make: "Mercedes",
    model: "E-Class",
    year: "2022",
    licensePlate: "XYZ-5678",
    status: "maintenance",
    assignedDriver: "Sarah Johnson",
  },
  {
    id: "V003",
    make: "BMW",
    model: "5 Series",
    year: "2021",
    licensePlate: "DEF-9012",
    status: "active",
    assignedDriver: "Michael Chen",
  },
  {
    id: "V004",
    make: "Audi",
    model: "A6",
    year: "2023",
    licensePlate: "GHI-3456",
    status: "active",
    assignedDriver: null,
  },
  {
    id: "V005",
    make: "Lexus",
    model: "ES",
    year: "2022",
    licensePlate: "JKL-7890",
    status: "inactive",
    assignedDriver: null,
  },
];

const ViewVehicles = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "maintenance":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
        );
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Vehicle Fleet</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>License Plate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned Driver</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockVehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="font-medium">{vehicle.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>
                      {vehicle.make} {vehicle.model}
                    </span>
                    <span className="text-xs text-gray-500">
                      {vehicle.year}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{vehicle.licensePlate}</TableCell>
                <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                <TableCell>
                  {vehicle.assignedDriver || (
                    <span className="text-gray-400 italic">Unassigned</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ViewVehicles;
