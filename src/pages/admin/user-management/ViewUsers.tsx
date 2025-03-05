import React from "react";
import UserTable from "@/components/admin/users/UserTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ViewUsers = () => {
  const handleViewUser = (user) => {
    console.log("Viewing user:", user);
  };

  const handleEditUser = (user) => {
    console.log("Editing user:", user);
  };

  const handleDeleteUser = (user) => {
    console.log("Deleting user:", user);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>User List</CardTitle>
      </CardHeader>
      <CardContent>
        <UserTable
          onView={handleViewUser}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </CardContent>
    </Card>
  );
};

export default ViewUsers;
