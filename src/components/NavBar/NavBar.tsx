import { FC } from "react";
import logo from "../../assets/logo.svg";

export const NavBar: FC = () => {
    return (
        <div className="h-full w-full flex justify-start items-center px-5">
            <img src={logo} className="h-3/4" alt="logo" />
        </div>
    );
};
