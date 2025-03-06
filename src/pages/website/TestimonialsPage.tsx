import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Executive",
      company: "Global Enterprises Inc.",
      quote:
        "The service was impeccable. The driver was professional and the vehicle was luxurious. I've been using their services for all my business trips for the past year and have never been disappointed. Highly recommended!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Planner",
      company: "Elite Events",
      quote:
        "We hired their services for our corporate event and they exceeded our expectations. The coordination was flawless, the vehicles arrived on time, and the chauffeurs were extremely professional. Punctual, professional, and perfect!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Frequent Traveler",
      company: "Travel Blogger",
      quote:
        "I use their airport transfer service regularly and have never been disappointed. The drivers are always on time, the vehicles are clean and comfortable, and the booking process is seamless. Reliable and comfortable every time.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      id: 4,
      name: "Robert Wilson",
      role: "Wedding Planner",
      company: "Perfect Day Weddings",
      quote:
        "We've used this transportation service for multiple weddings, and they always deliver a premium experience. The decorated vehicles add a special touch, and the chauffeurs are professional and accommodating. Our clients are always impressed!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    },
    {
      id: 5,
      name: "Jennifer Lopez",
      role: "Hotel Concierge",
      company: "Luxury Grand Hotel",
      quote:
        "As a concierge at a 5-star hotel, I only recommend the best services to our guests. This transportation company consistently provides exceptional service that meets our high standards. Our guests always return with positive feedback.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Corporate Travel Manager",
      company: "Thompson Industries",
      quote:
        "Managing travel for our executives requires reliable partners. This service has been our go-to for years. Their attention to detail, punctuality, and professionalism make my job easier. The online booking system and billing options are excellent for corporate clients.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Luxury Travel Agent",
      company: "Exclusive Journeys",
      quote:
        "My clients expect nothing but the best, and this transportation service delivers consistently. The fleet is impressive, the chauffeurs are knowledgeable, and the attention to detail is remarkable. A true luxury experience from start to finish.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    },
    {
      id: 8,
      name: "James Wilson",
      role: "CEO",
      company: "Tech Innovations Ltd",
      quote:
        "Time is valuable in my position, and this service understands that. The drivers are always punctual, the vehicles are equipped with everything I need to work on the go, and the ride is always smooth and comfortable. It's the only transportation service I trust.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say
            about their experiences with our premium transportation services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-blue-600">
                    <Quote className="h-10 w-10 opacity-20" />
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= testimonial.rating ? "text-amber-500 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* These would be actual video embeds in a real implementation */}
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <p className="text-gray-600">
                  Sarah Johnson - Business Executive
                </p>
                <p className="text-sm text-gray-500">
                  Video testimonial would be displayed here
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <p className="text-gray-600">Robert Wilson - Wedding Planner</p>
                <p className="text-sm text-gray-500">
                  Video testimonial would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Our Premium Service
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients and discover why we're
            the preferred choice for luxury transportation.
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

export default TestimonialsPage;
