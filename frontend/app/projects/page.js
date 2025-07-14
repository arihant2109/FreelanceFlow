'use client';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);

  // 1) detect client mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 2) only fetch once we're actually mounted
  useEffect(() => {
    if (!isClient) return;
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/fetchProjects`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        const json = await res.json();
        setProjects(json.data.data || []);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [isClient]);

  console.log('Projects:', projects);
  // 3) don’t attempt to render the “dynamic” bit until after hydration
  if (!isClient) {
    return (
      <>
        <NavBar />
        <SideBar />
        <div className="p-6 ml-[18%]">
          <p className="text-gray-500">Loading…</p>
        </div>
      </>
    );
  }

  // now that we’re 100% on the client, everything you render
  // will exactly match what React mounts
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-6 ml-[18%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <Link href="/newProject">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
              + New Project
            </button>
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {projects.length === 0 ? (
          <p className="text-gray-500">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {project.title || project.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">
                    Client: <span className="font-medium">{project.name || "N/A"}</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Due: <span className="font-medium">{project.due_date || project.dueDate || "Not set"}</span>
                  </p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusStyle(project.status)}`}>
                    {project.status || "Unknown"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function getStatusStyle(status) {
  switch ((status || '').toLowerCase()) {
    case 'in progress': return 'bg-blue-100 text-blue-700';
    case 'completed':   return 'bg-gray-200 text-gray-700';
    case 'pending':     return 'bg-yellow-100 text-yellow-800';
    case 'active':      return 'bg-green-100 text-green-700';
    default:            return 'bg-gray-100 text-gray-600';
  }
}
