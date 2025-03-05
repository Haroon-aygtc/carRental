import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Settings, Eye, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExportAsPDF = () => {
  const [reportTitle, setReportTitle] = useState("Monthly Booking Report");
  const [includeHeader, setIncludeHeader] = useState(true);
  const [includeFooter, setIncludeFooter] = useState(true);
  const [includeLogo, setIncludeLogo] = useState(true);
  const [includeCharts, setIncludeCharts] = useState(true);
  const [includeTableData, setIncludeTableData] = useState(true);
  const [orientation, setOrientation] = useState("portrait");

  const handleExport = () => {
    console.log("Exporting PDF with settings:", {
      reportTitle,
      includeHeader,
      includeFooter,
      includeLogo,
      includeCharts,
      includeTableData,
      orientation,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Export as PDF</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reportTitle">Report Title</Label>
              <Input
                id="reportTitle"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                placeholder="Enter report title"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Content Options</h3>

                <div className="flex items-center justify-between">
                  <Label htmlFor="includeHeader">Include Header</Label>
                  <Switch
                    id="includeHeader"
                    checked={includeHeader}
                    onCheckedChange={setIncludeHeader}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="includeFooter">Include Footer</Label>
                  <Switch
                    id="includeFooter"
                    checked={includeFooter}
                    onCheckedChange={setIncludeFooter}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="includeLogo">Include Company Logo</Label>
                  <Switch
                    id="includeLogo"
                    checked={includeLogo}
                    onCheckedChange={setIncludeLogo}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Options</h3>

                <div className="flex items-center justify-between">
                  <Label htmlFor="includeCharts">Include Charts</Label>
                  <Switch
                    id="includeCharts"
                    checked={includeCharts}
                    onCheckedChange={setIncludeCharts}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="includeTableData">Include Table Data</Label>
                  <Switch
                    id="includeTableData"
                    checked={includeTableData}
                    onCheckedChange={setIncludeTableData}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Page Orientation</Label>
                  <div className="flex space-x-2">
                    <Button
                      variant={
                        orientation === "portrait" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setOrientation("portrait")}
                    >
                      Portrait
                    </Button>
                    <Button
                      variant={
                        orientation === "landscape" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setOrientation("landscape")}
                    >
                      Landscape
                    </Button>
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
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="settings">Advanced Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-6">
              <div className="border rounded-md p-4 bg-gray-50 aspect-[3/4] max-h-[500px] overflow-auto">
                {includeLogo && (
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">LOGO</span>
                    </div>
                    <div className="text-right text-gray-500 text-sm">
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                )}

                {includeHeader && (
                  <div className="border-b pb-2 mb-4">
                    <h2 className="text-xl font-bold text-center">
                      {reportTitle}
                    </h2>
                    <p className="text-sm text-gray-500 text-center">
                      Generated on {new Date().toLocaleDateString()}
                    </p>
                  </div>
                )}

                {includeCharts && (
                  <div className="mb-4">
                    <h3 className="text-md font-medium mb-2">Charts</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-400">Chart 1</span>
                      </div>
                      <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-400">Chart 2</span>
                      </div>
                    </div>
                  </div>
                )}

                {includeTableData && (
                  <div className="mb-4">
                    <h3 className="text-md font-medium mb-2">Data Table</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2 text-left">Date</th>
                          <th className="border p-2 text-left">Bookings</th>
                          <th className="border p-2 text-left">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <tr key={i}>
                            <td className="border p-2">
                              2023-06-{i < 10 ? `0${i}` : i}
                            </td>
                            <td className="border p-2">
                              {Math.floor(Math.random() * 20) + 10}
                            </td>
                            <td className="border p-2">
                              ${(Math.random() * 1000 + 500).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {includeFooter && (
                  <div className="border-t pt-2 mt-4 text-center text-xs text-gray-500">
                    <p>Transportation Management System - Confidential</p>
                    <p>Page 1 of 1</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paperSize">Paper Size</Label>
                    <select
                      id="paperSize"
                      className="w-full p-2 border rounded mt-1"
                    >
                      <option>A4</option>
                      <option>Letter</option>
                      <option>Legal</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="margins">Margins</Label>
                    <select
                      id="margins"
                      className="w-full p-2 border rounded mt-1"
                    >
                      <option>Normal (1 inch)</option>
                      <option>Narrow (0.5 inch)</option>
                      <option>Wide (1.5 inch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="headerText">Custom Header Text</Label>
                  <Input
                    id="headerText"
                    placeholder="Enter custom header text"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="footerText">Custom Footer Text</Label>
                  <Input
                    id="footerText"
                    placeholder="Enter custom footer text"
                    className="mt-1"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Preview Full PDF
        </Button>
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export PDF
        </Button>
      </div>
    </div>
  );
};

export default ExportAsPDF;
