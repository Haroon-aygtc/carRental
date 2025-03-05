import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RolePermissionManager from "@/components/admin/users/RolePermissionManager";

const AssignRolesPermissions = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Role & Permission Management</CardTitle>
      </CardHeader>
      <CardContent>
        <RolePermissionManager />
      </CardContent>
    </Card>
  );
};

export default AssignRolesPermissions;
