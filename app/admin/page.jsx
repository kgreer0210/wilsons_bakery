"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Actions:</h2>
          <ul className="list-disc list-inside">
            <Link href="/admin/productManagement">
              <li className="hover:text-blue-500 hover:underline">
                Product Management
              </li>
            </Link>
            <li>View Orders</li>
            <li>Update Site Content</li>
          </ul>
        </div>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
