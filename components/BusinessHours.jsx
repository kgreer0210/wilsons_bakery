"use client";

import { useState, useEffect } from "react";

export default function BusinessHours() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const checkBusinessHours = () => {
      // Get current time in EST/EDT
      const now = new Date();
      const options = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      const estTime = now.toLocaleTimeString("en-US", options);
      setCurrentTime(estTime);

      // Get hours and check if business is open (8am-5pm EST)
      const estHour = now.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: false,
      });

      const hour = parseInt(estHour, 10);
      setIsOpen(hour >= 8 && hour < 17); // Open from 8am to 5pm
    };

    // Check immediately and then every minute
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`h-3 w-3 rounded-full ${
          isOpen ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
      <span className="text-sm font-medium">
        {isOpen ? "Open Now" : "Closed"}
        <span className="text-xs ml-1 text-gray-500">({currentTime} EST)</span>
      </span>
    </div>
  );
}
