import { ROUTE_PARAMS } from "./path";

export const ENDPOINTS = {
   PRODUCT: {
      LIST: "product",
      BY_NAME: `product/${ROUTE_PARAMS.PRODUCT_NAME}`,
      BY_ID: `product/${ROUTE_PARAMS.PRODUCT_ID}`,
   },
};
