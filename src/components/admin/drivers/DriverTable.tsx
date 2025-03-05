import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Search,
  MoreVertical,
  Edit,
  Trash2,
  UserPlus,
  Filter,
  Download,
  Eye,
  Car,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: string;
  vehicle?: string;
  status: "available" | "on trip" | "on break" | "inactive";
}

interface DriverTableProps {
  drivers?: Driver[];
  onEdit?: (driver: Driver) => void;
  onDelete?: (driver: Driver) => void;
  onView?: (driver: Driver) => void;
  onAssignVehicle?: (driver: Driver) => void;
  onAddDriver?: () => void;
}

const DriverTable = ({
  drivers = [
    {
      id: "DRV001",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      licenseNumber: "DL12345678",
      licenseExpiry: "2025-06-15",
      vehicle: "Tesla Model S (ABC-1234)",
      status: "available",
    },
    {
      id: "DRV002",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 987-6543",
      licenseNumber: "DL87654321",
      licenseExpiry: "2024-08-22",
      vehicle: "Mercedes E-Class (XYZ-5678)",
      status: "on trip",
    },
    {
      id: "DRV003",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      phone: "+1 (555) 456-7890",
      licenseNumber: "DL45678901",
      licenseExpiry: "2023-12-10",
      vehicle: "BMW 5 Series (DEF-9012)",
      status: "on break",
    },
    {
      id: "DRV004",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 234-5678",
      licenseNumber: "DL23456789",
      licenseExpiry: "2024-03-05",
      status: "inactive",
    },
  ],
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
  onAssignVehicle = () => {},
  onAddDriver = () => {},
}: DriverTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter drivers based on search term
  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.includes(searchTerm) ||
      driver.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrivers = filteredDrivers.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

  // Status badge styling
  const getStatusBadge = (status: Driver["status"]) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "available":
        return (
          <Badge variant="default" className="bg-green-500">
            Available
          </Badge>
        );
      case "on trip":
        return (
          <Badge variant="default" className="bg-blue-500">
            On Trip
          </Badge>
        );
      case "on break":
        return (
          <Badge variant="default" className="bg-yellow-500">
            On Break
          </Badge>
        );
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="w-full bg-white rounded-md shadow-sm border border-gray-200">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Driver Management
        </h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search drivers..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button onClick={onAddDriver}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Driver
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Driver ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDrivers.length > 0 ? (
              currentDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.id}</TableCell>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{driver.email}</span>
                      <span className="text-xs text-gray-500">
                        {driver.phone}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{driver.licenseNumber}</span>
                      <span className="text-xs text-gray-500">
                        Exp:{" "}
                        {new Date(driver.licenseExpiry).toLocaleDateString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {driver.vehicle ? (
                      driver.vehicle
                    ) : (
                      <span className="text-gray-400 text-sm italic">
                        Not assigned
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(driver.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView(driver)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onEdit(driver)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onAssignVehicle(driver)}
                        >
                          <Car className="mr-2 h-4 w-4" />
                          Assign Vehicle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Contact
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => onDelete(driver)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-6 text-gray-500"
                >
                  No drivers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-200">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default DriverTable;
