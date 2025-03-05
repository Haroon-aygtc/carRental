import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockMaintenanceSchedule = [
  {
    id: "M001",
    vehicleId: "V001",
    vehicle: "Tesla Model S (ABC-1234)",
    type: "Regular Service",
    lastMaintenance: "2023-05-15",
    nextMaintenance: "2023-11-15",
    status: "scheduled",
    notes: "Regular 6-month service check",
  },
  {
    id: "M002",
    vehicleId: "V002",
    vehicle: "Mercedes E-Class (XYZ-5678)",
    type: "Repair",
    lastMaintenance: "2023-04-10",
    nextMaintenance: "2023-10-10",
    status: "in-progress",
    notes: "Brake system inspection and repair",
  },
  {
    id: "M003",
    vehicleId: "V003",
    vehicle: "BMW 5 Series (DEF-9012)",
    type: "Regular Service",
    lastMaintenance: "2023-06-20",
    nextMaintenance: "2023-12-20",
    status: "scheduled",
    notes: "Oil change and general inspection",
  },
  {
    id: "M004",
    vehicleId: "V004",
    vehicle: "Audi A6 (GHI-3456)",
    type: "Tire Replacement",
    lastMaintenance: "2023-03-05",
    nextMaintenance: "2023-09-05",
    status: "overdue",
    notes: "Replace all four tires",
  },
  {
    id: "M005",
    vehicleId: "V005",
    vehicle: "Lexus ES (JKL-7890)",
    type: "Regular Service",
    lastMaintenance: "2023-07-12",
    nextMaintenance: "2024-01-12",
    status: "completed",
    notes: "Completed regular maintenance check",
  },
];

const mockVehicles = [
  { id: "V001", name: "Tesla Model S", plate: "ABC-1234" },
  { id: "V002", name: "Mercedes E-Class", plate: "XYZ-5678" },
  { id: "V003", name: "BMW 5 Series", plate: "DEF-9012" },
  { id: "V004", name: "Audi A6", plate: "GHI-3456" },
  { id: "V005", name: "Lexus ES", plate: "JKL-7890" },
];

const MaintenanceScheduling = () => {
  const [isScheduleFormOpen, setIsScheduleFormOpen] = useState(false);
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  const [formData, setFormData] = useState({
    vehicleId: "",
    type: "Regular Service",
    date: "",
    notes: "",
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge className="bg-blue-100 text-blue-800 flex items-center">
            <Calendar className="h-3 w-3 mr-1" /> Scheduled
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" /> In Progress
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" /> Completed
          </Badge>
        );
      case "overdue":
        return (
          <Badge className="bg-red-100 text-red-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" /> Overdue
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleScheduleMaintenance = () => {
    setSelectedMaintenance(null);
    setFormData({
      vehicleId: "",
      type: "Regular Service",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    });
    setIsScheduleFormOpen(true);
  };

  const handleEditMaintenance = (maintenance) => {
    setSelectedMaintenance(maintenance);
    setFormData({
      vehicleId: maintenance.vehicleId,
      type: maintenance.type,
      date: maintenance.nextMaintenance,
      notes: maintenance.notes,
    });
    setIsScheduleFormOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Maintenance form submitted:", formData);
    setIsScheduleFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Maintenance Scheduling</h2>
        <Button onClick={handleScheduleMaintenance}>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Maintenance
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Maintenance Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Maintenance</TableHead>
                <TableHead>Next Maintenance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMaintenanceSchedule.map((maintenance) => (
                <TableRow key={maintenance.id}>
                  <TableCell className="font-medium">
                    {maintenance.vehicle}
                  </TableCell>
                  <TableCell>{maintenance.type}</TableCell>
                  <TableCell>{maintenance.lastMaintenance}</TableCell>
                  <TableCell>{maintenance.nextMaintenance}</TableCell>
                  <TableCell>{getStatusBadge(maintenance.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditMaintenance(maintenance)}
                    >
                      Reschedule
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isScheduleFormOpen} onOpenChange={setIsScheduleFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {selectedMaintenance
                ? "Reschedule Maintenance"
                : "Schedule New Maintenance"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="vehicleId">Vehicle</Label>
              <Select
                value={formData.vehicleId}
                onValueChange={(value) =>
                  handleSelectChange("vehicleId", value)
                }
                disabled={!!selectedMaintenance}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {mockVehicles.map((vehicle) => (
                    <SelectItem key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} ({vehicle.plate})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Maintenance Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select maintenance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Regular Service">
                    Regular Service
                  </SelectItem>
                  <SelectItem value="Repair">Repair</SelectItem>
                  <SelectItem value="Tire Replacement">
                    Tire Replacement
                  </SelectItem>
                  <SelectItem value="Inspection">Inspection</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Maintenance Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Enter maintenance details"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsScheduleFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {selectedMaintenance
                  ? "Update Schedule"
                  : "Schedule Maintenance"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaintenanceScheduling;
