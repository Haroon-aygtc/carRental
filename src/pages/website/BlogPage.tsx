import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, Tag, X } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "post1",
      title: "The Evolution of Luxury Transportation",
      excerpt:
        "Explore how luxury transportation has evolved over the decades and what the future holds for premium travel experiences.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "Michael Roberts",
      date: "June 15, 2023",
      image:
        "https://images.unsplash.com/photo-1549399542-7e8f2e928464?w=800&q=80",
      category: "Industry Trends",
      tags: ["Luxury", "Transportation", "Innovation"],
    },
    {
      id: "post2",
      title: "Top 5 Benefits of Hiring a Professional Chauffeur",
      excerpt:
        "Discover the advantages of choosing a professional chauffeur service for your transportation needs.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "Emily Johnson",
      date: "May 28, 2023",
      image:
        "https://images.unsplash.com/photo-1537346439163-9eb345ce9747?w=800&q=80",
      category: "Service Benefits",
      tags: ["Chauffeur", "Luxury", "Service"],
    },
    {
      id: "post3",
      title: "Corporate Transportation: Impressing Clients and Partners",
      excerpt:
        "Learn how premium transportation services can enhance your company's image and improve business relationships.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "David Chen",
      date: "May 12, 2023",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
      category: "Corporate Services",
      tags: ["Corporate", "Business", "Impressions"],
    },
    {
      id: "post4",
      title: "Wedding Transportation: Creating Memorable Moments",
      excerpt:
        "Tips for planning the perfect transportation for your wedding day to ensure everything runs smoothly.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "Sarah Williams",
      date: "April 30, 2023",
      image:
        "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
      category: "Special Events",
      tags: ["Wedding", "Events", "Planning"],
    },
    {
      id: "post5",
      title: "The Environmental Impact of Luxury Transportation",
      excerpt:
        "How luxury transportation companies are adopting sustainable practices and eco-friendly vehicles.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "James Wilson",
      date: "April 15, 2023",
      image:
        "https://images.unsplash.com/photo-1552015386-5f10a19fe2f0?w=800&q=80",
      category: "Sustainability",
      tags: ["Environment", "Green", "Electric Vehicles"],
    },
    {
      id: "post6",
      title: "Airport Transportation: Stress-Free Travel Tips",
      excerpt:
        "How to ensure a smooth and stress-free airport transfer experience for your next trip.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere.",
      author: "Lisa Thompson",
      date: "March 28, 2023",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "Travel Tips",
      tags: ["Airport", "Travel", "Tips"],
    },
  ];

  // Get all unique categories
  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and news about luxury transportation and travel
            experiences.
          </p>
        </div>
      </section>

      {selectedPost ? (
        // Single Post View
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              className="mb-8"
              onClick={() => setSelectedPost(null)}
            >
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to All
              Posts
            </Button>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 w-full">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-800">
                    {selectedPost.category}
                  </Badge>
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-2" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedPost.date}
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {selectedPost.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Blog List View
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Search</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search articles..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Categories</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className={`cursor-pointer px-3 py-2 rounded-md ${selectedCategory === category ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category === "all" ? "All Categories" : category}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => setSearchTerm(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:w-3/4">
                {searchTerm || selectedCategory !== "all" ? (
                  <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center justify-between">
                    <div>
                      <span className="font-medium">Filtered by:</span>
                      {selectedCategory !== "all" && (
                        <Badge className="ml-2 bg-blue-100 text-blue-800">
                          {selectedCategory}
                        </Badge>
                      )}
                      {searchTerm && (
                        <Badge className="ml-2 bg-blue-100 text-blue-800">
                          "{searchTerm}"
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                    >
                      <X className="h-4 w-4 mr-1" /> Clear Filters
                    </Button>
                  </div>
                ) : null}

                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post) => (
                      <Card
                        key={post.id}
                        className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Badge className="mr-2 bg-blue-100 text-blue-800">
                              {post.category}
                            </Badge>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-600 text-sm">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedPost(post)}
                            >
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No posts found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search or category filters.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest articles, industry insights, and
            special offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <Input
              placeholder="Your email address"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
