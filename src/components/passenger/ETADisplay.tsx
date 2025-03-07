import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface ETADisplayProps {
  initialEta: string;
  tripId: string;
  onArrival?: () => void;
}

const ETADisplay = ({ initialEta, tripId, onArrival }: ETADisplayProps) => {
  const [eta, setEta] = useState(initialEta);
  const [isArrived, setIsArrived] = useState(false);

  useEffect(() => {
    // Only start countdown if not already arrived
    if (isArrived) return;

    // Parse the initial ETA
    let etaMinutes = 0;
    if (initialEta.includes("minutes")) {
      etaMinutes = parseInt(initialEta.split(" ")[0]);
    } else if (initialEta.includes("minute")) {
      etaMinutes = 1;
    }

    if (etaMinutes <= 0) {
      setIsArrived(true);
      setEta("Arrived");
      if (onArrival) onArrival();
      return;
    }

    // Set up interval to update ETA
    const interval = setInterval(() => {
      if (etaMinutes > 1) {
        etaMinutes--;
        setEta(`${etaMinutes} minutes`);
      } else if (etaMinutes === 1) {
        setEta("Less than a minute");
        etaMinutes = 0;
      } else {
        clearInterval(interval);
        setIsArrived(true);
        setEta("Arrived");
        if (onArrival) onArrival();
      }
    }, 60000); // Update every minute in a real app

    // For demo purposes, update more frequently
    const demoInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        // Randomly update ETA for demo
        if (etaMinutes > 1) {
          etaMinutes--;
          setEta(`${etaMinutes} minutes`);
        }
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(demoInterval);
    };
  }, [initialEta, isArrived, onArrival]);

  return (
    <div className="flex items-center">
      <Clock className="h-5 w-5 text-gray-400 mr-2" />
      <div>
        <p className="text-sm text-gray-500 mb-1">ETA</p>
        <p
          className={`font-medium ${isArrived ? "text-green-600" : "text-[#001F3F]"}`}
        >
          {eta}
        </p>
      </div>
    </div>
  );
};

export default ETADisplay;
