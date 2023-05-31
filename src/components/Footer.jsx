import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
  
      
      <Box
        align="center"
        p={1}
        mt={10}
        component="div"
        display="flex"
        justifyContent="center"
        sx={{
          // marginTop: 30,
          width: "100%",
          backgroundColor: "#80cbc4",
          color: "white",
          position: "fixed",
          bottom: 0,
          textAlign:"center",
        }}
      >
        
        <Typography sx={{ fontSize: 12 }}>Developed by Tugba Gokalp ✨ </Typography>
        <Typography sx={{ fontSize: 12 }}>
          Copyright ©️ Tugba Gokalp {new Date().getFullYear()}
        </Typography>
      </Box>
    
  );
};

export default Footer;
