import React from "react";

export default function Footer() {
  return (
    <div className="bg-secondary text-primary text-center py-4 mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Wilson's Bakery. All rights reserved.
      </p>
    </div>
  );
}
