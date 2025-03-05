import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  BarChart2,
  PieChart,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GenerateReports = () => {
  const [reportType, setReportType] = useState("bookings");
  const [reportPeriod, setReportPeriod] = useState("month");
  const [reportFormat, setReportFormat] = useState("pdf");

  const handleGenerateReport = () => {
    console.log(
      `Generating ${reportType} report for ${reportPeriod} in ${reportFormat} format`,
    );
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Generate Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bookings">Bookings Report</SelectItem>
                  <SelectItem value="revenue">Revenue Report</SelectItem>
                  <SelectItem value="expenses">Expenses Report</SelectItem>
                  <SelectItem value="drivers">Driver Performance</SelectItem>
                  <SelectItem value="vehicles">Vehicle Usage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <Select value={reportFormat} onValueChange={setReportFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleGenerateReport}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Report Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="summary">Summary</TabsTrigger>
            </TabsList>

            <TabsContent value="chart" className="mt-6">
              <div className="h-80 flex items-center justify-center border rounded-md">
                <div className="text-center text-gray-500">
                  <BarChart2 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Chart visualization for {reportType} would appear here</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="table" className="mt-6">
              <div className="h-80 flex items-center justify-center border rounded-md">
                <div className="text-center text-gray-500">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Tabular data for {reportType} would appear here</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summary" className="mt-6">
              <div className="h-80 flex items-center justify-center border rounded-md">
                <div className="text-center text-gray-500">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Summary statistics for {reportType} would appear here</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Monthly Bookings Report",
                date: "2023-06-01",
                format: "PDF",
              },
              {
                name: "Q2 Revenue Analysis",
                date: "2023-05-15",
                format: "Excel",
              },
              {
                name: "Driver Performance Summary",
                date: "2023-05-01",
                format: "PDF",
              },
              {
                name: "Vehicle Maintenance Report",
                date: "2023-04-15",
                format: "CSV",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border rounded-md"
              >
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-gray-500">
                    Generated on {report.date}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  {report.format}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateReports;
