import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box align="center" p={2} component="div" sx={{backgroundColor:"#880e4f", color:"white"}}>
        <Typography>Developed by Tugba Gokalp</Typography>
        <Typography>Copyright ©️ Clarusway {new Date().getFullYear()}</Typography>
    </Box>
  )
}

export default Footer