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
import { Input } from "@/components/ui/input";
import { Search, Download, DollarSign, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockPayroll = [
  {
    id: 1,
    employee: "John Smith",
    role: "Driver",
    salary: 3200.0,
    bonus: 150.0,
    deductions: 320.0,
    netPay: 3030.0,
    status: "paid",
    paymentDate: "2023-06-30",
  },
  {
    id: 2,
    employee: "Sarah Johnson",
    role: "Driver",
    salary: 3200.0,
    bonus: 200.0,
    deductions: 320.0,
    netPay: 3080.0,
    status: "paid",
    paymentDate: "2023-06-30",
  },
  {
    id: 3,
    employee: "Michael Chen",
    role: "Dispatcher",
    salary: 3800.0,
    bonus: 0.0,
    deductions: 380.0,
    netPay: 3420.0,
    status: "pending",
    paymentDate: "2023-07-15",
  },
  {
    id: 4,
    employee: "Emily Davis",
    role: "Admin",
    salary: 4200.0,
    bonus: 0.0,
    deductions: 420.0,
    netPay: 3780.0,
    status: "paid",
    paymentDate: "2023-06-30",
  },
  {
    id: 5,
    employee: "David Wilson",
    role: "Driver",
    salary: 3200.0,
    bonus: 100.0,
    deductions: 320.0,
    netPay: 2980.0,
    status: "pending",
    paymentDate: "2023-07-15",
  },
];

const PayrollManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [payPeriod, setPayPeriod] = useState("current");
  const [successMessage, setSuccessMessage] = useState("");

  const filteredPayroll = mockPayroll.filter(
    (item) =>
      item.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleProcessPayroll = () => {
    console.log("Processing payroll for pending payments");
    setSuccessMessage("Payroll processed successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleExportPayroll = () => {
    console.log("Exporting payroll data");
  };

  return (
    <div className="space-y-6">
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Payroll Management</h2>
        <div className="flex space-x-2">
          <Select value={payPeriod} onValueChange={setPayPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select pay period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Period</SelectItem>
              <SelectItem value="previous">Previous Period</SelectItem>
              <SelectItem value="all">All Periods</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExportPayroll}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={handleProcessPayroll}>
            <DollarSign className="mr-2 h-4 w-4" />
            Process Payroll
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Employee Payroll</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search employees..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Base Salary</TableHead>
                <TableHead>Bonus</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayroll.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.employee}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>${item.salary.toFixed(2)}</TableCell>
                  <TableCell>${item.bonus.toFixed(2)}</TableCell>
                  <TableCell>${item.deductions.toFixed(2)}</TableCell>
                  <TableCell className="font-medium">
                    ${item.netPay.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.paymentDate}</TableCell>
                  <TableCell>
                    {item.status === "pending" ? (
                      <Button variant="outline" size="sm">
                        <CheckCircle className="mr-2 h-3 w-3" />
                        Process
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-3 w-3" />
                        Receipt
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Payroll Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Total Payroll</h3>
              <p className="text-2xl font-bold">$16,290.00</p>
              <p className="text-sm text-gray-500">Current pay period</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Processed</h3>
              <p className="text-2xl font-bold">$9,890.00</p>
              <p className="text-sm text-gray-500">3 employees</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Pending</h3>
              <p className="text-2xl font-bold">$6,400.00</p>
              <p className="text-sm text-gray-500">2 employees</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollManagement;
