import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import UserTable from "@/components/admin/users/UserTable";
import UserForm from "@/components/admin/users/UserForm";
import { UserPlus } from "lucide-react";

const AddEditDeleteUsers = () => {
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setIsUserFormOpen(true);
  };

  const handleEditUser = (user) => {
    // Convert from UserTable format to UserForm format
    const formattedUser = {
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1] || "",
      email: user.email,
      role: user.role.toLowerCase(),
      isActive: user.status === "active",
    };

    setSelectedUser(formattedUser);
    setIsEditing(true);
    setIsUserFormOpen(true);
  };

  const handleUserFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    setIsUserFormOpen(false);
  };

  const handleUserFormCancel = () => {
    setIsUserFormOpen(false);
  };

  const handleDeleteUser = (user) => {
    console.log("Deleting user:", user);
    // In a real app, would show confirmation dialog and then delete
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Users</h2>
        <Button onClick={handleAddUser}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <UserTable
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onView={(user) => console.log("Viewing user:", user)}
          />
        </CardContent>
      </Card>

      <Dialog open={isUserFormOpen} onOpenChange={setIsUserFormOpen}>
        <DialogContent className="sm:max-w-[600px] p-0">
          <UserForm
            user={selectedUser || undefined}
            onSubmit={handleUserFormSubmit}
            onCancel={handleUserFormCancel}
            isEditing={isEditing}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEditDeleteUsers;
