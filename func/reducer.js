const sumItems = (items) => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)

    let total = items.reduce((total, product) => total + product.price * product.quantity, 0)

    let total_after_off = items.reduce((total, product) => total + (product.off_price || product.price) * product.quantity, 0)

    return {itemsCounter, total, total_after_off}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const isInCart = state.items.find(i => i.idp === action.payload.idp)
            if (isInCart) {
                return state
            }
            state.items.push({
                ...action.payload,
                quantity: 1
            })
            localStorage.setItem('cart', JSON.stringify({
                ...state,
                items: [...state.items],
                ...sumItems(state.items)
            }))
            return {
                ...state,
                items: [...state.items],
                ...sumItems(state.items)
            }
        case "REMOVE_ITEM":
            const newitems = state.items.filter(i => i.idp !== action.payload.idp)
            localStorage.setItem('cart', JSON.stringify({
                ...state,
                items: [...newitems],
                ...sumItems(newitems)
            }))
            return {
                ...state,
                items: [...newitems],
                ...sumItems(newitems)
            }
        case "INCREASE": {
            const index = state.items.findIndex(i => i.idp === action.payload.idp)
            if (index === -1) return state
            const product = state.items[index];
            if (!(product.selected_seller.stock > product.quantity)) {
                return {
                    ...state,
                    ...sumItems(state.items)
                }
            } else {
                // Create a new items array to avoid mutating state directly
                const newItems = state.items.map((item, idx) =>
                    idx === index ? {...item, quantity: item.quantity + 1} : item
                )
                localStorage.setItem('cart', JSON.stringify({
                    ...state,
                    items: newItems,
                    ...sumItems(newItems)
                }))
                return {
                    ...state,
                    items: newItems,
                    ...sumItems(newItems)
                }
            }
        }
        case "DECREASE":
            const Index2 = state.items.findIndex(i => i.idp === action.payload.idp)
            state.items[Index2].quantity--
            localStorage.setItem('cart', JSON.stringify({
                ...state,
                ...sumItems(state.items)
            }))
            return {
                ...state,
                ...sumItems(state.items)
            }

        case "CLEAR":
            localStorage.setItem('cart', JSON.stringify({
                items: [],
                itemsCounter: 0,
                total: 0,
                total_after_off: 0,
            }))
            return {
                items: [],
                itemsCounter: 0,
                total: 0,
                total_after_off: 0,
            }
        case "INIT_STORED_CART":
            return action.payload

        default:
            return state
    }
}

export default reducer