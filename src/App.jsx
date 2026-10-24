import { useState } from "react";

function App() {
const [activePage, setActivePage] = useState("Dashboard");

return(
<div className="min-h-screen bg-gray-100">
  {/* navbar*/}
  <nav className="bg-white p-4 shadow">
    <h1 className="text-xl font-bold">Student Mangement.add</h1>
  </nav>
 {/* main layout*/}
  <div className="flex">
    <aside className="w-60 min-h-screen bg-slate-800 text-white p-4">
     <button onClick={()=> setActivePage("Dashboard")}
     className={`block w-full p-2 text-left rounded ${
     activePage === "Dashboard" 
     ? "bg-slate-700" 
     :"hover:bg-slate-700"
     }`}>
      Dashboard</button>

     <button onClick={()=>setActivePage("Students")}
      className={`block w-full p-2 text-left rounded ${
        activePage === "Students"
        ? "bg-slate-700"
        : "hover:bg-slate-700"
       }`}>
        Students</button>

      <button  onClick={()=>setActivePage("Attendance")}
      className="block w-full p-2 text-left rounded hover:bg-slate-700 ">
        Attendance</button>

       <button  onClick={()=>setActivePage("Fees")}
       className="block w-full p-2 text-left rounded hover:bg-slate-700 ">
        Fees</button>

    </aside>

    <main className="p-6">
      <h2 className="text-2xl font-bold">{activePage}</h2>
    </main>

  </div>



</div>
)

}
export default App;