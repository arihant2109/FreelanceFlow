"use client";

import { useState, useEffect } from "react";

export default function ProjectForm() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    user_id:8,
    client_id: "",
    title: "",
    description: "",
    status: "active",
    start_date: "",
    due_date: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Fetch clients for the dropdown
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/clients");

        const data = await res.json();
        setClients(data.message || []);
      } catch (err) {
        setError("Failed to load clients.");
      }
    };
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/addProject`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok)
        throw new Error((await res.json()).error || "Something went wrong.");
      setSuccess("Project created successfully!");
      setFormData({
        client_id: "",
        title: "",
        description: "",
        status: "active",
        start_date: "",
        due_date: "",
      });
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Create Project</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md"
      >
        <select
          name="client_id"
          value={formData.client_id}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Select Client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Create Project
        </button>
      </form>
      {success && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg w-full max-w-lg">
          {success}
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg w-full max-w-lg">
          {error}
        </div>
      )}
    </div>
  );
}
