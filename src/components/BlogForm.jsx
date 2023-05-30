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
  import React from "react";
  
  const BlogForm = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography>New Blog</Typography>
        <FormControl sx={{ gap: 2 }}>
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
            type="text"
            variant="outlined"
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ gap: 2 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
  
          <TextField
            label="Content"
            name="content"
            id="img-content"
            type="text"
            variant="outlined"
            required
            multiline
            size="medium"
            rows={4}
          />
          <Button variant="contained" >ADD NEW BLOG</Button>
        </FormControl>
      </Box>
    );
  };
  
  export default BlogForm;
  