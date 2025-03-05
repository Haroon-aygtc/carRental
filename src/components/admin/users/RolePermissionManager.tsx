import React, { useState } from "react";
import { Plus, Save, X, Edit, Trash } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Permission {
  id: string;
  name: string;
  description: string;
  module: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

const defaultPermissions: Permission[] = [
  {
    id: "p1",
    name: "view_users",
    description: "View user profiles",
    module: "Users",
  },
  {
    id: "p2",
    name: "edit_users",
    description: "Edit user profiles",
    module: "Users",
  },
  {
    id: "p3",
    name: "delete_users",
    description: "Delete users",
    module: "Users",
  },
  {
    id: "p4",
    name: "view_drivers",
    description: "View driver profiles",
    module: "Drivers",
  },
  {
    id: "p5",
    name: "edit_drivers",
    description: "Edit driver profiles",
    module: "Drivers",
  },
  {
    id: "p6",
    name: "delete_drivers",
    description: "Delete drivers",
    module: "Drivers",
  },
  {
    id: "p7",
    name: "view_vehicles",
    description: "View vehicles",
    module: "Fleet",
  },
  {
    id: "p8",
    name: "edit_vehicles",
    description: "Edit vehicles",
    module: "Fleet",
  },
  {
    id: "p9",
    name: "delete_vehicles",
    description: "Delete vehicles",
    module: "Fleet",
  },
  {
    id: "p10",
    name: "view_bookings",
    description: "View bookings",
    module: "Bookings",
  },
  {
    id: "p11",
    name: "edit_bookings",
    description: "Edit bookings",
    module: "Bookings",
  },
  {
    id: "p12",
    name: "delete_bookings",
    description: "Delete bookings",
    module: "Bookings",
  },
  {
    id: "p13",
    name: "view_finances",
    description: "View financial data",
    module: "Finance",
  },
  {
    id: "p14",
    name: "edit_finances",
    description: "Edit financial data",
    module: "Finance",
  },
  {
    id: "p15",
    name: "view_reports",
    description: "View reports",
    module: "Reports",
  },
  {
    id: "p16",
    name: "export_reports",
    description: "Export reports",
    module: "Reports",
  },
];

const defaultRoles: Role[] = [
  {
    id: "r1",
    name: "Administrator",
    description: "Full system access",
    permissions: defaultPermissions.map((p) => p.id),
  },
  {
    id: "r2",
    name: "Manager",
    description: "Can manage most aspects but with limited financial access",
    permissions: ["p1", "p2", "p4", "p5", "p7", "p8", "p10", "p11", "p15"],
  },
  {
    id: "r3",
    name: "Dispatcher",
    description: "Can view and manage bookings and drivers",
    permissions: ["p1", "p4", "p7", "p10", "p11"],
  },
  {
    id: "r4",
    name: "Accountant",
    description: "Access to financial data and reports",
    permissions: ["p13", "p14", "p15", "p16"],
  },
];

const RolePermissionManager = ({
  roles = defaultRoles,
  permissions = defaultPermissions,
}: {
  roles?: Role[];
  permissions?: Permission[];
}) => {
  const [activeTab, setActiveTab] = useState("roles");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [isAddingRole, setIsAddingRole] = useState(false);
  const [isAddingPermission, setIsAddingPermission] = useState(false);
  const [newPermission, setNewPermission] = useState<Partial<Permission>>({
    module: "Users",
  });
  const [localRoles, setLocalRoles] = useState<Role[]>(roles);
  const [localPermissions, setLocalPermissions] =
    useState<Permission[]>(permissions);

  // Group permissions by module
  const permissionsByModule = localPermissions.reduce(
    (acc, permission) => {
      if (!acc[permission.module]) {
        acc[permission.module] = [];
      }
      acc[permission.module].push(permission);
      return acc;
    },
    {} as Record<string, Permission[]>,
  );

  const modules = Object.keys(permissionsByModule);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  const handleEditRole = (role: Role) => {
    setEditingRole({ ...role });
  };

  const handleSaveRole = () => {
    if (editingRole) {
      setLocalRoles(
        localRoles.map((r) => (r.id === editingRole.id ? editingRole : r)),
      );
      setSelectedRole(editingRole);
      setEditingRole(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingRole(null);
  };

  const handleAddRole = () => {
    setIsAddingRole(true);
    setEditingRole({
      id: `r${localRoles.length + 1}`,
      name: "",
      description: "",
      permissions: [],
    });
  };

  const handleSaveNewRole = () => {
    if (editingRole && editingRole.name) {
      setLocalRoles([...localRoles, editingRole]);
      setSelectedRole(editingRole);
      setEditingRole(null);
      setIsAddingRole(false);
    }
  };

  const handleDeleteRole = (roleId: string) => {
    setLocalRoles(localRoles.filter((r) => r.id !== roleId));
    if (selectedRole && selectedRole.id === roleId) {
      setSelectedRole(null);
    }
  };

  const handlePermissionToggle = (permissionId: string) => {
    if (!editingRole) return;

    const updatedPermissions = editingRole.permissions.includes(permissionId)
      ? editingRole.permissions.filter((id) => id !== permissionId)
      : [...editingRole.permissions, permissionId];

    setEditingRole({ ...editingRole, permissions: updatedPermissions });
  };

  const handleAddPermission = () => {
    setIsAddingPermission(true);
  };

  const handleSaveNewPermission = () => {
    if (
      newPermission.name &&
      newPermission.description &&
      newPermission.module
    ) {
      const newPermissionComplete = {
        id: `p${localPermissions.length + 1}`,
        name: newPermission.name,
        description: newPermission.description,
        module: newPermission.module,
      };
      setLocalPermissions([...localPermissions, newPermissionComplete]);
      setNewPermission({ module: "Users" });
      setIsAddingPermission(false);
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Role & Permission Management</CardTitle>
        <CardDescription>
          Manage user roles and their associated permissions in the system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="matrix">Permission Matrix</TabsTrigger>
          </TabsList>

          <TabsContent value="roles" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Available Roles</h3>
              <Button onClick={handleAddRole}>
                <Plus className="mr-2 h-4 w-4" /> Add Role
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 border rounded-md p-4">
                <h4 className="font-medium mb-2">Role List</h4>
                <div className="space-y-2">
                  {localRoles.map((role) => (
                    <div
                      key={role.id}
                      className={`p-2 rounded-md cursor-pointer flex justify-between items-center ${selectedRole?.id === role.id ? "bg-blue-100" : "hover:bg-gray-100"}`}
                      onClick={() => handleRoleSelect(role)}
                    >
                      <span>{role.name}</span>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditRole(role);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteRole(role.id);
                          }}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 border rounded-md p-4">
                {selectedRole && !editingRole ? (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">{selectedRole.name}</h4>
                      <Button
                        variant="outline"
                        onClick={() => handleEditRole(selectedRole)}
                      >
                        <Edit className="mr-2 h-4 w-4" /> Edit Role
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {selectedRole.description}
                    </p>

                    <h5 className="font-medium mb-2">Assigned Permissions:</h5>
                    <div className="space-y-4">
                      {modules.map((module) => {
                        const modulePermissions = permissionsByModule[module];
                        const hasPermissionsInModule = modulePermissions.some(
                          (p) => selectedRole.permissions.includes(p.id),
                        );

                        if (!hasPermissionsInModule) return null;

                        return (
                          <div key={module} className="border-t pt-2">
                            <h6 className="font-medium text-sm">{module}</h6>
                            <ul className="mt-1 space-y-1">
                              {modulePermissions.map((permission) => {
                                if (
                                  !selectedRole.permissions.includes(
                                    permission.id,
                                  )
                                )
                                  return null;
                                return (
                                  <li key={permission.id} className="text-sm">
                                    • {permission.description}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : editingRole ? (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">
                        {isAddingRole ? "Add New Role" : "Edit Role"}
                      </h4>
                      <div className="space-x-2">
                        <Button variant="outline" onClick={handleCancelEdit}>
                          <X className="mr-2 h-4 w-4" /> Cancel
                        </Button>
                        <Button
                          onClick={
                            isAddingRole ? handleSaveNewRole : handleSaveRole
                          }
                        >
                          <Save className="mr-2 h-4 w-4" /> Save
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Role Name
                        </label>
                        <Input
                          value={editingRole.name}
                          onChange={(e) =>
                            setEditingRole({
                              ...editingRole,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter role name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Description
                        </label>
                        <Input
                          value={editingRole.description}
                          onChange={(e) =>
                            setEditingRole({
                              ...editingRole,
                              description: e.target.value,
                            })
                          }
                          placeholder="Enter role description"
                        />
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Permissions:</h5>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto">
                          {modules.map((module) => (
                            <div key={module} className="border-t pt-2">
                              <h6 className="font-medium text-sm">{module}</h6>
                              <div className="mt-1 space-y-2">
                                {permissionsByModule[module].map(
                                  (permission) => (
                                    <div
                                      key={permission.id}
                                      className="flex items-start space-x-2"
                                    >
                                      <Checkbox
                                        id={permission.id}
                                        checked={editingRole.permissions.includes(
                                          permission.id,
                                        )}
                                        onCheckedChange={() =>
                                          handlePermissionToggle(permission.id)
                                        }
                                      />
                                      <label
                                        htmlFor={permission.id}
                                        className="text-sm cursor-pointer"
                                      >
                                        {permission.description}
                                      </label>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select a role to view details or click "Add Role" to create
                    a new one
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="matrix" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Permission Matrix</h3>
              <Button onClick={handleAddPermission}>
                <Plus className="mr-2 h-4 w-4" /> Add Permission
              </Button>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Permission</TableHead>
                    <TableHead className="w-[200px]">Module</TableHead>
                    {localRoles.map((role) => (
                      <TableHead key={role.id} className="text-center">
                        {role.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {localPermissions.map((permission) => (
                    <TableRow key={permission.id}>
                      <TableCell className="font-medium">
                        {permission.description}
                      </TableCell>
                      <TableCell>{permission.module}</TableCell>
                      {localRoles.map((role) => (
                        <TableCell key={role.id} className="text-center">
                          <Switch
                            checked={role.permissions.includes(permission.id)}
                            disabled
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        {/* Add Permission Dialog */}
        <Dialog open={isAddingPermission} onOpenChange={setIsAddingPermission}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Permission</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Permission Name
                </label>
                <Input
                  value={newPermission.name || ""}
                  onChange={(e) =>
                    setNewPermission({ ...newPermission, name: e.target.value })
                  }
                  placeholder="e.g., view_reports"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Input
                  value={newPermission.description || ""}
                  onChange={(e) =>
                    setNewPermission({
                      ...newPermission,
                      description: e.target.value,
                    })
                  }
                  placeholder="e.g., View system reports"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Module</label>
                <select
                  className="w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                  value={newPermission.module}
                  onChange={(e) =>
                    setNewPermission({
                      ...newPermission,
                      module: e.target.value,
                    })
                  }
                >
                  {modules.map((module) => (
                    <option key={module} value={module}>
                      {module}
                    </option>
                  ))}
                  <option value="New Module">New Module</option>
                </select>
              </div>
              {newPermission.module === "New Module" && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Module Name
                  </label>
                  <Input
                    onChange={(e) =>
                      setNewPermission({
                        ...newPermission,
                        module: e.target.value,
                      })
                    }
                    placeholder="Enter new module name"
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddingPermission(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveNewPermission}>Save Permission</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default RolePermissionManager;
