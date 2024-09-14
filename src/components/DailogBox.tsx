import { pxToRem } from "@/theme";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import React from "react";

interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: React.ReactNode;
}

export default function AppDialog(props: SimpleDialogProps) {
  const { onClose, open, children } = props;

  const handleClose = () => {
    onClose("");
  };

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{
            sx: {
             borderRadius: pxToRem(24),
          }
      }}>
        {children}
      </Dialog>
    );
}