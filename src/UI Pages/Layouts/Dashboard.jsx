import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet/>
                <label htmlFor="my-drawer-2" className="button drawer-button lg:hidden">Open Sidebar</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full border-r-4 border-slate-400 font-bold uppercase">
                {/* Sidebar content here */}
                <Link to={'/'} className='my-3'>Home</Link>
                <Link to={'/dashboard/profile'} className='my-3'>Profile</Link>
                <Link to={'/dashboard/totalbooks'} className='my-3'>All Books</Link>
                <Link to={'/dashboard/Addbook'} className='my-3'>Add Book</Link>
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default Dashboard;