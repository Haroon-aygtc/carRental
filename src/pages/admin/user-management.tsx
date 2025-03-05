import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserManagementPage = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    switch (value) {
      case "users":
        navigate("/admin/user-management/view");
        break;
      case "roles":
        navigate("/admin/user-management/roles");
        break;
      default:
        navigate("/admin/user-management/view");
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-6 space-y-6 bg-gray-50 min-h-screen">
        <Tabs
          defaultValue="users"
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          </TabsList>
        </Tabs>

        <Outlet />
      </div>
    </div>
  );
};

export default UserManagementPage;
