import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, CheckCircle, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleGalleryPage = () => {
  const [vehicleType, setVehicleType] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      hourlyRate: 75,
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
      hourlyRate: 95,
    },
    {
      id: "v3",
      name: "Luxury Van",
      image:
        "https://images.unsplash.com/photo-1609520505218-7421df2a7770?w=600&q=80",
      capacity: 10,
      type: "van",
      description:
        "Comfortable van for larger groups with ample space for luggage.",
      features: [
        "Spacious seating",
        "Climate control",
        "Luggage compartment",
        "Entertainment system",
      ],
      hourlyRate: 120,
    },
    {
      id: "v4",
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
      hourlyRate: 150,
    },
    {
      id: "v5",
      name: "Premium Sedan",
      image:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
      capacity: 4,
      type: "sedan",
      description: "Elegant sedan with extra legroom and premium amenities.",
      features: [
        "Extra legroom",
        "Charging ports",
        "Bottled water",
        "Daily newspapers",
      ],
      hourlyRate: 85,
    },
    {
      id: "v6",
      name: "Luxury Coach",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
      capacity: 30,
      type: "coach",
      description: "Luxury coach for large groups and corporate events.",
      features: [
        "Reclining seats",
        "Onboard restroom",
        "Entertainment system",
        "Luggage storage",
      ],
      hourlyRate: 250,
    },
  ];

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesType = vehicleType === "all" || vehicle.type === vehicleType;
    const matchesCapacity =
      capacity === "all" ||
      (capacity === "1-4" && vehicle.capacity <= 4) ||
      (capacity === "5-10" && vehicle.capacity > 4 && vehicle.capacity <= 10) ||
      (capacity === "10+" && vehicle.capacity > 10);
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesCapacity && matchesSearch;
  });

  return (
    <div className="bg-white font-serif min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
            Our Vehicle Fleet
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our diverse range of premium vehicles, each maintained to
            the highest standards of comfort and luxury.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#001F3F]" />
              <h2 className="text-lg font-medium font-sans">Filter Vehicles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
              <div>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="all">All Vehicle Types</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                  <option value="limousine">Limousine</option>
                  <option value="coach">Coach</option>
                </select>
              </div>

              <div>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  <option value="all">Any Capacity</option>
                  <option value="1-4">1-4 Passengers</option>
                  <option value="5-10">5-10 Passengers</option>
                  <option value="10+">10+ Passengers</option>
                </select>
              </div>

              <div className="relative">
                <Input
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-56 overflow-hidden">
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
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Capacity: {vehicle.capacity} passengers</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2 font-sans">
                        Features:
                      </p>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {vehicle.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-3 w-3 text-[#50C878] mr-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="text-[#001F3F] font-bold font-sans">
                        ${vehicle.hourlyRate}/hour
                      </div>
                      <Link to="/booking">
                        <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2 font-sans">
                No vehicles match your filters
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setVehicleType("all");
                  setCapacity("all");
                  setSearchTerm("");
                }}
                className="font-sans"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose from our premium fleet and experience luxury transportation
            at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-amber-600 text-[#333333] font-sans rounded-md shadow-sm"
              >
                Book Now
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-sans rounded-md"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleGalleryPage;
