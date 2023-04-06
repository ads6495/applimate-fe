import react from "react";
import {Sidebar} from "flowbite-react"
export default function SideBar() {
    return (
        <div className="w-fit border">
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
//                            icon={}
                            >
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={}
                            label="Pro"
                            labelColor="alternative"
                            >
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={HiInbox}
                            label="3"
                            >
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={HiUser}
                            >
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={HiShoppingBag}
                            >
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={HiArrowSmRight}
                            >
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
//                            icon={HiTable}
                            >
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}