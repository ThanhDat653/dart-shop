// import {} from '../../../public/assets/images'

const sortOptions = [
   { name: "Most Popular", href: "#", current: true },
   { name: "Best Rating", href: "#", current: false },
   { name: "Newest", href: "#", current: false },
   { name: "Price: Low to High", href: "#", current: false },
   { name: "Price: High to Low", href: "#", current: false },
];
const filters = [
   {
      id: "color",
      name: "Color",
      options: [
         { value: "white", label: "White", checked: false },
         { value: "beige", label: "Beige", checked: false },
         { value: "blue", label: "Blue", checked: false },
         { value: "black", label: "Black", checked: false },
         { value: "green", label: "Green", checked: false },
         { value: "purple", label: "Purple", checked: false },
      ],
   },
   {
      id: "category",
      name: "Category",
      options: [
         { value: "new-arrivals", label: "New Arrivals", checked: false },
         { value: "sale", label: "Sale", checked: false },
      ],
   },
   {
      id: "size",
      name: "Size",
      options: [
         { value: "35", label: "35", checked: false },
         { value: "36", label: "36", checked: false },
         { value: "37", label: "37", checked: false },
         { value: "38", label: "38", checked: false },
         { value: "39", label: "39", checked: false },
         { value: "40", label: "40", checked: false },
         { value: "41", label: "41", checked: false },
         { value: "42", label: "42", checked: false },
         { value: "43", label: "43", checked: false },
         { value: "44", label: "44", checked: false },
      ],
   },
];

export { sortOptions, filters };
