import { useReducer, createContext, useContext } from "react";
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);
export function useCart() {
   return useContext(CartContext);
}

export function useCartDispatch() {
   return useContext(CartDispatchContext);
}

function CartContextProvider({ children }) {
   const initialCart = [];
   const [cart, dispatch] = useReducer(CartReducer, initialCart);

   return (
      <CartContext.Provider value={cart}>
         <CartDispatchContext.Provider value={dispatch}>
            {children}
         </CartDispatchContext.Provider>
      </CartContext.Provider>
   );
}

function CartReducer(state, action) {
   switch (action.type) {
      case "add_to_cart":
         if (state?.find((item) => item.id === action.payload.id))
            return state.map((item) => {
               if (
                  item.id === action.payload.id &&
                  item.size === action.payload.size
               ) {
                  return {
                     ...item,
                     quantity: item.quantity + action.payload.quantity,
                  };
               }
               return item;
            });

         return [action.payload, ...state];

      default:
   }
}

export default CartContextProvider;
