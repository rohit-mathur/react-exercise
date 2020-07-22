import React from 'react';
import MenuItem from './../menuItem/menuItem';
import './menuList.css';

interface IAppProps {
    menuData: any,
    selectItem: (itemId: number) => void
}


const MenuList: React.SFC<IAppProps> = (props) => {
    const [menuData, setMenuData] = React.useState(props.menuData)
    const menuDataProcessed = Object.keys(menuData).map(item => menuData[item])
        return (
            <div className="menu-list" data-testid="menu-list">
                {
                    menuDataProcessed.map(data => <MenuItem key={data.itemId} {...data} selectItem={props.selectItem} />)
                }
            </div>
        );
   }

export default MenuList;
