import {
  ADD_TO_CART,
  REMOVE_ALL,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

// if(existingProduct) {
//   return {
//     ...state,
//     products: [...state.products, state.products.map(x => {
//       if(x._id === existingProduct._id) {
//       if(x.size.hasOwnProperty(product.size)) {
//         x.size[product.size]++;}
//         else{
//           x.size = {...x.size, [x.size[product.size]]: 1}
//         }
//       }
//     }
//   ]
// }}else {
// return {
//   ...state,
//   products: [...state.products, action.payload],
// };
// }

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.products.find((x) => x._id === product._id);
      if (existingProduct) {
        return {
          ...state,
          products: [
            ...state.products.map((x) => {
              if (x._id === existingProduct._id) {
                if (x.size.hasOwnProperty(product.size)) {
                  x.size[product.size]++;
                } else {
                  x.size[product.size] = 1;
                }
              }

              return x;
            }),
          ],
        };
      }

      return {
        ...state,
        products: [
          ...state.products,
          {
            ...product,
            size: {
              [product.size]: 1,
            },
          },
        ],
      };

    case REMOVE_FROM_CART:
      const removedProductId = action.payload;
      const newArr = state.products.filter(
        (x, index) => x._id !== removedProductId
      );

      return {
        ...state,
        products: [...newArr],
      };

    case REMOVE_ALL:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
