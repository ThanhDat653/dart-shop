import React, { useEffect } from "react";
import { Slider } from "./Slider";
import Feature from "./Feature";

const RootSection = () => {
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(
               "http://localhost:8000/api/v1/products"
            );
            const result = await response.json();
            console.log(result);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <Slider></Slider>
         <Feature></Feature>
      </>
   );
};

export default RootSection;
