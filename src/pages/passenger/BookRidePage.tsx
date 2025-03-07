import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Car,
  Users,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const BookRidePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    passengers: "",
    vehicleType: "",
    selectedVehicle: null,
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleVehicleSelect = (vehicle) => {
    setBookingDetails({
      ...bookingDetails,
      selectedVehicle: vehicle,
      vehicleType: vehicle.type,
    });
    setCurrentStep(3);
  };

  const handleSubmitTripDetails = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setCurrentStep(4);
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

  // Mock vehicles
  const vehicles = [
    {
      id: "v1",
      name: "Luxury Sedan",
      image:
        "https://images.unsplash.com/photo-1549399542-7e8f2e928464?w=600&q=80",
      capacity: 3,
      type: "sedan",
      description:
        "Premium sedan with leather interior and complimentary refreshments.",
      features: [
        "Leather seats",
        "WiFi",
        "Refreshments",
        "Professional chauffeur",
      ],
      price: 120,
    },
    {
      id: "v2",
      name: "Executive SUV",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
      capacity: 6,
      type: "suv",
      description: "Spacious SUV perfect for small groups and extra luggage.",
      features: [
        "Spacious interior",
        "Extra luggage space",
        "Privacy windows",
        "Premium sound system",
      ],
      price: 180,
    },
    {
      id: "v3",
      name: "Stretch Limousine",
      image:
        "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&q=80",
      capacity: 8,
      type: "limousine",
      description:
        "Classic stretch limousine for special occasions and luxury travel.",
      features: [
        "Bar service",
        "Ambient lighting",
        "Premium entertainment",
        "Red carpet service",
      ],
      price: 250,
    },
  ];

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
        <h1 className="text-2xl font-bold mb-6 font-sans">Book a Ride</h1>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div
              className={`flex flex-col items-center ${currentStep >= 1 ? "text-[#001F3F]" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? "bg-[#001F3F] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm font-sans">Trip Details</span>
            </div>

            <div
              className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? "bg-[#001F3F]" : "bg-gray-200"}`}
            ></div>

            <div
              className={`flex flex-col items-center ${currentStep >= 2 ? "text-[#001F3F]" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? "bg-[#001F3F] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                <Car className="h-5 w-5" />
              </div>
              <span className="text-sm font-sans">Select Vehicle</span>
            </div>

            <div
              className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? "bg-[#001F3F]" : "bg-gray-200"}`}
            ></div>

            <div
              className={`flex flex-col items-center ${currentStep >= 3 ? "text-[#001F3F]" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? "bg-[#001F3F] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="text-sm font-sans">Payment</span>
            </div>

            <div
              className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? "bg-[#001F3F]" : "bg-gray-200"}`}
            ></div>

            <div
              className={`flex flex-col items-center ${currentStep >= 4 ? "text-[#001F3F]" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 4 ? "bg-[#001F3F] text-white" : "bg-gray-200 text-gray-500"}`}
              >
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="text-sm font-sans">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Step 1: Trip Details */}
        {currentStep === 1 && (
          <Card className="max-w-3xl mx-auto bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-sans">
                Enter Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTripDetails}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation" className="font-sans">
                      Pickup Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="pickupLocation"
                        name="pickupLocation"
                        value={bookingDetails.pickupLocation}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter pickup address"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="font-sans">
                      Destination
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="destination"
                        name="destination"
                        value={bookingDetails.destination}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter destination address"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-sans">
                      Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={bookingDetails.date}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="font-sans">
                      Time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={bookingDetails.time}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers" className="font-sans">
                      Number of Passengers
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <select
                        id="passengers"
                        name="passengers"
                        value={bookingDetails.passengers}
                        onChange={handleInputChange}
                        className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8+</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleType" className="font-sans">
                      Vehicle Type (Optional)
                    </Label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={bookingDetails.vehicleType}
                        onChange={handleInputChange}
                        className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Any vehicle type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="limousine">Limousine</option>
                        <option value="van">Van</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    type="submit"
                    className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Select Vehicle */}
        {currentStep === 2 && (
          <Card className="max-w-4xl mx-auto bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-sans">
                Select Your Vehicle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles
                  .filter(
                    (v) =>
                      !bookingDetails.vehicleType ||
                      v.type === bookingDetails.vehicleType,
                  )
                  .filter(
                    (v) =>
                      !bookingDetails.passengers ||
                      v.capacity >= parseInt(bookingDetails.passengers),
                  )
                  .map((vehicle) => (
                    <Card
                      key={vehicle.id}
                      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                      onClick={() => handleVehicleSelect(vehicle)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 font-sans">
                          {vehicle.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {vehicle.description}
                        </p>

                        <div className="flex items-center text-gray-600 mb-2">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Capacity: {vehicle.capacity} passengers</span>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="text-[#001F3F] font-bold font-sans">
                            ${vehicle.price.toFixed(2)}
                          </div>
                          <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                            Select
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="font-sans"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && bookingDetails.selectedVehicle && (
          <Card className="max-w-3xl mx-auto bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-sans">
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium mb-3 font-sans">
                  Booking Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Pickup Location
                    </p>
                    <p className="font-medium">
                      {bookingDetails.pickupLocation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Destination</p>
                    <p className="font-medium">{bookingDetails.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                    <p className="font-medium">
                      {bookingDetails.date} at {bookingDetails.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Passengers</p>
                    <p className="font-medium">{bookingDetails.passengers}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">
                      Selected Vehicle
                    </p>
                    <p className="font-medium">
                      {bookingDetails.selectedVehicle.name}
                    </p>
                  </div>
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Amount:</span>
                    <span className="text-xl font-bold text-[#001F3F]">
                      ${bookingDetails.selectedVehicle.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmitPayment}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="paymentMethod" className="font-sans">
                      Select Payment Method
                    </Label>
                    <div className="mt-2 space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`border rounded-lg p-4 cursor-pointer ${bookingDetails.paymentMethod === method.id ? "border-blue-500 bg-blue-50" : ""}`}
                          onClick={() =>
                            setBookingDetails({
                              ...bookingDetails,
                              paymentMethod: method.id,
                            })
                          }
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id={method.id}
                              name="paymentMethod"
                              value={method.id}
                              checked={
                                bookingDetails.paymentMethod === method.id
                              }
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            <div className="flex items-center">
                              <div className="mr-3">
                                {method.brand === "Visa" ? (
                                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                                    VISA
                                  </div>
                                ) : (
                                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                    MC
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="font-medium">
                                  {method.brand} •••• {method.last4}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Expires {method.expiry}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-2">
                        <Link
                          to="/passenger/payment-methods"
                          className="text-blue-600 hover:text-blue-800 text-sm font-sans"
                        >
                          + Add a new payment method
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    className="font-sans"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#50C878] hover:bg-green-600 text-white font-sans rounded-md shadow-sm"
                    disabled={!bookingDetails.paymentMethod}
                  >
                    Complete Booking
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <Card className="max-w-3xl mx-auto bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-[#50C878]" />
              </div>

              <h2 className="text-2xl font-bold mb-4 font-sans">
                Booking Confirmed!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your booking has been successfully confirmed. A confirmation
                email has been sent to your email address.
              </p>

              <div className="bg-gray-50 p-6 rounded-md text-left mb-8">
                <h3 className="text-lg font-medium mb-4 font-sans">
                  Booking Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Booking Reference
                    </p>
                    <p className="font-medium">
                      TMS-{Math.floor(100000 + Math.random() * 900000)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                    <p className="font-medium">
                      {bookingDetails.date} at {bookingDetails.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Pickup Location
                    </p>
                    <p className="font-medium">
                      {bookingDetails.pickupLocation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Destination</p>
                    <p className="font-medium">{bookingDetails.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Vehicle</p>
                    <p className="font-medium">
                      {bookingDetails.selectedVehicle?.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                    <p className="font-medium">
                      ${bookingDetails.selectedVehicle?.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/passenger/dashboard">
                  <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default BookRidePage;
