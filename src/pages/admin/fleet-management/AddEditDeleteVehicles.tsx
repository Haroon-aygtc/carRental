import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import VehicleForm from "@/components/admin/fleet/VehicleForm";

const mockVehicles = [
  {
    id: "V001",
    make: "Tesla",
    model: "Model S",
    year: "2023",
    licensePlate: "ABC-1234",
    status: "active",
  },
  {
    id: "V002",
    make: "Mercedes",
    model: "E-Class",
    year: "2022",
    licensePlate: "XYZ-5678",
    status: "maintenance",
  },
  {
    id: "V003",
    make: "BMW",
    model: "5 Series",
    year: "2021",
    licensePlate: "DEF-9012",
    status: "active",
  },
  {
    id: "V004",
    make: "Audi",
    model: "A6",
    year: "2023",
    licensePlate: "GHI-3456",
    status: "active",
  },
  {
    id: "V005",
    make: "Lexus",
    model: "ES",
    year: "2022",
    licensePlate: "JKL-7890",
    status: "inactive",
  },
];

const AddEditDeleteVehicles = () => {
  const [isVehicleFormOpen, setIsVehicleFormOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleAddVehicle = () => {
    setSelectedVehicle(null);
    setIsEditing(false);
    setIsVehicleFormOpen(true);
  };

  const handleEditVehicle = (vehicle) => {
    setSelectedVehicle({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      licensePlate: vehicle.licensePlate,
      status: vehicle.status,
      isActive: vehicle.status === "active",
    });
    setIsEditing(true);
    setIsVehicleFormOpen(true);
  };

  const handleVehicleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    setIsVehicleFormOpen(false);
  };

  const handleVehicleFormCancel = () => {
    setIsVehicleFormOpen(false);
  };

  const handleDeleteVehicle = (vehicle) => {
    console.log("Deleting vehicle:", vehicle);
    // In a real app, would show confirmation dialog and then delete
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Vehicles</h2>
        <Button onClick={handleAddVehicle}>
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Vehicle Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Status</TableHead>
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
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditVehicle(vehicle)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteVehicle(vehicle)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isVehicleFormOpen} onOpenChange={setIsVehicleFormOpen}>
        <DialogContent className="sm:max-w-[600px] p-0">
          <VehicleForm
            vehicle={selectedVehicle || undefined}
            onSubmit={handleVehicleFormSubmit}
            onCancel={handleVehicleFormCancel}
            isEditing={isEditing}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEditDeleteVehicles;
