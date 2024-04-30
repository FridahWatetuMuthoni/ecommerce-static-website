import { Button, Typography } from "@mui/material";
import useGlobalContext from "../../hooks/useGlobalContext";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  // BannerShopButton,
  BannerTitle,
} from "../../styles/Banner";
import banner from "../../assets/banner.png";
function Banner() {
  const { mode } = useGlobalContext();

  return (
    <BannerContainer mode={mode}>
      <BannerImage src={banner}></BannerImage>
      <BannerContent>
        <Typography variant="h6">Huge Collections</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          debitis, ducimus exercitationem optio assumenda nam alias odit unde!
          Quam saepe voluptatem repellat.
        </BannerDescription>
        <Button
          sx={{
            padding: "10px 0px",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          fullWidth
          variant="contained"
          color="primary"
        >
          Shop Now
        </Button>
        {/* <BannerShopButton color="primary">Shop Now</BannerShopButton> */}
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
