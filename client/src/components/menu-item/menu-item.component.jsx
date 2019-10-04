import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer } from './menu-item.styles';

export const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} className={(size ? `${size} menu-item` : `menu-item`)} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </MenuItemContainer>
);

export default withRouter(MenuItem);