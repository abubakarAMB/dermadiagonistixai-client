"use client";
import AppDialog from "@/components/DailogBox";
import DeleteCase from "@/containers/cases/components/DeleteCase";
import ShareModal from "@/containers/cases/components/share";
import UploadcaseModal from "@/containers/cases/components/uploadCase";
import Header from "@/containers/header";
import Sidebar from "@/containers/sidebar";
import { deleteModalVar, shareModalVar, uploadModalVar } from "@/state/modal";
import { useReactiveVar } from "@apollo/client";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import '../globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const uploadModalState = useReactiveVar(uploadModalVar);
  const deleteModalState = useReactiveVar(deleteModalVar);
  const shareModalState = useReactiveVar(shareModalVar);
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = React.useState<boolean>(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display: "flex", width: "100%", overflowX: "hidden" }}>
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        expanded={expanded}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 0, sm: 3 },
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            // p: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Box>
      <AppDialog open={uploadModalState} onClose={() => uploadModalVar(false)}>
        <UploadcaseModal />
      </AppDialog>
      <AppDialog open={deleteModalState} onClose={() => deleteModalVar(false)}>
        <DeleteCase />
      </AppDialog>
      <AppDialog open={shareModalState} onClose={() => shareModalVar(false)}>
        <ShareModal onClose={() => shareModalVar(false)} />
      </AppDialog>
    </Box>
  );
}
