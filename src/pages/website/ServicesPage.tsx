import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Car,
  Calendar,
  Star,
  Users,
  Briefcase,
  Gift,
  MapPin,
  Check,
  Clock,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "airport",
      title: "Airport Transfers",
      description:
        "Reliable and punctual airport pickup and drop-off services.",
      icon: <Car className="h-8 w-8 text-blue-600" />,
      features: [
        "Flight tracking to adjust for delays",
        "Meet and greet service with name sign",
        "Assistance with luggage",
        "Complimentary waiting time",
        "Fixed rates with no hidden fees",
      ],
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      id: "corporate",
      title: "Corporate Travel",
      description:
        "Professional transportation solutions for business executives.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      features: [
        "Corporate accounts with monthly billing",
        "Professional chauffeurs in business attire",
        "Wi-Fi equipped vehicles",
        "Confidentiality guaranteed",
        "24/7 reservation system",
      ],
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    },
    {
      id: "events",
      title: "Special Events",
      description:
        "Luxury transportation for weddings, parties, and special occasions.",
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      features: [
        "Decorated vehicles for weddings",
        "Red carpet service",
        "Champagne and refreshments",
        "Coordination with event planners",
        "Group transportation options",
      ],
      image:
        "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
    },
    {
      id: "hourly",
      title: "Hourly Charters",
      description:
        "Flexible transportation for meetings, sightseeing, or shopping.",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      features: [
        "Minimum 3-hour bookings",
        "Dedicated chauffeur at your disposal",
        "Multiple stops as needed",
        "Customizable itineraries",
        "No rush between destinations",
      ],
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      id: "group",
      title: "Group Transportation",
      description:
        "Efficient transportation for corporate groups, tours, or large parties.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      features: [
        "Vehicles for groups of all sizes",
        "Coordination for multiple pickup locations",
        "On-site transportation coordinators",
        "Custom branding options",
        "Group discounts available",
      ],
      image:
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800&q=80",
    },
    {
      id: "tours",
      title: "City Tours",
      description: "Guided tours of the city with knowledgeable chauffeurs.",
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      features: [
        "Customizable tour routes",
        "Knowledgeable local guides",
        "Historical and cultural information",
        "Photo stops at key attractions",
        "Refreshments included",
      ],
      image:
        "https://images.unsplash.com/photo-1496546591938-b3e0375d5c20?w=800&q=80",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience the highest level of luxury transportation tailored to
            your specific needs.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Book a Service
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={`#${service.id}`}
                    className="text-blue-700 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(3).map((service) => (
              <Card
                key={service.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={`#${service.id}`}
                    className="text-blue-700 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section id={service.id} key={service.id} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-3 mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {service.description}
                </p>
                <h3 className="text-xl font-semibold mb-4">Features:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Book {service.title}
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Our Premium Services?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your transportation needs and let us
            create the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
