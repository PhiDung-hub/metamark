import * as React from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import buyNFT from "../pages/explore";

interface ExploreCardProps {
  id: string;
  nftName: string;
  creatorName: string;
  sellerName: string;
  price: string;
  image: string;
}

export default function ExploreCard(props: ExploreCardProps) {
  return (
    <Link href={"/explore/" + props.id} passHref>
      <Card>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="170"
            image={props.image}
            alt="green iguana"
          />
          
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.nftName}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {props.price} MetaMark
            </Typography>

            <Typography
              gutterBottom
              variant="button"
              component="div"
              sx={{ textAlign: "center" }}
            >
              buy
            </Typography>

            {/* <Button  onClick={() => buyNFT(props)}>
                Buy
            </Button> */}

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
