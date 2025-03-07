import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Home, Save, ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
    address: "123 Main Street, New York, NY 10001",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, would save changes to the backend
    setIsEditing(false);
  };

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
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-sans">
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                {isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 right-0 rounded-full bg-white"
                  >
                    Change
                  </Button>
                )}
              </div>
              {!isEditing ? (
                <h2 className="text-xl font-bold">{`${profile.firstName} ${profile.lastName}`}</h2>
              ) : null}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {isEditing ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-sans">
                          First Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="firstName"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-sans">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={profile.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profile.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sans">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={profile.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="font-sans">
                        Address
                      </Label>
                      <div className="relative">
                        <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="address"
                          name="address"
                          value={profile.address}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center border-b border-gray-200 pb-4">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{profile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center border-b border-gray-200 pb-4">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{profile.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{profile.address}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-end">
                  {isEditing ? (
                    <>
                      <Button
                        type="button"
                        variant="outline"
                        className="mr-2 font-sans"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                      >
                        <Save className="h-4 w-4 mr-2" /> Save Changes
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="max-w-2xl mx-auto bg-white shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-sans">
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 font-sans">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="font-sans">
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="font-sans">
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter your new password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="font-sans">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your new password"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm">
                    Update Password
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-2 font-sans">
                  Two-Factor Authentication
                </h3>
                <p className="text-gray-600 mb-4">
                  Add an extra layer of security to your account
                </p>
                <Button variant="outline" className="font-sans">
                  Enable Two-Factor Authentication
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProfilePage;
