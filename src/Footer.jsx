import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
export const Footer = () => {
  return <footer>
    <Box>
      <Container>
        <Box textAlign="center" pt={{xs:3,sm:3}} pb={{xs:3,sm:3}}>
          <p>&copy; Made By Altaf Mansuri &reg; {new Date().getFullYear()} </p>
        </Box>
      </Container>
    </Box>
  </footer>
};
