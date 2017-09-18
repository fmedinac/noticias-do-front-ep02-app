import { createSelector } from 'reselect';

const state = state => state;

export default createSelector(
    [state],
    state => {
        return {
            isInvoiceOpen: state.isInvoiceOpen,
            cartList: state.cart.reduce((acc, cur) => {
                const product = state.productListData.filter(item => item.sku === cur)[0];
                const productIndex = acc.findIndex(item => item.sku === product.sku);

                if (productIndex === -1) {
                    return [
                        ...acc,
                        {
                            sku: product.sku,
                            title: product.title,
                            price: product.price,
                            quantity: 1,
                        }
                    ];
                } else {
                    const _acc = acc;
                    _acc[productIndex].quantity += 1;
                    return _acc;
                }
            }, []),
            total: state.cart.reduce((acc, cur) => {
                const product = state.productListData.filter(item => item.sku === cur)[0];
                return acc + product.price;                
            }, 0),
        }
    }
);
