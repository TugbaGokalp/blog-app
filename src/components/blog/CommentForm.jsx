import { TextField, Button, Box } from "@mui/material";

import { useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";

const CommentForm = ({ postId }) => {
  const { addComment } = useBlogCalls();

  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { post: postId, content: comment };
    addComment(`comments/${postId}`, data);
    e.target.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Comment"
        name="comment"
        id="comment"
        type="text"
        variant="outlined"
        multiline
        size="medium"
        rows={4}
        fullWidth
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add New Comment
      </Button>
    </Box>
  );
};

export default CommentForm;