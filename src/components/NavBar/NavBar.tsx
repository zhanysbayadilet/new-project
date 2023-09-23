import React from 'react';
import {NavBarStyle} from "./NavBarStyle";
import {Button} from "@mui/joy";

const NavBar = () => {
    return (
        <NavBarStyle>
            <Button>Button</Button>
            <Button disabled>Disabled</Button>
            {/*<Button loading>Loading</Button>*/}
        </NavBarStyle>
    );
};

export default NavBar;