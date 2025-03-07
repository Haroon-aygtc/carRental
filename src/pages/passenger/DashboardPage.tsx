import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  User,
  LogOut,
  Settings,
  CreditCard,
  FileText,
  Plus,
  ChevronRight,
} from "lucide-react";
import ETADisplay from "@/components/passenger/ETADisplay";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock user data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
    memberSince: "January 2023",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  };

  // Mock upcoming trips
  const upcomingTrips = [
    {
      id: "TR-1001",
      date: "2023-07-15",
      time: "14:30",
      pickup: "123 Main St, New York, NY",
      destination: "JFK Airport, New York, NY",
      vehicle: "Luxury Sedan",
      status: "confirmed",
      driver: {
        name: "Michael Chen",
        rating: 4.9,
        phone: "(123) 555-7890",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
    },
    {
      id: "TR-1002",
      date: "2023-07-20",
      time: "09:15",
      pickup: "456 Park Ave, New York, NY",
      destination: "Newark Airport, Newark, NJ",
      vehicle: "Executive SUV",
      status: "confirmed",
      driver: null, // Not assigned yet
    },
  ];

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
      },
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
      },
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
      },
    },
  ];

  // Mock active trip (if any)
  const activeTrip = {
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
  };

  // Mock payment methods
  const paymentMethods = [
    {
      id: "pm1",
      type: "credit",
      brand: "Visa",
      last4: "4242",
      expiry: "04/25",
      isDefault: true,
    },
    {
      id: "pm2",
      type: "credit",
      brand: "Mastercard",
      last4: "5555",
      expiry: "08/24",
      isDefault: false,
    },
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen font-serif">
      <header className="bg-[#001F3F] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold font-sans">TMS</span>
            <span className="ml-2 text-xl font-sans">Passenger Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-medium">{user.name}</span>
            </div>
            <Link to="/passenger/login">
              <Button variant="ghost" size="sm" className="text-white">
                <LogOut className="h-4 w-4 mr-1" /> Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card className="bg-white">
              <CardContent className="p-4">
                <div className="flex flex-col items-center py-4">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h2 className="text-xl font-bold font-sans">{user.name}</h2>
                  <p className="text-gray-500">{user.email}</p>
                  <p className="text-gray-500">{user.phone}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Member since {user.memberSince}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-0">
                <Tabs
                  defaultValue={activeTab}
                  orientation="vertical"
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="flex flex-col h-auto items-stretch bg-transparent border-r-0">
                    <TabsTrigger
                      value="dashboard"
                      className="justify-start py-3 px-4 font-sans"
                    >
                      <Calendar className="h-4 w-4 mr-2" /> Dashboard
                    </TabsTrigger>
                    <TabsTrigger
                      value="book"
                      className="justify-start py-3 px-4 font-sans"
                    >
                      <Car className="h-4 w-4 mr-2" /> Book a Ride
                    </TabsTrigger>
                    <TabsTrigger
                      value="trips"
                      className="justify-start py-3 px-4 font-sans"
                    >
                      <FileText className="h-4 w-4 mr-2" /> Trip History
                    </TabsTrigger>
                    <TabsTrigger
                      value="payment"
                      className="justify-start py-3 px-4 font-sans"
                    >
                      <CreditCard className="h-4 w-4 mr-2" /> Payment Methods
                    </TabsTrigger>
                    <TabsTrigger
                      value="profile"
                      className="justify-start py-3 px-4 font-sans"
                    >
                      <User className="h-4 w-4 mr-2" /> Profile Settings
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Active Trip Card (if any) */}
                {activeTrip && (
                  <Card className="bg-white border-l-4 border-blue-500">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-sans">
                          Active Trip
                        </CardTitle>
                        <Badge className="bg-blue-100 text-blue-800">
                          In Progress
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Pickup</p>
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
                              <p>{activeTrip.pickup}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Destination
                            </p>
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
                          <div className="flex items-center">
                            <User className="h-4 w-4 text-gray-400 mr-1" />
                            <div className="flex items-center">
                              <img
                                src={activeTrip.driver.photo}
                                alt={activeTrip.driver.name}
                                className="w-6 h-6 rounded-full mr-2"
                              />
                              <p>
                                {activeTrip.driver.name} (
                                {activeTrip.driver.rating}★)
                              </p>
                            </div>
                          </div>
                          <ETADisplay
                            initialEta={activeTrip.eta}
                            tripId={activeTrip.id}
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <Button variant="outline" className="font-sans">
                          Contact Driver
                        </Button>
                        <Link to="/passenger/track">
                          <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                            Track Ride
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Quick Actions */}
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-sans">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link to="/passenger/book">
                        <Button className="w-full bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm h-auto py-6">
                          <div className="flex flex-col items-center">
                            <Car className="h-6 w-6 mb-2" />
                            <span>Book a Ride</span>
                          </div>
                        </Button>
                      </Link>
                      <Link to="/passenger/trips">
                        <Button
                          variant="outline"
                          className="w-full h-auto py-6 font-sans"
                        >
                          <div className="flex flex-col items-center">
                            <FileText className="h-6 w-6 mb-2" />
                            <span>View Trip History</span>
                          </div>
                        </Button>
                      </Link>
                      <Link to="/passenger/profile">
                        <Button
                          variant="outline"
                          className="w-full h-auto py-6 font-sans"
                        >
                          <div className="flex flex-col items-center">
                            <Settings className="h-6 w-6 mb-2" />
                            <span>Update Profile</span>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Trips */}
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-sans">
                      Upcoming Trips
                    </CardTitle>
                    <Link to="/passenger/book">
                      <Button variant="outline" size="sm" className="font-sans">
                        <Plus className="h-4 w-4 mr-1" /> Book New Trip
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {upcomingTrips.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingTrips.map((trip) => (
                          <div
                            key={trip.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center mb-2">
                                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                  <span className="font-medium">
                                    {trip.date} at {trip.time}
                                  </span>
                                  <Badge className="ml-2 bg-green-100 text-green-800">
                                    Confirmed
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
                                  <div className="flex items-center">
                                    <Car className="h-4 w-4 text-gray-400 mr-1" />
                                    <span>{trip.vehicle}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">
                                  Booking ID
                                </p>
                                <p className="font-medium">{trip.id}</p>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="mr-2 font-sans"
                              >
                                Modify
                              </Button>
                              <Button
                                size="sm"
                                className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray-500 mb-4">
                          You don't have any upcoming trips
                        </p>
                        <Link to="/passenger/book">
                          <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                            Book a Ride
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recent Trips */}
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-sans">
                      Recent Trips
                    </CardTitle>
                    <Link to="/passenger/trips">
                      <Button variant="ghost" size="sm" className="font-sans">
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pastTrips.slice(0, 2).map((trip) => (
                        <div
                          key={trip.id}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-2">
                                <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                <span className="font-medium">
                                  {trip.date} at {trip.time}
                                </span>
                                <Badge className="ml-2 bg-gray-100 text-gray-800">
                                  Completed
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
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-[#001F3F]">
                                ${trip.amount.toFixed(2)}
                              </p>
                              <p className="text-sm text-gray-500">{trip.id}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2 font-sans"
                            >
                              Receipt
                            </Button>
                            <Button
                              size="sm"
                              className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "book" && (
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">
                    Book a Ride
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Fill in the details below to book your ride
                  </p>
                  <Link to="/passenger/book">
                    <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                      Continue to Booking
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {activeTab === "trips" && (
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">
                    Trip History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastTrips.map((trip) => (
                      <div
                        key={trip.id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center mb-2">
                              <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="font-medium">
                                {trip.date} at {trip.time}
                              </span>
                              <Badge className="ml-2 bg-gray-100 text-gray-800">
                                Completed
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
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#001F3F]">
                              ${trip.amount.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">{trip.id}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="mr-2 font-sans"
                          >
                            Receipt
                          </Button>
                          <Button
                            size="sm"
                            className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
