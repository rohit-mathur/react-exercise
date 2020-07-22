import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from './menuItem';

describe('Testing Menu Item Component', () => {
    let selectedData: any, selectItem: () => void, component: any;
    beforeEach(() => {
        selectedData = {
                itemId: 16295,
                name: 'Pepsi',
                description: 'Cold Drink',
                price: 20,
                tax: 8,
                available: true
            }

        selectItem = () => {

        }
        component = render(<MenuItem {...selectedData} selectItem={selectItem} />)
    })
    it('Should render menu list item', () => {
        const element = screen.getByTestId("menu-item-container")
        expect(element).toBeInTheDocument()
    })

    it('Should render an image', () => {
        const element = screen.getByTestId("item-image")
        expect(element).toBeInTheDocument()
    })

})