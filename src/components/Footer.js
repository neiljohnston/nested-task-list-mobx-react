/************************************************

  Name: /src/components/Footer.js

  Description: Creates a footer with links to show all/active/completed.

  TODO:


  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


@observer class Footer extends React.Component {

  render() {
    return (
      <BottomNavigation selectedIndex={1}>
          <BottomNavigationItem
            label="Show All"
            icon={recentsIcon}
            onTouchTap={() =>
              this.props.store.visibilityFilter = 'SHOW_ALL'
            }
          />
          <BottomNavigationItem
            label="Show Active"
            icon={favoritesIcon}
            onTouchTap={() =>
              this.props.store.visibilityFilter = 'SHOW_ACTIVE'
            }
          />
          <BottomNavigationItem
            label="Show Completed"
            icon={nearbyIcon}
            onTouchTap={() =>
              this.props.store.visibilityFilter = 'SHOW_COMPLETED'
            }
          />
      </BottomNavigation>
    )
  }
}


export default Footer;
