export default function Navbar() {
    return (
        <div className="flex bg-blue-700 rounded-lg rounded-t-none h-20 text-white items-center justify-between font-bold" >
           <div className="flex gap-10">
             <h1 className="text-3xl">Budget Management</h1>

            <ul className="flex gap-2 text-lg">
                <li>About</li>
            
                <li>Home</li>

            </ul>
            </div>
            <ul className="flex gap-2 text-lg">
                <li>Sign up</li>
                <li>Login</li>
            </ul>


        </div>
    );
}