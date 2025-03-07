import React, { useState, useEffect } from "react";
import { Navigation, MapPin } from "lucide-react";

interface RealTimeMapProps {
  pickupLocation: string;
  destination: string;
  driverLocation: string;
  eta: string;
  onLocationUpdate?: (newLocation: string, newEta: string) => void;
}

const RealTimeMap = ({
  pickupLocation,
  destination,
  driverLocation,
  eta,
  onLocationUpdate,
}: RealTimeMapProps) => {
  // Mock driver movement simulation
  useEffect(() => {
    if (!onLocationUpdate) return;

    // Simulate driver movement with random locations
    const locations = [
      "5th Avenue & 42nd Street",
      "Madison Avenue & 38th Street",
      "Park Avenue & 34th Street",
      "Lexington Avenue & 30th Street",
      "3rd Avenue & 26th Street",
      "2nd Avenue & 22nd Street",
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      // Move to next location
      currentIndex = (currentIndex + 1) % locations.length;

      // Calculate new ETA based on remaining locations
      const remainingStops = locations.length - currentIndex - 1;
      let newEta;

      if (remainingStops > 0) {
        newEta = `${remainingStops * 2} minutes`;
      } else {
        newEta = "Less than a minute";
        // If we've reached the last location, clear the interval
        if (currentIndex === locations.length - 1) {
          clearInterval(interval);
        }
      }

      // Update the parent component with new location and ETA
      onLocationUpdate(locations[currentIndex], newEta);
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, [onLocationUpdate]);

  return (
    <div className="bg-gray-200 h-[400px] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <Navigation className="h-12 w-12 text-[#001F3F] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            Interactive map would be displayed here
          </p>
          <p className="text-gray-500">
            Showing driver's location and route to destination
          </p>
          <p className="text-[#001F3F] font-medium mt-2">
            Current driver location: {driverLocation}
          </p>
          <p className="text-[#001F3F] font-medium">ETA: {eta}</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm">
            Your pickup: {pickupLocation.substring(0, 20)}...
          </span>
        </div>
        <div className="flex items-center mt-1">
          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm">
            Your destination: {destination.substring(0, 20)}...
          </span>
        </div>
        <div className="flex items-center mt-1">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <span className="text-sm">Driver at: {driverLocation}</span>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMap;
