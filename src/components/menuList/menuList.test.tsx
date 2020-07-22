import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuList from './menuList';
import MenuItem from '../menuItem/menuItem';

describe('Testing Menu List Component', () => {
    let menuData: any, selectItem: () => void, component: any;
    beforeEach(() => {
        menuData = {
            16295: {
                itemId: 16295,
                name: 'Pepsi',
                description: 'Cold Drink',
                price: 20,
                tax: 8,
                available: true
            },
            16296: {
                itemId: 16296,
                name: 'Coca Cola',
                description: 'Cold Drink',
                price: 20,
                tax: 8,
                available: true
            }
        }

        selectItem = () => {}
        component = render(<MenuList menuData={menuData} selectItem={selectItem} />)
    })
    it('Should render menu list item', () => {
        const element = screen.getByTestId("menu-list")
        expect(element).toBeInTheDocument()
    })
    it('Should render menu items as per data', ()=>{
        const menuItems = Object.keys(menuData).map((data:any) => <MenuItem {...menuData[data]} selectItem={selectItem} />)
        expect(menuItems.length).toBe(Object.keys(menuData).length)
    })

})