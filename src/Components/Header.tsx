import { Navbar, Dropdown, Avatar } from "flowbite-react";
import React from "react";

export default function Header() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="border"
            >
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                    >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}