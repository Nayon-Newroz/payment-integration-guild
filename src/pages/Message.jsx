import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Success from "../assets/images/Success.png";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation } from "react-router-dom";

const Message = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const order_id = searchParams.get("order_id");
  const amount = searchParams.get("amount");

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="space-between"
        style={{
          minHeight: "calc(100vh - 85px)",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            padding: "40px 20px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <img
            src={Success}
            alt=""
            width="80px"
            style={{ display: "block", margin: "auto" }}
          />
          <h1 style={{ color: "#2d335b", fontWeight: 400 }}>
            Your Order Successfully Confirmed
          </h1>
          {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={2}
          >
            <Grid item style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "20px",
                  color: "#333",
                  marginTop: 0,
                }}
              >
                Receiver : {name}
              </p>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
            <p
                style={{
                  fontSize: "20px",
                  color: "#333",
                  marginTop: 0,
                }}
              >
            ||
              </p>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "20px",
                  color: "#333",
                  marginTop: 0,
                }}
              >
                Amount : {amount} Tk
              </p>
            </Grid>
          </Grid> */}
          <p
            style={{
              fontSize: "18px",
              color: "#333",
            }}
          >
           Order ID : {order_id}
          </p>
          <Button
            variant="contained"
            disableElevation
            style={{
              background: "none",
              textTransform: "none",
              fontSize: "16px",
              color: "#333",
            }}
            component={Link}
            to="/"
            startIcon={<KeyboardBackspaceIcon fontSize="large" />}
          >
            Back To Home Page
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Message;
