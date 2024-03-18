import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { ReactNode } from "react";

const ModalComponent = (props: {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box className="box-modal">{props.children}</Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
