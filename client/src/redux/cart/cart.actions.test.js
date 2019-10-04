import CartActionTypes from './cart.types';

import {
    toggleCartHidden,
    addItem,
    removeItem,
    clearItemFromCart,
    clearCart,
    setCartFromDB
} from './cart.actions';

describe('cart actions', () => {
  
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });

  it('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = addItem(mockItem);
    
    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);
    
    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItemFromCart(mockItem);
    
    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });

  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });

  it('should create the setCartFromDB action', () => {
    const mockItems = [
        {
            id: 1
        },
        {
            id: 2  
        },
        {
            id: 3  
        }
    ];

    const action = setCartFromDB(mockItems);
    
    expect(action.type).toEqual(CartActionTypes.GET_CART_FROM_FIREBASE);
    expect(action.payload).toEqual(mockItems);
  });

});