import styled from 'styled-components';
import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 35px;
    }
`;
CartIconContainer.displayName = 'CartIconContainer';

export const ShoppingIcon = styled(BagIcon)`
    width: 24px;
    height: 24px;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;
ItemCountContainer.displayName = 'ItemCountContainer';