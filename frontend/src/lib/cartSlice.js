import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, {payload}) {
            console.log(payload)
            const existingItem = state.items.find(item => item.product._id == payload._id);

            if(existingItem) {
                existingItem.quantity ++;
            }
            else {
                state.items.push({
                    product: payload,
                    quantity: 1
                });
            }
        },
        addQuantity(state, {payload}) {
            const index = state.items.findIndex(item => item.product._id == payload);
            const item = state.items[index];
            item.quantity ++;
        },
        minusQuantity(state, {payload}) {
            const index = state.items.findIndex(item => item.product._id == payload);
            const item = state.items[index];

            if(item.quantity < 2) {
                state.items.splice(index, 1);
            }
            else {
                item.quantity --;
            }
        },
        clearItems(state) {
            state.items = [];
        }
    }
});

export const { addItem, addQuantity, minusQuantity, clearItems } = cartSlice.actions;

export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: [],
//     },
//     reducers: {
//         addItem(state, {payload}) {
//             console.log(payload)
//             const existingItem = state.items.find(item => item.product._id == payload._id);

//             if(existingItem) {
//                 existingItem.quantity ++;
//             }
//             else {
//                 state.items.push({
//                     product: payload,
//                     quantity: 1
//                 });
//             }
//         },
//         addQuantity(state, {payload}) {
//             const index = state.items.findIndex(item => item.product._id == payload);
//             const item = state.items[index];
//             item.quantity ++;
//         },
//         minusQuantity(state, {payload}) {
//             const index = state.items.findIndex(item => item.product._id == payload);
//             const item = state.items[index];

//             if(item.quantity < 2) {
//                 state.items.splice(index, 1);
//             }
//             else {
//                 item.quantity --;
//             }
//         },
//         clearItems(state) {
//             state.items = [];
//         }
//     }
// });

// export const { addItem, addQuantity, minusQuantity, clearItems } = cartSlice.actions;

// export default cartSlice.reducer;