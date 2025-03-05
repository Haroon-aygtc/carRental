import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Car, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import VehicleForm from "@/components/admin/fleet/VehicleForm";

const mockVehicles = [
  {
    id: "V001",
    model: "Tesla Model S",
    make: "Tesla",
    year: "2023",
    licensePlate: "ABC-1234",
    status: "active",
    lastMaintenance: "2023-05-15",
    nextMaintenance: "2023-11-15",
  },
  {
    id: "V002",
    model: "E-Class",
    make: "Mercedes",
    year: "2022",
    licensePlate: "XYZ-5678",
    status: "maintenance",
    lastMaintenance: "2023-04-10",
    nextMaintenance: "2023-10-10",
  },
  {
    id: "V003",
    model: "5 Series",
    make: "BMW",
    year: "2021",
    licensePlate: "DEF-9012",
    status: "active",
    lastMaintenance: "2023-06-20",
    nextMaintenance: "2023-12-20",
  },
];

const FleetManagement = () => {
  const [activeTab, setActiveTab] = useState("vehicles");
  const [isVehicleFormOpen, setIsVehicleFormOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddVehicle = () => {
    setSelectedVehicle(null);
    setIsEditing(false);
    setIsVehicleFormOpen(true);
  };

  const handleEditVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
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

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Fleet Management
          </h1>
          <Button onClick={handleAddVehicle}>
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="vehicles" className="mt-6">
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
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockVehicles.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-medium">
                          {vehicle.id}
                        </TableCell>
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
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${vehicle.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {vehicle.status.charAt(0).toUpperCase() +
                              vehicle.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditVehicle(vehicle)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="mt-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Maintenance Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Last Maintenance</TableHead>
                      <TableHead>Next Maintenance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockVehicles.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-medium">
                          {vehicle.make} {vehicle.model} ({vehicle.licensePlate}
                          )
                        </TableCell>
                        <TableCell>{vehicle.lastMaintenance}</TableCell>
                        <TableCell>{vehicle.nextMaintenance}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${new Date(vehicle.nextMaintenance) > new Date() ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                          >
                            {new Date(vehicle.nextMaintenance) > new Date()
                              ? "Scheduled"
                              : "Overdue"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Schedule
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
    </div>
  );
};

export default FleetManagement;
