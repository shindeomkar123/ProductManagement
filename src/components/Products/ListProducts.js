import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import useHttp from "../Hooks/use-http";
import Product from "./Product";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const transformData = (data) => {
    setProducts(data);
  };

  const {
    sendRequest: getProducts,
    isLoading,
    error,
  } = useHttp(
    {
      url: "https://fakestoreapi.com/products?limit=4",
      headers: { "Content-Type": "application/json" },
    },
    transformData
  );

  useEffect(() => {
    console.log("useeffect");
    getProducts();
  }, []);

  return (
    <Box mr={10} ml={10}>
      <Grid container spacing={4}>
        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading && products.map(product=><Product product={product}/>)}
      </Grid>
    </Box>
  );
};

export default ListProducts;
