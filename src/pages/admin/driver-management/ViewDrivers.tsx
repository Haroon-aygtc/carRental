import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DriverTable from "@/components/admin/drivers/DriverTable";

const ViewDrivers = () => {
  const handleViewDriver = (driver) => {
    console.log("Viewing driver:", driver);
  };

  const handleEditDriver = (driver) => {
    console.log("Editing driver:", driver);
  };

  const handleDeleteDriver = (driver) => {
    console.log("Deleting driver:", driver);
  };

  const handleAssignVehicle = (driver) => {
    console.log("Assigning vehicle to driver:", driver);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Driver List</CardTitle>
      </CardHeader>
      <CardContent>
        <DriverTable
          onView={handleViewDriver}
          onEdit={handleEditDriver}
          onDelete={handleDeleteDriver}
          onAssignVehicle={handleAssignVehicle}
        />
      </CardContent>
    </Card>
  );
};

export default ViewDrivers;
