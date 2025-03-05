import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DriverPerformance from "@/components/admin/drivers/DriverPerformance";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TrackPerformance = () => {
  const [period, setPeriod] = useState("month");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Driver Performance Tracking</h2>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Weekly</SelectItem>
            <SelectItem value="month">Monthly</SelectItem>
            <SelectItem value="quarter">Quarterly</SelectItem>
            <SelectItem value="year">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DriverPerformance period={period} />

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Top Performers</h3>
              <p className="text-gray-600">
                Sarah Johnson and John Smith have the highest customer ratings
                and on-time percentages this {period}.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Areas for Improvement</h3>
              <p className="text-gray-600">
                Michael Chen has a slightly higher cancellation rate than
                average. Consider providing additional training or support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Recommendations</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Recognize top performers with incentive bonuses</li>
                <li>
                  Schedule refresher training for drivers with lower metrics
                </li>
                <li>
                  Review route optimization for drivers with lower on-time
                  percentages
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackPerformance;
