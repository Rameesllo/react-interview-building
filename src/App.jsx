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
      
        {activePage === "Dashboard" && (
        <div className=" "> 
          <h2 className="text-2xl font-bold" >Dashboard</h2>
          <p> welcome back</p>

           <div className="flex gap-6">
                <div className="mt-6 rounded bg-blue-50 w-80  p-10 shadow">
                 <h2>Total Student</h2>
                 <h2 className="text-2xl font-bold">25</h2>
                </div>

                <div className="mt-6 rounded bg-green-50 w-80  p-10 shadow">
                 <h2>Present Today</h2>
                 <h2 className="text-2xl font-bold">20</h2>
                </div>

                <div className="mt-6 rounded bg-orange-50 w-80  p-10 shadow">
                 <h2>Pending Fees</h2>
                 <h2 className="text-2xl font-bold">5</h2>
                </div>

                
        </div>

        </div>)}
       
        
        

         {activePage === "Students" && (
          <div>
            <h2 className="text-2xl font-bold">Students</h2>


          </div>
         )}      
            
    </main>

  </div>



</div>
)

}
export default App;