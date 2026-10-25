
function Admin() {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <h1 className="text-3xl font-bold">
        Admin Panel
      </h1>

      <p className="mt-2 text-gray-400">
        Welcome to the admin dashboard.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-lg font-semibold">Students</h2>
          <p className="mt-2 text-sm text-gray-400">
            Manage student details
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-lg font-semibold">Attendance</h2>
          <p className="mt-2 text-sm text-gray-400">
            Manage attendance
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-lg font-semibold">Fees</h2>
          <p className="mt-2 text-sm text-gray-400">
            Manage fee details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
