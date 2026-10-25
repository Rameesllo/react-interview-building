function Navbar({onAdminClick}){
    return(
    <div className="">
        <nav className="bg-white p-4 shadow flex justify-between">
            <h1 className="text-xl font-bold">
                Student Mangement
            </h1>
            <button onClick={onAdminClick}>Admin</button>
        </nav>
    </div>
    );
}


export default Navbar;