import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Main(){
    return (
        <div>
           <div className="flex flex-row h-screen overflow-hidden">
               <Sidebar />
               <div className="flex-auto">
                <Header />
                   <div>
                        <Outlet />
                   </div>
               </div>
           </div>
        </div>
    )
}