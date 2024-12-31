import React from "react";
import "./Header.css";
import { ReactComponent as Logoicon} from "../../assets/Logo.svg";
import { ReactComponent as Bell} from "../../assets/Bell.svg";

function Header() {
    return (
        <div className="Header-Bar">
            <Logoicon className="Logoicon"/>
            <Bell className="Bell"/>
        </div>
    );
}

export default Header;