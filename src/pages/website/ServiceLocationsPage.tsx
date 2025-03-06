import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceLocationsPage = () => {
  const serviceAreas = [
    {
      city: "New York City",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
      description:
        "Luxury transportation throughout Manhattan, Brooklyn, Queens, Bronx, and Staten Island.",
      services: [
        "Airport transfers",
        "Corporate travel",
        "Special events",
        "Hourly charters",
      ],
      address: "123 Broadway, New York, NY 10007",
      phone: "(212) 555-1234",
      email: "nyc@tms-example.com",
    },
    {
      city: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
      description:
        "Premium transportation services across Los Angeles County and Orange County.",
      services: [
        "Airport transfers",
        "Celebrity services",
        "Film production",
        "Special events",
      ],
      address: "456 Hollywood Blvd, Los Angeles, CA 90028",
      phone: "(310) 555-5678",
      email: "la@tms-example.com",
    },
    {
      city: "Chicago",
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80",
      description:
        "Reliable luxury transportation throughout Chicago and surrounding suburbs.",
      services: [
        "Airport transfers",
        "Corporate travel",
        "City tours",
        "Special events",
      ],
      address: "789 Michigan Ave, Chicago, IL 60611",
      phone: "(312) 555-9012",
      email: "chicago@tms-example.com",
    },
    {
      city: "Miami",
      image:
        "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&q=80",
      description:
        "Luxury transportation across Miami-Dade County, including Miami Beach and South Beach.",
      services: [
        "Airport transfers",
        "Nightlife transportation",
        "Yacht transfers",
        "Special events",
      ],
      address: "101 Ocean Drive, Miami, FL 33139",
      phone: "(305) 555-3456",
      email: "miami@tms-example.com",
    },
    {
      city: "San Francisco",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      description:
        "Premium transportation throughout the Bay Area, including Silicon Valley and Wine Country.",
      services: [
        "Airport transfers",
        "Corporate travel",
        "Wine tours",
        "Tech events",
      ],
      address: "222 Market St, San Francisco, CA 94105",
      phone: "(415) 555-7890",
      email: "sf@tms-example.com",
    },
    {
      city: "Boston",
      image:
        "https://images.unsplash.com/photo-1501979376754-2ff867a4f659?w=800&q=80",
      description:
        "Reliable luxury transportation in Boston and throughout New England.",
      services: [
        "Airport transfers",
        "University services",
        "Corporate travel",
        "Historical tours",
      ],
      address: "333 Boylston St, Boston, MA 02116",
      phone: "(617) 555-2345",
      email: "boston@tms-example.com",
    },
    {
      city: "Washington D.C.",
      image:
        "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800&q=80",
      description:
        "Premium transportation in the nation's capital and surrounding areas.",
      services: [
        "Airport transfers",
        "Government services",
        "Embassy transportation",
        "Monument tours",
      ],
      address: "444 Pennsylvania Ave, Washington, DC 20004",
      phone: "(202) 555-6789",
      email: "dc@tms-example.com",
    },
    {
      city: "Las Vegas",
      image:
        "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80",
      description:
        "Luxury transportation on the Strip and throughout Las Vegas Valley.",
      services: [
        "Airport transfers",
        "Casino transportation",
        "Wedding services",
        "VIP nightlife",
      ],
      address: "555 Las Vegas Blvd, Las Vegas, NV 89109",
      phone: "(702) 555-0123",
      email: "vegas@tms-example.com",
    },
  ];

  return (
    <div className="bg-white font-serif min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#001F3F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
            Our Service Locations
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide premium transportation services in major cities across
            the United States.
          </p>
        </div>
      </section>

      {/* Map Section - This would be an interactive map in a real implementation */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[500px] bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-16 w-16 text-[#001F3F] mx-auto mb-4" />
                <p className="text-gray-600 text-xl">
                  Interactive service area map would be displayed here
                </p>
                <p className="text-gray-500">
                  Showing all service locations across the United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-sans">
            Cities We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.city}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-[#001F3F] mr-2" />
                    <h3 className="text-xl font-bold font-sans">{area.city}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{area.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2 font-sans">
                      Services Available:
                    </p>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {area.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-[#50C878] mr-1 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-medium font-sans">Address:</span>{" "}
                      {area.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>{area.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-3 w-3 mr-1" />
                      <span>{area.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience premium transportation in any of our service locations.
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
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-sans rounded-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLocationsPage;
