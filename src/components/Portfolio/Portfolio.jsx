import React from "react";
import "./Portfolio.css";
import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import Im from "../../Assets/flipkart_clone.png";


import Ct from "../../Assets/freeCodeCamp_clone.png";
// import airpods from "../../Assets/Airpods.jpg";
// import crypto from "../../Assets/crypto.png";

const boxstyle = {
  height: "100%",
  color: "white",
  backgroundColor: "#2c2c6c",
};

function Portfolio() {
  return (
    <section id="portfolio" data-aos="fade-up" data-aos-duration="3000">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_cards">
        <Box
          width="350px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the box
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={Im}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                Flipkart Clone with the help of MERN STACK
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/DebikaBasu/E-KartCom"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://ezeptkart-ecom.onrender.com/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        


        <Box
          width="350px"
          sx={{
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            borderRadius: "12px", // Rounded corners for a smoother appearance
            overflow: "hidden", // Ensures content stays within rounded corners
            backgroundColor: "#f3f4f6", // Light background color for the card
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              transform: "translateY(-5px)", // Lifts card on hover for an interactive feel
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
            },
          }}
        >
          <Card
            style={{
              padding: "16px",
              textAlign: "center",
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#ffffff", // White background for contrast within the card
            }}
          >
            <CardContent>
              <img
                src={Ct}
                alt=""
                className="portfolio_img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px", fontWeight: "bold", color: "#333" }} // Darker color for title
              >
                FreeCodeCamp Website Clone
              </Typography>
              <CardActions
                sx={{ marginTop: "10px", justifyContent: "center" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="https://github.com/DebikaBasu/FreeCodeCamp"
                  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "500",
                  }}
                >
                  Github
                </a>
                <a
                  href="https://freecodecamp-clone.onrender.com/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#1976d2",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145a9e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
                >
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>

        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={VDF} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Analog clock using html,css and JavaScript
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/DebikaBasu/Analog_clock"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a href="https://debikabasu.github.io/Analog_clock/" className="btn btn-primary">
                  Live Demo
                </a>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
        
        
        
      </div>
    </section>
  );
}

export default Portfolio;
