function Navbar(){
    return(
    <div className="">
        <nav className="bg-white p-4 shadow flex justify-between">
            <h1 className="text-xl font-bold">
                Student Mangement
            </h1>
            <button onClick={()=>window.location.href = "./admin.jsx"}>Admin</button>
        </nav>
    </div>
    );
}


export default Navbar;