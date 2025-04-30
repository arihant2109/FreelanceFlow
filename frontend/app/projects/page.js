// components/Projects.tsx
import Link from "next/link";
export default function Projects() {
    const projects = [
      {
        id:1,
        name: "Website Redesign",
        client: "Acme Corp",
        dueDate: "May 26, 2024",
        status: "In Progress",
      },
      {
        id:2,
        name: "Mobile App Development",
        client: "Globex",
        dueDate: "Jun 10, 2024",
        status: "In Progress",
      },
      {
        id:3,
        name: "Marketing Campaign",
        client: "Stellar Ltd",
        dueDate: "May 15, 2024",
        status: "Completed",
      },
      {
        id:4,
        name: "SEO Optimization",
        client: "Beta Inc",
        dueDate: "Jun 5, 2024",
        status: "Pending",
      },
    ];
  
    const getStatusStyle = (status) => {
      switch (status) {
        case "In Progress":
          return "bg-blue-100 text-blue-700";
        case "Completed":
          return "bg-gray-200 text-gray-700";
        case "Pending":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "";
      }
    };
  
    return (
      <div className="p-6 ml-[18%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
            + New Project
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
            <div
              key={index}
              className="bg-white rounded-lg shadow p-5 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Client: <span className="font-medium">{project.client}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Due: <span className="font-medium">{project.dueDate}</span>
              </p>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  