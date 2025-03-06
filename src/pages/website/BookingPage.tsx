import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Car,
  Users,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingType, setBookingType] = useState("guest");
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    passengers: "",
    vehicleType: "",
    selectedVehicle: null,
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
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
    <div className="bg-white font-serif min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
            Book Your Ride
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience premium transportation with our easy booking process.
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
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
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-sans">
                  Enter Trip Details
                </h2>

                <Tabs
                  defaultValue={bookingType}
                  onValueChange={setBookingType}
                  className="mb-6"
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="guest" className="font-sans">
                      Continue as Guest
                    </TabsTrigger>
                    <TabsTrigger value="account" className="font-sans">
                      Create Account
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <form onSubmit={handleSubmitTripDetails}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={bookingDetails.pickupLocation}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                        placeholder="Enter pickup address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={bookingDetails.destination}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                        placeholder="Enter destination address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingDetails.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={bookingDetails.time}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Number of Passengers
                      </label>
                      <select
                        name="passengers"
                        value={bookingDetails.passengers}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
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
                    <div>
                      <label className="block text-sm font-medium mb-2 font-sans">
                        Vehicle Type (Optional)
                      </label>
                      <select
                        name="vehicleType"
                        value={bookingDetails.vehicleType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                      >
                        <option value="">Any vehicle type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="limousine">Limousine</option>
                        <option value="van">Van</option>
                      </select>
                    </div>
                  </div>

                  {bookingType === "account" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 font-sans">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={bookingDetails.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                          placeholder="Enter your full name"
                          required={bookingType === "account"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 font-sans">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingDetails.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                          placeholder="Enter your email"
                          required={bookingType === "account"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 font-sans">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingDetails.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                          placeholder="Enter your phone number"
                          required={bookingType === "account"}
                        />
                      </div>
                    </div>
                  )}

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
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center font-sans">
                Select Your Vehicle
              </h2>

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
                  Back
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && bookingDetails.selectedVehicle && (
            <Card className="max-w-3xl mx-auto bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-sans">
                  Payment Information
                </h2>

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
                      <p className="font-medium">
                        {bookingDetails.destination}
                      </p>
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
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 font-sans">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={bookingDetails.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>

                  {(bookingDetails.paymentMethod === "credit" ||
                    bookingDetails.paymentMethod === "debit") && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 font-sans">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={bookingDetails.cardNumber}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                          placeholder="1234 5678 9012 3456"
                          required={
                            bookingDetails.paymentMethod === "credit" ||
                            bookingDetails.paymentMethod === "debit"
                          }
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 font-sans">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={bookingDetails.cardExpiry}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                            placeholder="MM/YY"
                            required={
                              bookingDetails.paymentMethod === "credit" ||
                              bookingDetails.paymentMethod === "debit"
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 font-sans">
                            CVC
                          </label>
                          <input
                            type="text"
                            name="cardCvc"
                            value={bookingDetails.cardCvc}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                            placeholder="123"
                            required={
                              bookingDetails.paymentMethod === "credit" ||
                              bookingDetails.paymentMethod === "debit"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="font-sans"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#50C878] hover:bg-green-600 text-white font-sans rounded-md shadow-sm"
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
                      <p className="font-medium">
                        {bookingDetails.destination}
                      </p>
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
                  <Link to="/">
                    <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
