import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface InvoiceDownloadProps {
  tripId: string;
  date: string;
  time: string;
  pickup: string;
  destination: string;
  amount: number;
  driverName?: string;
  vehicleType: string;
}

const InvoiceDownload = ({
  tripId,
  date,
  time,
  pickup,
  destination,
  amount,
  driverName,
  vehicleType,
}: InvoiceDownloadProps) => {
  const handleDownload = () => {
    // In a real app, this would generate a PDF or fetch it from the server
    // For demo purposes, we'll create a simple text representation
    const invoiceContent = `
      TRANSPORTATION MANAGEMENT SYSTEM
      INVOICE
      ----------------------------------------
      Trip ID: ${tripId}
      Date: ${date}
      Time: ${time}
      
      Pickup Location: ${pickup}
      Destination: ${destination}
      Vehicle Type: ${vehicleType}
      ${driverName ? `Driver: ${driverName}` : ""}
      
      Amount: $${amount.toFixed(2)}
      Tax (10%): $${(amount * 0.1).toFixed(2)}
      ----------------------------------------
      Total: $${(amount * 1.1).toFixed(2)}
      
      Thank you for choosing our service!
    `;

    // Create a Blob from the text
    const blob = new Blob([invoiceContent], { type: "text/plain" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice-${tripId}.txt`;

    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="font-sans"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4 mr-2" /> Download Invoice
    </Button>
  );
};

export default InvoiceDownload;
