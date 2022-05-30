import { Box, Grid, Rating, Typography } from "@mui/material";
import ButtonComponent from "../../UI/Input/Button/Button";

const Product = ({ product }) => {
  return (
    <Grid item md={6}>
      <Box
        sx={{
          height: 300,
          border: 1,
          borderRadius: 5,
          borderColor: "skyblue",
        }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Box
              component="img"
              src={product.image}
              sx={{ width: "100%", height: 200 }}
              m={5}
            ></Box>
          </Grid>
          <Grid item>
            <Box
              component="div"
              sx={{ marginLeft: 10, marginTop: 5, width: 350 }}
            >
              <ButtonComponent>{product.category}</ButtonComponent>
              <Typography sx={{ fontWeight: "bold", color: "blue" }}>
                {product.title}
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Product;
