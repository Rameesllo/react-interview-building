
import { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      setStudents(data);
    })
    .finally(()=>{
      setLoading(false);
    });
  },[]);

  function handleDelete(id) {
    const updatedStudents = students.filter((student)=> {
      return student.id !== id;
    });

    setStudents(updatedStudents);
  }



  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow">
        <h1 className="text-xl font-bold">
          Student Management
        </h1>
      </nav>

      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen bg-slate-800 p-4 text-white">
          <button
            onClick={() => setActivePage("Dashboard")}
            className={`mb-2 block w-full rounded p-2 text-left ${
              activePage === "Dashboard"
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActivePage("Students")}
            className={`mb-2 block w-full rounded p-2 text-left ${
              activePage === "Students"
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            Students
          </button>

          <button
            onClick={() => setActivePage("Attendance")}
            className={`mb-2 block w-full rounded p-2 text-left ${
              activePage === "Attendance"
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            Attendance
          </button>

          <button
            onClick={() => setActivePage("Fees")}
            className={`block w-full rounded p-2 text-left ${
              activePage === "Fees"
                ? "bg-slate-700"
                : "hover:bg-slate-700"
            }`}
          >
            Fees
          </button>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 p-6">

          {/* Dashboard page */}
          {activePage === "Dashboard" && (
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="mt-1 text-gray-600">Welcome back!</p>

              {/* Dashboard cards */}
              <div className="mt-6 flex flex-wrap gap-6">
                <div className="w-80 rounded bg-blue-50 p-10 shadow">
                  <h2>Total Students</h2>
                  <h2 className="text-2xl font-bold">25</h2>
                </div>

                <div className="w-80 rounded bg-green-50 p-10 shadow">
                  <h2>Present Today</h2>
                  <h2 className="text-2xl font-bold">20</h2>
                </div>

                <div className="w-80 rounded bg-orange-50 p-10 shadow">
                  <h2>Pending Fees</h2>
                  <h2 className="text-2xl font-bold">5</h2>
                </div>
              </div>

              {/* Recent Students table */}
              <div className="mt-6 rounded-lg bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold">Recent Students</h2>

                  <button
                    onClick={() => setActivePage("Students")}
                    className="text-blue-600 hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-200 text-sm text-gray-500">
                        <th className="p-3">Name</th>
                        <th className="p-3">Course</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Ramees</td>
                        <td className="p-3">BSc CS</td>
                        <td className="p-3">
                          <span className="rounded-lg border bg-green-100 px-2 py-1 text-green-700">
                            Active
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="rounded-lg border bg-blue-50 px-2 py-1 text-blue-500">
                            View
                          </button>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-3">Rahul</td>
                        <td className="p-3">BCA</td>
                        <td className="p-3">
                          <span className="rounded-lg border bg-yellow-100 px-2 py-1 text-yellow-700">
                            Pending
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="rounded-lg border bg-blue-50 px-2 py-1 text-blue-500">
                            View
                          </button>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-3">Anjali</td>
                        <td className="p-3">MSC</td>
                        <td className="p-3">
                          <span className="rounded-lg border bg-red-100 px-2 py-1 text-red-700">
                            Inactive
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="rounded-lg border bg-blue-50 px-2 py-1 text-blue-500">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Students page */}
          {activePage === "Students" && (
            <div>
              <h2 className="text-2xl font-bold">Students</h2>
              <p className="mt-1 text-gray-600">
                Manage your students here.
              </p>
              {loading?(
                <p className="mt-4 ">Loading Students..</p>
               )
               :(
                <div className="mt-6 overflow-x-auto rounded-lg bg-white p-4 shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">No.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Course</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.company.name}</td>
                <td className="p-3">
                  <button onClick={()=> handleDelete(student.id)} className="rounded bg-red-500 px-3 py-1 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
               )

            }
            </div>
          )}

          {/* Attendance page */}
          {activePage === "Attendance" && (
            <div>
              <h2 className="text-2xl font-bold">Attendance</h2>
            </div>
          )}

          {/* Fees page */}
          {activePage === "Fees" && (
            <div>
              <h2 className="text-2xl font-bold">Fees</h2>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
