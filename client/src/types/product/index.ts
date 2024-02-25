export type TProduct = {
   id: string;
   name: string;
   description: string;
   price: number;
   sizes: TSize[];
   color: string;
   image: string;
};

export type TSize = {
   size: string;
   value: number;
};

export type TType = {
   id: string;
   name: string;
};
