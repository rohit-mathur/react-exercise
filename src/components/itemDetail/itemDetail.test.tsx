import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from './itemDetail';
import App from './../../App';

describe('Testing Item Detail Component', () => {
    let selectedData: any, onPriceUpdate: () => void, updateAvailability: () => void, component: any;
    beforeEach(() => {
        selectedData = {
                itemId: 16295,
                name: 'Pepsi',
                description: 'Cold Drink',
                price: 20,
                tax: 8,
                available: true
            }
            onPriceUpdate = () => {}
            updateAvailability = () => {}
            let history = ''
        component = render(<ItemDetail selectedItem={selectedData} onPriceUpdate={onPriceUpdate} updateAvailability={updateAvailability} history={history} />)
    })
    
    it('Should redirect to listings if selected Data is not available', () => {
        if(Object.keys(selectedData).length === 0){
            expect(window.location.pathname).toBe('/')
        }
    })

})