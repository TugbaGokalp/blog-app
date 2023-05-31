import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyles.jsx";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function DeleteModal({ handleClose, handleOpen, open, id }) {
  const { deleteBlog } = useBlogCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteBlog(`blogs/${id}`);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            Delete Blog
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "red", mr: 2 }}
            onClick={handleSubmit}
          >
            Delete Blog
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "green" }}
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
