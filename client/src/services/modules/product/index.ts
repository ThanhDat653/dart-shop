import { ENDPOINTS } from "@/constants/endpoint";
import { Axios } from "@/utils/method";

const productService = {
   getAll: async () => {
      return await Axios.axiosGet(ENDPOINTS.PRODUCT.LIST);
   },
   getProductById: async (payload: string) => {
      return await Axios.axiosGet(ENDPOINTS.PRODUCT.BY_ID, {
         params: payload,
      });
   },
};
