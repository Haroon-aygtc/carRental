import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Settings,
  Table,
  Check,
  Plus,
  X,
} from "lucide-react";
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
                <div className="border rounded-md p-4 space-y-4">
                  <div>
                    <Label className="mb-2 block">Selected Columns</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedColumns.map((column) => (
                        <div
                          key={column}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md flex items-center text-sm"
                        >
                          {column}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0 ml-1"
                            onClick={() => removeColumn(column)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block">Available Columns</Label>
                    <div className="flex flex-wrap gap-2">
                      {availableColumns.map((column) => (
                        <div
                          key={column}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md flex items-center text-sm cursor-pointer hover:bg-gray-200"
                          onClick={() => addColumn(column)}
                        >
                          {column}
                          <Plus className="h-3 w-3 ml-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md p-4 overflow-auto">
            <table className="min-w-full border-collapse">
              {includeHeaders && (
                <thead>
                  <tr className="bg-gray-100">
                    {selectedColumns.map((column) => (
                      <th key={column} className="border p-2 text-left">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    {selectedColumns.map((column) => (
                      <td key={`${row}-${column}`} className="border p-2">
                        {column === "Date"
                          ? `2023-06-${row < 10 ? `0${row}` : row}`
                          : column === "Amount"
                            ? `$${(Math.random() * 1000 + 500).toFixed(2)}`
                            : `Sample ${column} ${row}`}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">
          <Table className="mr-2 h-4 w-4" />
          Preview Full Excel
        </Button>
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export Excel
        </Button>
      </div>
    </div>
  );
};

export default ExportAsExcel;
