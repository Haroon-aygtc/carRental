import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FleetManagement = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    switch (value) {
      case "vehicles":
        navigate("/admin/fleet-management/view");
        break;
      case "add-edit":
        navigate("/admin/fleet-management/add-edit");
        break;
      case "maintenance":
        navigate("/admin/fleet-management/maintenance");
        break;
      default:
        navigate("/admin/fleet-management/view");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <Tabs
          defaultValue="vehicles"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="vehicles">View Vehicles</TabsTrigger>
            <TabsTrigger value="add-edit">Add/Edit</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>
        </Tabs>

        <Outlet />
      </div>
    </div>
  );
};

export default FleetManagement;
