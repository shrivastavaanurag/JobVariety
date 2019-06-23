import React from "react";
import SideDrawerMenu from "./SideDrawerMenu";

import {DrawerNavigator} from "react-navigation";

const NavMenu = DrawerNavigator(
    {
        // News: { screen: News },
        // RulesOfUse: { screen: RulesOfUse },
        // Copyright: { screen: Copyright }
    },
    {
        contentComponent: props => <SideDrawerMenu {...props} />
    }
);

export default NavMenu;