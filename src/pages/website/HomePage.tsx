import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Car,
  Calendar,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-white font-serif">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e8f2e928464?w=1600&q=80"
            alt="Luxury Transportation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl font-sans">
            Premium Transportation Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience luxury, comfort, and reliability with our professional
            chauffeur services for all your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-amber-600 text-[#333333] font-sans rounded-md shadow-sm"
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-sans rounded-md"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of premium transportation solutions tailored to
              your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-[#F7F7F7] p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">
                  Airport Transfers
                </h3>
                <p className="text-gray-600 mb-4">
                  Reliable and punctual airport pickup and drop-off services
                  with flight tracking and meet-and-greet options.
                </p>
                <Link
                  to="/services"
                  className="text-[#001F3F] flex items-center font-medium font-sans"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-[#F7F7F7] p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">
                  Corporate Travel
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional transportation solutions for business executives
                  with dedicated account management and priority service.
                </p>
                <Link
                  to="/services"
                  className="text-[#001F3F] flex items-center font-medium font-sans"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-[#F7F7F7] p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">
                  Special Events
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxury transportation for weddings, parties, and special
                  occasions with customized packages and premium vehicles.
                </p>
                <Link
                  to="/services"
                  className="text-[#001F3F] flex items-center font-medium font-sans"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Our Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of premium vehicles, each maintained to
              the highest standards of comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Luxury Sedan",
                image:
                  "https://images.unsplash.com/photo-1549399542-7e8f2e928464?w=600&q=80",
                capacity: "3 passengers",
                ideal: "Airport transfers, business travel",
              },
              {
                name: "Executive SUV",
                image:
                  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
                capacity: "6 passengers",
                ideal: "Group travel, family outings",
              },
              {
                name: "Luxury Van",
                image:
                  "https://images.unsplash.com/photo-1609520505218-7421df2a7770?w=600&q=80",
                capacity: "10 passengers",
                ideal: "Corporate groups, airport shuttles",
              },
              {
                name: "Stretch Limousine",
                image:
                  "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&q=80",
                capacity: "8 passengers",
                ideal: "Weddings, special occasions",
              },
              {
                name: "Premium Sedan",
                image:
                  "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
                capacity: "4 passengers",
                ideal: "Business travel, city tours",
              },
              {
                name: "Luxury Coach",
                image:
                  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
                capacity: "30+ passengers",
                ideal: "Large groups, corporate events",
              },
            ].map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-sans">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Ideal for: {vehicle.ideal}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full font-sans rounded-md hover:bg-[#F7F7F7]"
                    onClick={() => console.log(`Book ${vehicle.name}`)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
              View Full Fleet
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say
              about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The service was impeccable. The driver was professional and the vehicle was luxurious. Highly recommended!",
                author: "Sarah Johnson",
                role: "Business Executive",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
              },
              {
                quote:
                  "We hired their services for our corporate event and they exceeded our expectations. Punctual, professional, and perfect!",
                author: "Michael Chen",
                role: "Event Planner",
                avatar:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
              },
              {
                quote:
                  "I use their airport transfer service regularly and have never been disappointed. Reliable and comfortable every time.",
                author: "Emily Davis",
                role: "Frequent Traveler",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-[#FFD700] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold font-sans">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center font-sans">
                Book Your Ride Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                    placeholder="Enter pickup address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Destination
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                    placeholder="Enter destination address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Vehicle Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]">
                    <option value="">Select a vehicle</option>
                    <option value="sedan">Luxury Sedan</option>
                    <option value="suv">Executive SUV</option>
                    <option value="van">Luxury Van</option>
                    <option value="limo">Stretch Limousine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">
                    Number of Passengers
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001F3F]">
                    <option value="">Select number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="bg-[#50C878] hover:bg-green-600 text-white w-full md:w-auto px-8 font-sans rounded-md shadow-sm"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional service that sets us
              apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-[#001F3F]" />,
                title: "Professional Chauffeurs",
                description:
                  "Our drivers are professionally trained, background-checked, and committed to providing exceptional service.",
              },
              {
                icon: <Car className="h-10 w-10 text-[#001F3F]" />,
                title: "Luxury Fleet",
                description:
                  "Our diverse fleet of premium vehicles is meticulously maintained to ensure comfort, safety, and reliability.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#001F3F]" />,
                title: "Punctuality Guaranteed",
                description:
                  "We understand the importance of time. Our service is designed to ensure you arrive at your destination on schedule.",
              },
              {
                icon: <Star className="h-10 w-10 text-[#001F3F]" />,
                title: "5-Star Service",
                description:
                  "We go above and beyond to provide a 5-star experience that exceeds your expectations every time.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide premium transportation services in the following areas
              and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-[#001F3F] mr-2" />
                <h3 className="text-xl font-bold font-sans">
                  Service Locations
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "New York City",
                  "Los Angeles",
                  "Chicago",
                  "Miami",
                  "San Francisco",
                  "Boston",
                  "Washington D.C.",
                  "Las Vegas",
                  "Seattle",
                  "Dallas",
                ].map((city, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 py-1"
                  >
                    <CheckCircle className="h-4 w-4 text-[#50C878] mr-2" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* This would be a map in a real implementation */}
              <div className="h-full min-h-[300px] bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-[#001F3F] mx-auto mb-4" />
                  <p className="text-gray-600">
                    Interactive service area map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">
            Ready to Experience Premium Transportation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your ride today and discover why we're the preferred choice for
            luxury transportation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-amber-600 text-[#333333] font-sans rounded-md shadow-sm"
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-sans rounded-md"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">TMS</h3>
              <p className="text-gray-400 mb-4">
                Premium transportation services for all your needs. Experience
                luxury, comfort, and reliability.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 font-sans">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Corporate Travel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Special Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hourly Charters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    City Tours
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 font-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 font-sans">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">
                    123 Main Street, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="mailto:info@tms-example.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@tms-example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Transportation Management
              System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
