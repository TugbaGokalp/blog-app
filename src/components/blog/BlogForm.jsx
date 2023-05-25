import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";


const BlogForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
         width:"100%"
      }}
      component="form"
     
    >
      <Typography variant="h5" align="center" sx={{ fontWeight: 800 }}>
        New Blog
      </Typography>

      <TextField
        label="Title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        required
      />
      <TextField
        label="Image Url"
        name="img-url"
        id="img-url"
        type="url"
        variant="outlined"
        required
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Categories"
          //onChange={handleChange}
      
        >
          <MenuItem value={10}>Trivia</MenuItem>
          <MenuItem value={20}>Travel</MenuItem>
          <MenuItem value={30}>Web Development</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Status"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Please Chose...</MenuItem>
          <MenuItem value={20}>Draft</MenuItem>
          <MenuItem value={30}>Published</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Content"
        name="content"
        id="content"
        type="text"
        variant="outlined"
        required
        multiline
        size="medium"
        rows={4}
      />

      <Button variant="contained" >ADD NEW BLOG</Button>
      

    </Box>
  );
};

export default BlogForm;