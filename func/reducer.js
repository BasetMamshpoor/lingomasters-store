const sumItems = (items) => {
    // تعداد کل آیتم‌ها
    const itemsCounter = items.reduce(
        (total, product) => total + product.quantity,
        0
    );

    // جمع قیمت بدون تخفیف بر اساس selected_seller.price
    const total = items.reduce(
        (sum, product) => sum + product.selected_seller.price * product.quantity,
        0
    );

    // جمع قیمت بعد از تخفیف: اگر selected_seller.discounted_price موجود باشد، از آن استفاده می‌کنیم
    const total_after_off = items.reduce(
        (sum, product) => {
            const priceToUse = product.selected_seller.discounted_price ?? product.selected_seller.price;
            return sum + priceToUse * product.quantity;
        },
        0
    );

    return { itemsCounter, total, total_after_off };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const newSellerId = action.payload.selected_seller.id;

            if (state.seller_id && state.seller_id !== newSellerId) {
                alert("شما فقط می‌توانید از یک فروشنده در هر سبد خرید استفاده کنید.");
                return state;
            }

            const isInCart = state.items.find(i => i.idp === action.payload.idp);
            if (isInCart) {
                return state;
            }

            const updatedItems = [
                ...state.items,
                { ...action.payload, quantity: 1 }
            ];
            const updatedCart = {
                ...state,
                items: updatedItems,
                seller_id: newSellerId,
                ...sumItems(updatedItems)
            };
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }

        case "REMOVE_ITEM": {
            const newitems = state.items.filter(i => i.idp !== action.payload.idp);
            const updatedCart = {
                ...state,
                items: newitems,
                seller_id: newitems.length ? state.seller_id : null,
                ...sumItems(newitems)
            };
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }

        case "INCREASE": {
            const index = state.items.findIndex(i => i.idp === action.payload.idp);
            if (index === -1) return state;

            const product = state.items[index];
            // اگر موجودی فروشنده کمتر یا مساوی تعداد فعلی باشد
            if (!(product.selected_seller.stock > product.quantity)) {
                return {
                    ...state,
                    ...sumItems(state.items)
                };
            } else {
                const newItems = state.items.map((item, idx) =>
                    idx === index ? { ...item, quantity: item.quantity + 1 } : item
                );
                localStorage.setItem('cart', JSON.stringify({
                    ...state,
                    items: newItems,
                    ...sumItems(newItems)
                }));
                return {
                    ...state,
                    items: newItems,
                    ...sumItems(newItems)
                };
            }
        }

        case "DECREASE": {
            const index = state.items.findIndex(i => i.idp === action.payload.idp);
            if (index === -1) return state;

            // اگر تعداد به زیر ۱ برسد، به REMOVE_ITEM ارجاع داده می‌شود
            if (state.items[index].quantity <= 1) {
                const newitems = state.items.filter(i => i.idp !== action.payload.idp);
                const updatedCart = {
                    ...state,
                    items: newitems,
                    seller_id: newitems.length ? state.seller_id : null,
                    ...sumItems(newitems)
                };
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return updatedCart;
            }

            const newItems = state.items.map((item, idx) =>
                idx === index ? { ...item, quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify({
                ...state,
                items: newItems,
                ...sumItems(newItems)
            }));
            return {
                ...state,
                items: newItems,
                ...sumItems(newItems)
            };
        }

        case "CLEAR": {
            const clearedCart = {
                items: [],
                itemsCounter: 0,
                total: 0,
                total_after_off: 0,
                seller_id: null
            };
            localStorage.setItem('cart', JSON.stringify(clearedCart));
            return clearedCart;
        }

        case "INIT_STORED_CART":
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
