import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  User,
  Phone,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import RealTimeMap from "@/components/passenger/RealTimeMap";

const TrackRidePage = () => {
  // Mock active trip
  const [activeTrip, setActiveTrip] = useState({
    id: "TR-1000",
    date: "2023-07-10", // Today's date in a real app
    time: "13:45",
    pickup: "123 Main St, New York, NY",
    destination: "Central Park, New York, NY",
    vehicle: "Luxury Sedan",
    status: "in-progress",
    driver: {
      name: "Robert Wilson",
      rating: 4.8,
      phone: "(123) 555-4321",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
      licensePlate: "ABC-1234",
      vehicleModel: "Tesla Model S",
      vehicleColor: "Black",
    },
    eta: "10 minutes",
    currentLocation: "5th Avenue & 42nd Street",
  });

  // This effect is now handled by the RealTimeMap component

  return (
    <div className="bg-[#F7F7F7] min-h-screen font-serif">
      <header className="bg-[#001F3F] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-gray-200">
              <span className="text-xl font-bold font-sans">TMS</span>
              <span className="ml-2 text-xl font-sans">Passenger Portal</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/passenger/dashboard">
              <Button variant="ghost" size="sm" className="text-white">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold font-sans">Track Your Ride</h1>
            <Badge
              className={`${activeTrip.status === "in-progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}
            >
              {activeTrip.status === "in-progress"
                ? "In Progress"
                : "Driver Arrived"}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map Section */}
            <div className="md:col-span-2">
              <Card className="bg-white shadow-lg h-full">
                <CardContent className="p-0 h-full">
                  <RealTimeMap
                    pickupLocation={activeTrip.pickup}
                    destination={activeTrip.destination}
                    driverLocation={activeTrip.currentLocation}
                    eta={activeTrip.eta}
                    onLocationUpdate={(newLocation, newEta) => {
                      setActiveTrip((prev) => ({
                        ...prev,
                        currentLocation: newLocation,
                        eta: newEta,
                        status:
                          newEta === "Arrived" ? "arrived" : "in-progress",
                      }));
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Trip Info Section */}
            <div>
              <Card className="bg-white shadow-lg mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-sans">
                    Trip Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Pickup</p>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
                        <p>{activeTrip.pickup}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Destination</p>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
                        <p>{activeTrip.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <p>
                        {activeTrip.date} at {activeTrip.time}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 text-gray-400 mr-1" />
                      <p>{activeTrip.vehicle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-sans">
                    Driver Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <img
                      src={activeTrip.driver.photo}
                      alt={activeTrip.driver.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{activeTrip.driver.name}</p>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-600">
                          Rating: {activeTrip.driver.rating}★
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 text-gray-400 mr-1" />
                      <p>
                        {activeTrip.driver.vehicleModel} (
                        {activeTrip.driver.vehicleColor}) -{" "}
                        {activeTrip.driver.licensePlate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Current Location
                      </p>
                      <p className="font-medium">
                        {activeTrip.currentLocation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">ETA</p>
                      <p className="font-medium text-[#001F3F]">
                        {activeTrip.eta}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <a
                      href={`tel:${activeTrip.driver.phone}`}
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full font-sans">
                        <Phone className="h-4 w-4 mr-2" /> Call
                      </Button>
                    </a>
                    <a
                      href={`sms:${activeTrip.driver.phone}`}
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full font-sans">
                        <MessageSquare className="h-4 w-4 mr-2" /> Message
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trip Actions */}
          <Card className="bg-white shadow-lg mt-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium mb-2 font-sans">
                    Need to make changes?
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-0">
                    Contact your driver or our support team for assistance.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Link to={`/passenger/book?cancel=${activeTrip.id}`}>
                    <Button variant="outline" className="font-sans">
                      Cancel Ride
                    </Button>
                  </Link>
                  <a href="tel:+18001234567">
                    <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                      Contact Support
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TrackRidePage;
