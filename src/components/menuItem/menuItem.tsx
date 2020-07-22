import React, { Component } from 'react';
import noImage from './../../assets/images/no-image.jpg';

interface Props {
    name: string,
    category: string,
    imageUrl: string,
    description: string,
    available: boolean,
    itemId: number,
    price: number,
    tax: number,
    selectItem: (itemId: number) => void
}

const MenuItem: React.SFC<Props> = (props) => {
    const { name, category, imageUrl, available, itemId, description, price, tax, selectItem } = props;
    const image = imageUrl && imageUrl.includes('/no_menu_image.jpg') ? noImage : imageUrl;
    return (
        <div className="menu-item-container" data-testid="menu-item-container">
            <div className="menu-item" onClick={() => selectItem(itemId)}>
                <div className="item-image" data-testid="item-image">
                    <img src={image} alt={description} />
                </div>
                <div className="item-details">
                    <h4>{name} - #{itemId}</h4>
                    {
                        description && <div className="details-row">
                            <span>Description: </span>
                            <span>{description}</span>
                        </div>
                    }

                    <div className="details-row">
                        <span>Price: </span>
                        <span>{price}</span>
                    </div>
                    <div className="details-row">
                        <span>Tax: </span>
                        <span>{tax}</span>
                    </div>
                    <div className="details-row">
                        <span>Category: </span>
                        <span>{category}</span>
                    </div>
                    <div className="details-row">
                        <span>Available: </span>
                        <span>{available ? 'Yes' : 'No'} </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuItem;