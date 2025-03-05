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
import {
  Search,
  Download,
  BarChart2,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockRevenue = [
  {
    id: 1,
    date: "2023-06-01",
    amount: 5240.5,
    source: "Bookings",
    description: "15 completed rides",
    status: "completed",
  },
  {
    id: 2,
    date: "2023-06-02",
    amount: 3120.75,
    source: "Bookings",
    description: "9 completed rides",
    status: "completed",
  },
  {
    id: 3,
    date: "2023-06-03",
    amount: 4890.25,
    source: "Bookings",
    description: "12 completed rides",
    status: "completed",
  },
  {
    id: 4,
    date: "2023-06-04",
    amount: 2760.0,
    source: "Bookings",
    description: "8 completed rides",
    status: "pending",
  },
  {
    id: 5,
    date: "2023-06-05",
    amount: 1500.0,
    source: "Subscription",
    description: "Premium service subscription",
    status: "completed",
  },
];

const RevenueMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState("week");
  const [sourceFilter, setSourceFilter] = useState("all");

  const filteredRevenue = mockRevenue.filter((revenue) => {
    const matchesSearch =
      revenue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      revenue.source.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSource =
      sourceFilter === "all" || revenue.source === sourceFilter;

    return matchesSearch && matchesSource;
  });

  const totalRevenue = filteredRevenue.reduce(
    (sum, revenue) => sum + revenue.amount,
    0,
  );

  const completedRevenue = filteredRevenue
    .filter((revenue) => revenue.status === "completed")
    .reduce((sum, revenue) => sum + revenue.amount, 0);

  const pendingRevenue = filteredRevenue
    .filter((revenue) => revenue.status === "pending")
    .reduce((sum, revenue) => sum + revenue.amount, 0);

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <BarChart2 className="w-6 h-6 text-blue-500" /> Revenue Monitoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="Search revenue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3"
            icon={<Search />}
          />
          <Select onValueChange={setSourceFilter} defaultValue={sourceFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="Bookings">Bookings</SelectItem>
              <SelectItem value="Subscription">Subscription</SelectItem>
            </SelectContent>
          </Select>
          <Button className="ml-auto flex gap-2">
            <Download className="w-4 h-4" /> Export Data
          </Button>
        </div>

        {/* Revenue Summary */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Card className="p-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="text-green-500" /> Total Revenue
            </CardTitle>
            <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
          </Card>

          <Card className="p-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="text-blue-500" /> Completed Revenue
            </CardTitle>
            <p className="text-2xl font-bold">${completedRevenue.toFixed(2)}</p>
          </Card>

          <Card className="p-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingDown className="text-red-500" /> Pending Revenue
            </CardTitle>
            <p className="text-2xl font-bold">${pendingRevenue.toFixed(2)}</p>
          </Card>
        </div>

        {/* Revenue Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRevenue.map((revenue) => (
              <TableRow key={revenue.id}>
                <TableCell>{revenue.date}</TableCell>
                <TableCell>{revenue.source}</TableCell>
                <TableCell>{revenue.description}</TableCell>
                <TableCell>${revenue.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      revenue.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }
                  >
                    {revenue.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RevenueMonitoring;
