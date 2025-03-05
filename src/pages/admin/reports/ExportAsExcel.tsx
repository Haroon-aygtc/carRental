import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Settings, Table, Check, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExportAsExcel = () => {
  const [worksheetName, setWorksheetName] = useState("Booking Data");
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [includeFilters, setIncludeFilters] = useState(true);
  const [includeFormulas, setIncludeFormulas] = useState(true);
  const [includeCharts, setIncludeCharts] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState([
    "Date",
    "Customer",
    "Pickup",
    "Destination",
    "Driver",
    "Vehicle",
    "Status",
    "Amount",
  ]);
  const [availableColumns, setAvailableColumns] = useState([
    "Customer Email",
    "Customer Phone",
    "Booking Time",
    "Distance",
    "Duration",
    "Payment Method",
  ]);

  const handleExport = () => {
    console.log("Exporting Excel with settings:", {
      worksheetName,
      includeHeaders,
      includeFilters,
      includeFormulas,
      includeCharts,
      selectedColumns,
    });
  };

  const addColumn = (column) => {
    setSelectedColumns([...selectedColumns, column]);
    setAvailableColumns(availableColumns.filter((c) => c !== column));
  };

  const removeColumn = (column) => {
    setAvailableColumns([...availableColumns, column]);
    setSelectedColumns(selectedColumns.filter((c) => c !== column));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Export as Excel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="worksheetName">Worksheet Name</Label>
              <Input
                id="worksheetName"
                value={worksheetName}
                onChange={(e) => setWorksheetName(e.target.value)}
                placeholder="Enter worksheet name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Excel Options</h3>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="includeHeaders">Include Column Headers</Label>
                  <Switch
                    id="includeHeaders"
                    checked={includeHeaders}
                    onCheckedChange={setIncludeHeaders}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="includeFilters">Enable Filters</Label>
                  <Switch
                    id="includeFilters"
                    checked={includeFilters}
                    onCheckedChange={setIncludeFilters}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="includeFormulas">Include Formulas</Label>
                  <Switch
                    id="includeFormulas"
                    checked={includeFormulas}
                    onCheckedChange={setIncludeFormulas}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="includeCharts">Include Charts</Label>
                  <Switch
                    id="includeCharts"
                    checked={includeCharts}
                    onCheckedChange={setIncludeCharts}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Column Selection</h3>
                <div className