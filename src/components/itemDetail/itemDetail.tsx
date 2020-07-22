import React from 'react';
import EdiText from 'react-editext';
import './itemDetail.css';
import noImage from './../../assets/images/no-image.jpg';

interface IDetailProps {
    selectedItem: any,
    onPriceUpdate: (itemId: number, price: number) => void,
    updateAvailability: (itemId: number, available: string) => void,
    history: any
}

const ItemDetail: React.SFC<IDetailProps> = (props) => {
    const goToListings = () => {
        props.history.push('/')
    }
    if (Object.keys(props.selectedItem).length === 0) {
        props.history.push('/')
    }
    const { imageUrl, description, name, itemId, price, tax, category, available } = props.selectedItem;

    const image = imageUrl && imageUrl.includes('/no_menu_image.jpg') ? noImage : imageUrl;
    return (
        <div className="item-details-container">
            <span onClick={goToListings}>&#8678;Back</span>
            <div className="item-container">
                <div className="item-image">
                    <img src={image} alt={description} />
                </div>
                <div className="item-details">
                    <h2>{name} - #{itemId}</h2>
                    {description && <div className="details-row">
                        <div>Description: </div>
                        <div>{description}</div>
                    </div>}

                    {price &&
                        <div className="details-row">
                            <div>Price: </div>
                            <div> <EdiText
                                type='number'
                                value={price}
                                onSave={(val) => props.onPriceUpdate(itemId, parseInt(val))}
                            /></div>
                        </div>
                    }
                    {tax &&
                        <div className="details-row">
                            <div>Tax: </div>
                            <div>{tax}</div>
                        </div>
                    }

                    <div className="details-row">
                        <div>Category: </div>
                        <div>{category}</div>
                    </div>
                    <div className="details-row">
                        <div>Available: </div>
                        <div><EdiText
                            type='text'
                            value={available ? 'Yes' : 'No'}
                            onSave={(val) => props.updateAvailability(itemId, val)}
                        /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;