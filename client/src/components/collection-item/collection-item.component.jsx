import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer, 
    AddButton, 
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    BackgroundImage
} from './collection-item.styles';

export const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer className="collection-item">
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer className="collection-footer">
                <NameContainer className="name">{name}</NameContainer>
                <PriceContainer className="price">{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}> Add to cart </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);