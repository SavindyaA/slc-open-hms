"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  Checkbox,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import img from "../../public/images/ImagePlaceholder.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const GuestRoom = () => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "var(--light-separators-colors-secondary, #E1E1E1)",
          maxWidth: "400px",
          height: "auto",
        }}
      >
        <Box
          style={{
            position: "relative",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <Image
            src={img}
            alt="test"
            width={400}
            height={318}
            style={{
              width: "100%",
              height: "318px",
              // width: "auto",
              // borderRadius: "20px 20px 0px 0px",
              flexShrink: 0,
            }}
          />
        </Box>
        <CardContent>
          <Box sx={{ paddingTop: "10px", marginBottom: "10%" }}>
            <Typography
              variant="h5"
              style={{
                color: "var(--light-text-color-title, #11142D)",
                fontFamily: "Lora",
                fontSize: "24px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.12px",
                fontWeight: "700",
                // marginTop: "14px",
                // marginLeft: "20px",
              }}
            >
              President Luxury Double Room View NY City
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "var(--light-text-color-body-1, #515151)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "16px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.08px",
                fontWeight: "600",
                marginTop: "22px",
                // marginLeft: "20px",
              }}
            >
              14 February 2021
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 34 },
                  color: "#9A9AB0",
                  "&.Mui-checked": {
                    color: "#9A9AB0",
                  },
                  marginTop: "10px",
                }}
              />
              <Typography
                variant="body1"
                style={{
                  color: "var(--light-text-color-body-2, #9A9AB0)",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "125%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "400",
                  marginTop: "26px",
                }}
              >
                1 Room
              </Typography>
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 34 },
                  color: "#9A9AB0",
                  "&.Mui-checked": {
                    color: "#9A9AB0",
                  },
                  marginTop: "10px",
                }}
              />
              <Typography
                variant="body1"
                style={{
                  color: "var(--light-text-color-body-2, #9A9AB0)",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "125%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "400",
                  marginTop: "26px",
                }}
              >
                2 Guest
              </Typography>
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 34 },
                  color: "#9A9AB0",
                  "&.Mui-checked": {
                    color: "#9A9AB0",
                  },
                  marginTop: "10px",
                }}
              />
              <Typography
                variant="body1"
                style={{
                  color: "var(--light-text-color-body-2, #9A9AB0)",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16px",
                  lineHeight: "125%",
                  fontStyle: "normal",
                  letterSpacing: "0.08px",
                  fontWeight: "400",
                  marginTop: "26px",
                }}
              >
                1 Night
              </Typography>
            </Box>
            <Typography
              variant="body2"
              style={{
                color: "var(--light-text-color-body-1, #515151)",
                fontFamily: "Mulish, sans-serif",
                fontSize: "14px",
                lineHeight: "130%",
                fontStyle: "normal",
                letterSpacing: "0.112px",
                fontWeight: "600",
                marginTop: "14px",
                // marginLeft: "18px",
              }}
            >
              Total Price
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "var(--light-primary-color-70, #27343F)",
                fontFamily: "Lora",
                fontSize: "39px",
                lineHeight: "120%",
                fontStyle: "normal",
                letterSpacing: "0.195px",
                fontWeight: "700",
                marginTop: "4px",
                // marginLeft: "18px",
              }}
            >
              $59
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default GuestRoom;
