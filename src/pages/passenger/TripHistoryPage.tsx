import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  User,
  ArrowLeft,
  Search,
  Filter,
  Star,
} from "lucide-react";
import InvoiceDownload from "@/components/passenger/InvoiceDownload";

const TripHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock past trips
  const pastTrips = [
    {
      id: "TR-0987",
      date: "2023-06-28",
      time: "10:00",
      pickup: "123 Main St, New York, NY",
      destination: "LaGuardia Airport, New York, NY",
      vehicle: "Luxury Sedan",
      status: "completed",
      amount: 120.5,
      driver: {
        name: "Sarah Johnson",
        rating: 4.8,
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        phone: "(123) 555-7890",
      },
      receipt: "https://example.com/receipt/TR-0987",
    },
    {
      id: "TR-0986",
      date: "2023-06-20",
      time: "16:45",
      pickup: "Grand Central Station, New York, NY",
      destination: "555 Madison Ave, New York, NY",
      vehicle: "Premium Sedan",
      status: "completed",
      amount: 85.75,
      driver: {
        name: "David Wilson",
        rating: 4.7,
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        phone: "(123) 555-4321",
      },
      receipt: "https://example.com/receipt/TR-0986",
    },
    {
      id: "TR-0985",
      date: "2023-06-15",
      time: "19:30",
      pickup: "123 Main St, New York, NY",
      destination: "Brooklyn Bridge, New York, NY",
      vehicle: "Executive SUV",
      status: "completed",
      amount: 150.25,
      driver: {
        name: "Emily Davis",
        rating: 4.9,
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
        phone: "(123) 555-8765",
      },
      receipt: "https://example.com/receipt/TR-0985",
    },
    {
      id: "TR-0984",
      date: "2023-06-10",
      time: "08:15",
      pickup: "JFK Airport, New York, NY",
      destination: "Times Square, New York, NY",
      vehicle: "Luxury Sedan",
      status: "completed",
      amount: 135.0,
      driver: {
        name: "Michael Chen",
        rating: 4.9,
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        phone: "(123) 555-2468",
      },
      receipt: "https://example.com/receipt/TR-0984",
    },
    {
      id: "TR-0983",
      date: "2023-06-05",
      time: "14:00",
      pickup: "Central Park, New York, NY",
      destination: "SoHo, New York, NY",
      vehicle: "Premium Sedan",
      status: "cancelled",
      amount: 0,
      driver: null,
      receipt: null,
    },
  ];

  // Filter trips based on search term and status
  const filteredTrips = pastTrips.filter((trip) => {
    const matchesSearch =
      trip.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || trip.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

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
        {selectedTrip ? (
          <Card className="max-w-3xl mx-auto bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl font-bold font-sans">
                Trip Details
              </CardTitle>
              <Button
                variant="outline"
                onClick={() => setSelectedTrip(null)}
                className="font-sans"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Trip History
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium font-sans">
                      {selectedTrip.id}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">
                        {selectedTrip.date} at {selectedTrip.time}
                      </span>
                      <Badge className="ml-2 bg-green-100 text-green-800">
                        {selectedTrip.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="text-2xl font-bold text-[#001F3F]">
                      ${selectedTrip.amount.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1 font-sans">
                        Pickup Location
                      </h4>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="font-medium">{selectedTrip.pickup}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1 font-sans">
                        Destination
                      </h4>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="font-medium">
                          {selectedTrip.destination}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1 font-sans">
                        Vehicle
                      </h4>
                      <div className="flex items-center">
                        <Car className="h-5 w-5 text-gray-400 mr-2" />
                        <p className="font-medium">{selectedTrip.vehicle}</p>
                      </div>
                    </div>
                  </div>

                  {selectedTrip.driver && (
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <h4 className="text-sm font-medium text-gray-500 mb-3 font-sans">
                        Driver Information
                      </h4>
                      <div className="flex items-center mb-4">
                        <img
                          src={selectedTrip.driver.photo}
                          alt={selectedTrip.driver.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-medium">
                            {selectedTrip.driver.name}
                          </p>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= Math.floor(selectedTrip.driver.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="ml-1 text-sm text-gray-600">
                              {selectedTrip.driver.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-sans"
                        >
                          Contact Driver
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1 font-sans">
                      Receipt
                    </h4>
                    {selectedTrip.status === "completed" ? (
                      <InvoiceDownload
                        tripId={selectedTrip.id}
                        date={selectedTrip.date}
                        time={selectedTrip.time}
                        pickup={selectedTrip.pickup}
                        destination={selectedTrip.destination}
                        amount={selectedTrip.amount}
                        driverName={selectedTrip.driver?.name}
                        vehicleType={selectedTrip.vehicle}
                      />
                    ) : (
                      <p className="text-gray-500">No invoice available</p>
                    )}
                  </div>
                  <div>
                    <Link to={`/passenger/book?similar=${selectedTrip.id}`}>
                      <Button
                        variant="outline"
                        className="mr-2 font-sans"
                        disabled={selectedTrip.status === "cancelled"}
                      >
                        Book Similar Trip
                      </Button>
                    </Link>
                    <Button
                      className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                      disabled={selectedTrip.status === "cancelled"}
                    >
                      Rate Trip
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold font-sans">Trip History</h1>
              <Link to="/passenger/book">
                <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                  Book New Trip
                </Button>
              </Link>
            </div>

            <Card className="bg-white shadow-lg mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search trips by ID, location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <Filter className="h-4 w-4 text-gray-400" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                    >
                      <option value="all">All Statuses</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {filteredTrips.length > 0 ? (
                filteredTrips.map((trip) => (
                  <Card
                    key={trip.id}
                    className="bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedTrip(trip)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="font-medium">
                              {trip.date} at {trip.time}
                            </span>
                            <Badge
                              className={`ml-2 ${trip.status === "completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {trip.status}
                            </Badge>
                          </div>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
                              <span>{trip.pickup}</span>
                            </div>
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
                              <span>{trip.destination}</span>
                            </div>
                            {trip.driver && (
                              <div className="flex items-center">
                                <User className="h-4 w-4 text-gray-400 mr-1" />
                                <span>{trip.driver.name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#001F3F]">
                            ${trip.amount.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">{trip.id}</p>
                          <div className="mt-2 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                            {trip.status === "completed" && (
                              <InvoiceDownload
                                tripId={trip.id}
                                date={trip.date}
                                time={trip.time}
                                pickup={trip.pickup}
                                destination={trip.destination}
                                amount={trip.amount}
                                driverName={trip.driver?.name}
                                vehicleType={trip.vehicle}
                              />
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-800 font-sans"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedTrip(trip);
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-white shadow-md">
                  <CardContent className="p-8 text-center">
                    <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2 font-sans">
                      No trips found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {searchTerm || filterStatus !== "all"
                        ? "Try adjusting your search or filters"
                        : "You haven't taken any trips yet"}
                    </p>
                    {(searchTerm || filterStatus !== "all") && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setFilterStatus("all");
                        }}
                        className="mr-2 font-sans"
                      >
                        Clear Filters
                      </Button>
                    )}
                    <Link to="/passenger/book">
                      <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                        Book Your First Trip
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default TripHistoryPage;
