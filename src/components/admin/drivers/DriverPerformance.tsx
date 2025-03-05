import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, TrendingDown } from "lucide-react";

interface DriverPerformanceData {
  id: string;
  name: string;
  tripsCompleted: number;
  rating: number;
  onTimePercentage: number;
  cancellationRate: number;
  earnings: number;
  trend: "up" | "down" | "stable";
}

interface DriverPerformanceProps {
  data?: DriverPerformanceData[];
  period?: "week" | "month" | "quarter" | "year";
}

const DriverPerformance = ({
  data = [
    {
      id: "DRV001",
      name: "John Smith",
      tripsCompleted: 87,
      rating: 4.8,
      onTimePercentage: 95,
      cancellationRate: 2,
      earnings: 3450.75,
      trend: "up",
    },
    {
      id: "DRV002",
      name: "Sarah Johnson",
      tripsCompleted: 64,
      rating: 4.9,
      onTimePercentage: 98,
      cancellationRate: 1,
      earnings: 2890.5,
      trend: "up",
    },
    {
      id: "DRV003",
      name: "Michael Chen",
      tripsCompleted: 72,
      rating: 4.6,
      onTimePercentage: 92,
      cancellationRate: 3,
      earnings: 3120.25,
      trend: "down",
    },
    {
      id: "DRV004",
      name: "Emily Davis",
      tripsCompleted: 53,
      rating: 4.7,
      onTimePercentage: 94,
      cancellationRate: 2,
      earnings: 2450.0,
      trend: "stable",
    },
  ],
  period = "month",
}: DriverPerformanceProps) => {
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        <span className="mr-2">{rating.toFixed(1)}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < fullStars
                  ? "text-yellow-400 fill-yellow-400"
                  : i === fullStars && hasHalfStar
                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                    : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderTrend = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "stable":
        return <span className="text-gray-500">―</span>;
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Driver Performance Metrics</span>
          <Badge variant="outline" className="ml-2">
            {period === "week"
              ? "Weekly"
              : period === "month"
                ? "Monthly"
                : period === "quarter"
                  ? "Quarterly"
                  : "Yearly"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Driver</TableHead>
              <TableHead>Trips</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>On-Time %</TableHead>
              <TableHead>Cancel Rate</TableHead>
              <TableHead>Earnings</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell className="font-medium">{driver.name}</TableCell>
                <TableCell>{driver.tripsCompleted}</TableCell>
                <TableCell>{renderRatingStars(driver.rating)}</TableCell>
                <TableCell>
                  <span
                    className={`${
                      driver.onTimePercentage >= 95
                        ? "text-green-600"
                        : driver.onTimePercentage >= 90
                          ? "text-yellow-600"
                          : "text-red-600"
                    }`}
                  >
                    {driver.onTimePercentage}%
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`${
                      driver.cancellationRate <= 2
                        ? "text-green-600"
                        : driver.cancellationRate <= 5
                          ? "text-yellow-600"
                          : "text-red-600"
                    }`}
                  >
                    {driver.cancellationRate}%
                  </span>
                </TableCell>
                <TableCell>${driver.earnings.toFixed(2)}</TableCell>
                <TableCell>{renderTrend(driver.trend)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DriverPerformance;
