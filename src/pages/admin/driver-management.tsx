import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DriverManagement = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    switch (value) {
      case "drivers":
        navigate("/admin/driver-management/view");
        break;
      case "add-edit":
        navigate("/admin/driver-management/add-edit");
        break;
      case "assign-vehicles":
        navigate("/admin/driver-management/assign-vehicles");
        break;
      case "performance":
        navigate("/admin/driver-management/performance");
        break;
      default:
        navigate("/admin/driver-management/view");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <Tabs
          defaultValue="drivers"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="drivers">View</TabsTrigger>
            <TabsTrigger value="add-edit">Add/Edit</TabsTrigger>
            <TabsTrigger value="assign-vehicles">Assign Vehicles</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
        </Tabs>

        <Outlet />
      </div>
    </div>
  );
};

export default DriverManagement;
