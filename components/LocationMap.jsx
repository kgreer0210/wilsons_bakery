"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  const mapCenter = { lat: 32.617652154119384, lng: -83.63439330327392 }; // Coordinates for Warner Robins, GA
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "0.75rem", // 12px rounded corners
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Subtle floating effect
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Location</h3>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={14}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </LoadScript>

      <div className="mt-4 space-y-1">
        <p className="flex items-center">
          <MapPin className="h-4 w-4 mr-2" /> 1719 Watson Blvd, Warner Robins,
          GA 31093, USA
        </p>
        <p>
          <strong>478.922.9300 - Bakery</strong>
        </p>
        <p>
          <strong>478.922.9915 - Office</strong>
        </p>
        <p className="mt-2">
          <a
            href="mailto:WilsonBakery@outlook.com"
            className="text-blue-600 hover:underline"
          >
            WilsonBakery@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
}
