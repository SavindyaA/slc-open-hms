"use client";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import profile from "../public/images/Profile.png";

const Testimonials = () => {
  const [value, setValue] = React.useState(4);
  
  const accountStatsStyle = {
    marginTop: "31.682px", // Half of the userAvatar height
    width: "90%",
    height: "auto",
    borderRadius: "18px",
    paddingTop: "36px",
    marginLeft: { xs: "5%", md: "none" },
  };

  const accountContainerStyle = {
    position: "relative",
    top: "15%",
  };

  const userAvatarContainerStyle = {
    position: "absolute",
    top: "-31.682px", // Half of the userAvatar height
    left: "calc(12% - 31.682px)", // Half of the userAvatar width
    padding: "8px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  };

  const typographyh5Style = {
    color: "#0C111F",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    lineHeight: "28px",
    fontStyle: "normal",
    fontWeight: "700",
  };

  const typographyh1Style = {
    color: "#0C111F",
    fontFamily: "Inter",
    fontSize: "48px",
    lineHeight: "130%",
    fontStyle: "normal",
    letterSpacing: "-0.48px",
    fontWeight: "700",
    marginTop: "95px",
    marginLeft: { xs: "5%", md: "none" },
  };

  const typographyCardStyle = {
    color: "#0C111F",
    fontFamily: "Inter",
    fontSize: "18px",
    lineHeight: "180%",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "-0.18px",
  };

  const typographyParagraphStyle = {
    color: "#0C111F",
    fontFamily: "Inter",
    fontSize: "20px",
    lineHeight: "180%",
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: "5px",
    marginBottom: "95px",
    marginLeft: { xs: "5%", md: "none" },
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Box sx={accountContainerStyle}>
            <Box sx={userAvatarContainerStyle}>
              <Image src={profile} alt="Avatar" width={64} height={64} />
            </Box>
            <Card elevation={0} sx={accountStatsStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" style={typographyh5Style}>
                  Jhone Lown
                </Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography variant="body2" style={typographyCardStyle}>
                  “A very pleasant experience, plus the service is very
                  friendly, recommended for those who want to try!”
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} paddingRight={{ xs: "16px", md: "32px" }}>
          <Box>
            <Typography variant="h1" sx={typographyh1Style}>
              Testimonials Travala Customers
            </Typography>
            <Typography variant="body2" sx={typographyParagraphStyle}>
              What our customers have to say about our service, check below!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Testimonials;
