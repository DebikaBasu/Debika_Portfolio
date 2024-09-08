import React from "react";
import "./Portfolio.css";
import { Box, Card, CardContent, Typography, CardActions } from "@mui/material";
import Im from "../../Assets/flipkart_clone.png";
//  import VDF from "../../Assets/Analog_clock.png";

import Ct from "../../Assets/freeCodeCamp_clone.png";
import gpt from "../../Assets/Sorting_visualizer.png";
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
        <Box width="350px" sx={{ margin: "0 auto" }}>
          <Card style={boxstyle}>
            <CardContent>
              <img src={Im} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Flipkart Clone with the help of MERN STACK
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/DebikaBasu/E-KartCom"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://ezeptkart-ecom.onrender.com/"
                  className="btn btn-primary"
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
              <img
                src={gpt}
                alt=""
                className="portfolio_img"
                overflow="hidden"
              />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                Sorting visualizer
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/DebikaBasu/Sorting-Visualizer"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://spectacular-pony-d558db.netlify.app/"
                  className="btn btn-primary"
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
              <img src={Ct} alt="" className="portfolio_img" />
              <Typography
                gutterbottom
                variant="h5"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                FreeCodeCamp Website Clone
              </Typography>
              <CardActions sx={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/DebikaBasu/FreeCodeCamp"
                  style={{ marginRight: "10px" }}
                >
                  Github
                </a>
                <a
                  href="https://freecodecamp-clone.onrender.com/"
                  className="btn btn-primary"
                >
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
