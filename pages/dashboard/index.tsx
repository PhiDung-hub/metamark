import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import '../App.css';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { width } from "@mui/system";
import FadeIn from "react-fade-in";
import { WithLogin } from "../../components/AuthLogin";

const Profile = () => {
  const [openEmail, setOpenEmail] = React.useState(false);
  const handleOpenEmail = () => setOpenEmail(true);
  const handleCloseEmail = () => setOpenEmail(false);

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleOpenPassword = () => setOpenPassword(true);
  const handleClosePassword = () => setOpenPassword(false);

  return (
    <FadeIn>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <div
          style={{
            marginLeft: 35,
            marginTop: 40,
            marginBottom: 50,
            flexGrow: 1,
          }}
          className="container"
        >
          <Card sx={{ maxWidth: "90%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccountCircleIcon style={{ width: 200, height: 200 }} />
            </div>

            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: 20, textAlign: "center" }}
              >
                <b>John Tan 12345</b>
              </Typography>
              <Typography style={{ textAlign: "center" }}>5 assets</Typography>
              <Typography style={{ textAlign: "center" }}>
                0 listings
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          style={{ marginTop: 40, flexGrow: 2, marginRight: 30 }}
          className="container"
        >
          <Card>
            <div
              style={{
                display: "flex",
                backgroundColor: "#4287f5",
                height: 40,
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  fontSize: 20,
                  color: "white",
                }}
              >
                My profile
              </Typography>
            </div>
            <div
              style={{
                marginLeft: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: 15,
              }}
            >
              {/* <header className='jumbotron'>
          <h3>
            <strong>My Profile</strong>
          </h3>
        </header> */}
              {/* <hr style={{ marginRight: 15, marginBottom: 20 }} /> */}
              {/* <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{' '}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
              <div></div>

              <Typography>
                <b>Username</b>: JohnTan12345
              </Typography>
              <Typography>
                <b>MetaMask Account</b>: ABC123456
              </Typography>
              <Typography>
                <b>Email</b>: sampleEmail@gmail.com
              </Typography>

              <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <Button variant="outlined" onClick={handleOpenEmail}>
                  Update email
                </Button>
                <Button variant="outlined" onClick={handleOpenPassword}>
                  Update password
                </Button>
              </div>
              <div></div>
            </div>
          </Card>
          <Card style={{ marginTop: 30 }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#4287f5",
                height: 40,
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  fontSize: 20,
                  color: "white",
                }}
              >
                Inventory
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              {/* these card will be later replaced by card components */}
              <div></div>
              <Card
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  marginBottom: 20,
                  flexGrow: 1,
                }}
                variant="outlined"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    height={150}
                    width={150}
                    src="https://coffeebros.com/wp-content/uploads/2021/10/astronaut-background.jpg"
                  />
                </div>
                <Typography
                  style={{ textAlign: "center", backgroundColor: "#cccccc" }}
                >
                  NFT 1
                </Typography>
              </Card>

              <Card
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  flexGrow: 1,
                }}
                variant="outlined"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    height={150}
                    width={150}
                    src="https://lh3.googleusercontent.com/kBOdajetRUcjPlarA43sXgfBwB0Ad3l5taW2idK-XVwoD9qR_dpzyhR4zl-2K_IRhgHGHa7jQD4jeBxdxqnxf0B_7FOo5jBYsiSlbQ=w600"
                  />
                </div>
                <Typography
                  style={{ textAlign: "center", backgroundColor: "#cccccc" }}
                >
                  NFT 2
                </Typography>
              </Card>
              
              <Card
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  flexGrow: 1,
                }}
                variant="outlined"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <Image
                    height={150}
                    width={150}
                    src="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                  />
                </div>
                <Typography
                  style={{ textAlign: "center", backgroundColor: "#cccccc" }}
                >
                  NFT 3
                </Typography>
              </Card>

              <div></div>
            </div>
          </Card>
          {/* <div> */}
          <Card style={{ marginTop: 30, marginBottom: 50 }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#4287f5",
                height: 40,
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                  fontSize: 20,
                  color: "white",
                }}
              >
                Transaction History
              </Typography>
            </div>
            <div
              style={{
                marginLeft: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: 10,
              }}
            >
              <div></div>
              Details of transaction history will display here.
              <div></div>
            </div>
          </Card>
          {/* </div> */}
        </div>
      </div>
    </FadeIn>
  );
};

export default WithLogin(Profile);
