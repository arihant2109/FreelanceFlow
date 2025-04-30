// components/Dashboard.tsx
import Link from "next/link";
export default function Dashboard() {
    const stats = [
      { label: "Active Projects", value: 4 },
      { label: "Outstanding Invoices", value: "$12,500" },
      { label: "Pending Payments", value: "$8,200", color: "text-green-600" },
      { label: "Paid This Month", value: "$5,400" },
    ];
  
    const projects = [
      {
        name: "Website Redesign",
        client: "Acme Corp",
        due: "May 26, 2024",
        status: "In Progress",
        badge: "bg-blue-500",
      },
      {
        name: "Mobile App Development",
        client: "Globex",
        due: "Jun 10, 2024",
        status: "In Progress",
        badge: "bg-blue-500",
      },
      {
        name: "Marketing Campaign",
        client: "Stellar Ltd",
        due: "May 15, 2024",
        status: "Completed",
        badge: "bg-gray-500",
      },
      {
        name: "SEO Optimization",
        client: "Beta Inc",
        due: "Jun 5, 2024",
        status: "Pending",
        badge: "bg-yellow-400 text-black",
      },
    ];
  
    const activities = [
      { text: "Invoice for Marketing Campaign sent to Stellar Ltd", time: "1 day ago" },
      { text: "Payment received from Globex", time: "3 days ago" },
      { text: "New client Added Beta Inc", time: "5 days ago" },
      { text: "New Project Mobile App Development created", time: "1 week ago" },
    ];
  
    return (
      <div className="p-6 ml-[18%]">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
  
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-gray-500">{s.label}</div>
              <div className={`text-xl font-bold ${s.color || ""}`}>{s.value}</div>
            </div>
          ))}
        </div>
  
        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Projects</h2>
            <Link href="/projects" className="text-blue-500 text-sm">View All</Link>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">Name</th>
                <th>Client</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2">{p.name}</td>
                  <td>{p.client}</td>
                  <td>{p.due}</td>
                  <td>
                    <span className={`text-white text-xs px-2 py-1 rounded ${p.badge}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <Link href="/projects" className="text-blue-500 text-sm">View All</Link>
          </div>
          <ul className="text-sm space-y-3">
            {activities.map((a, i) => (
              <li key={i} className="flex justify-between text-gray-700">
                <span>• {a.text}</span>
                <span className="text-gray-400 text-xs">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  