import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import DriverTable from "@/components/admin/drivers/DriverTable";
import DriverForm from "@/components/admin/drivers/DriverForm";
import { UserPlus } from "lucide-react";

const AddEditDeleteDrivers = () => {
  const [isDriverFormOpen, setIsDriverFormOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddDriver = () => {
    setSelectedDriver(null);
    setIsEditing(false);
    setIsDriverFormOpen(true);
  };

  const handleEditDriver = (driver) => {
    // Convert from DriverTable format to DriverForm format
    const formattedDriver = {
      firstName: driver.name.split(" ")[0],
      lastName: driver.name.split(" ")[1] || "",
      email: driver.email,
      phone: driver.phone,
      licenseNumber: driver.licenseNumber,
      licenseExpiry: driver.licenseExpiry,
      isActive: driver.status !== "inactive",
    };

    setSelectedDriver(formattedDriver);
    setIsEditing(true);
    setIsDriverFormOpen(true);
  };

  const handleDriverFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    setIsDriverFormOpen(false);
  };

  const handleDriverFormCancel = () => {
    setIsDriverFormOpen(false);
  };

  const handleDeleteDriver = (driver) => {
    console.log("Deleting driver:", driver);
    // In a real app, would show confirmation dialog and then delete
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Drivers</h2>
        <Button onClick={handleAddDriver}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Driver
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Driver Management</CardTitle>
        </CardHeader>
        <CardContent>
          <DriverTable
            onEdit={handleEditDriver}
            onDelete={handleDeleteDriver}
            onView={(driver) => console.log("Viewing driver:", driver)}
            onAddDriver={handleAddDriver}
          />
        </CardContent>
      </Card>

      <Dialog open={isDriverFormOpen} onOpenChange={setIsDriverFormOpen}>
        <DialogContent className="sm:max-w-[600px] p-0">
          <DriverForm
            driver={selectedDriver || undefined}
            onSubmit={handleDriverFormSubmit}
            onCancel={handleDriverFormCancel}
            isEditing={isEditing}
            vehicles={[
              { id: "V001", model: "Tesla Model S", licensePlate: "ABC-1234" },
              {
                id: "V002",
                model: "Mercedes E-Class",
                licensePlate: "XYZ-5678",
              },
              { id: "V003", model: "BMW 5 Series", licensePlate: "DEF-9012" },
            ]}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEditDeleteDrivers;
