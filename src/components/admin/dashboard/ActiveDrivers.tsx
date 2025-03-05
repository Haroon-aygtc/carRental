import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Car } from "lucide-react";

interface DriverStatus {
  id: string;
  name: string;
  status: "available" | "on trip" | "on break";
  location: string;
  vehicle: string;
  avatarUrl?: string;
}

interface ActiveDriversProps {
  drivers?: DriverStatus[];
  onContactDriver?: (driverId: string) => void;
}

const ActiveDrivers = ({
  drivers = [
    {
      id: "1",
      name: "John Smith",
      status: "available",
      location: "Downtown",
      vehicle: "Tesla Model S (ABC-1234)",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      status: "on trip",
      location: "Airport",
      vehicle: "Mercedes E-Class (XYZ-5678)",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: "3",
      name: "Michael Chen",
      status: "on break",
      location: "Uptown",
      vehicle: "BMW 5 Series (DEF-9012)",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
  ],
  onContactDriver = (driverId) => console.log(`Contacting driver ${driverId}`),
}: ActiveDriversProps) => {
  const getStatusColor = (status: DriverStatus["status"]) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "on trip":
        return "bg-blue-500";
      case "on break":
        return "bg-amber-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusVariant = (status: DriverStatus["status"]) => {
    switch (status) {
      case "available":
        return "default";
      case "on trip":
        return "secondary";
      case "on break":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Active Drivers</CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-auto max-h-[340px]">
        <div className="space-y-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="relative mr-3">
                <Avatar>
                  <AvatarImage src={driver.avatarUrl} alt={driver.name} />
                  <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(driver.status)}`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium truncate">
                    {driver.name}
                  </h4>
                  <Badge
                    variant={getStatusVariant(driver.status)}
                    className="ml-2"
                  >
                    {driver.status.replace("-", " ")}
                  </Badge>
                </div>

                <div className="text-xs text-gray-500 flex items-center mb-1">
                  <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{driver.location}</span>
                </div>

                <div className="text-xs text-gray-500 flex items-center">
                  <Car className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{driver.vehicle}</span>
                </div>
              </div>

              <Button
                size="sm"
                variant="ghost"
                className="ml-2 flex-shrink-0"
                onClick={() => onContactDriver(driver.id)}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActiveDrivers;
