// components/Clients.tsx
'use client'
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Clients() {
    // const clients = [
    //   {
    //     name: "Stellar Ltd.",
    //     email: "sarah.johnson@example.com",
    //     company: "Stellar Ltd.",
    //   },
    //   {
    //     name: "Michael Smith",
    //     email: "michael.smith@example.com",
    //     company: "Horizon Inc.",
    //   },
    //   {
    //     name: "Emily Davis",
    //     email: "emily.davis@example.com",
    //     company: "Summit Co.",
    //   },
    //   {
    //     name: "James Wilson",
    //     email: "james.wilson@example.com",
    //     company: "Apex Solutions",
    //   },
    // ];
    
    const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const client = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/fetchClients`);
      const response = await client.json();
      console.log("fetchClients response:", response);
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching clients:", error);
      return [];
    }
  };

  useEffect(() => {
    const getClients = async () => {
      const allClients = await fetchClients();
      console.log("useEffect", allClients);
      setClients(allClients);
    };

    getClients();
  }, []);
    return (
      <><NavBar /><SideBar /><div className="p-6 ml-[18%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <Link href='/newClient'>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
              + New Client
            </button></Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 border-b">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="px-4">Email</th>
                <th className="px-4">Company</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{client.name}</td>
                  <td className="px-4">{client.email}</td>
                  <td className="px-4">{client.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
    );
  }
  