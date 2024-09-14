import SearchBoxWithIcon from "@/components/SearchBoxWithIcon";
import { SECONDARY, pxToRem } from "@/theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Divider,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useMemo } from "react";
import AccountPopover from "./AccountPopover";
import { BellIcon } from "./svg/BellIcon";

export default function Header({
  drawerWidth,
  handleDrawerToggle,
  expanded,
}: {
  drawerWidth: number;
  expanded: Boolean;
  handleDrawerToggle: () => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const componsedDrawerWidth = useMemo(
    () => (!expanded ? 80 : drawerWidth),
    [expanded, drawerWidth]
  );


  const SearchBar = () => (
    <SearchBoxWithIcon
      inputStyles={{
        background: "transparent",
      }}
    />
  );

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        //add smooth transition
        transition: "all 0.3s ease",
        width: isMobile ? "100%" : `calc(100% - ${componsedDrawerWidth}px)`,
        ml: isMobile ? 0 : `${componsedDrawerWidth}px`,
        //add animation
        // zIndex: theme.zIndex.drawer + 1,
        // backgroundColor: "white",
        pt: 1,
        boxShadow: "none",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: pxToRem(76),
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {!isMobile && (
            <>
              <Stack gap={pxToRem(4)}>
                <Typography variant="caption" color={SECONDARY[300]}>
                  Welcome
                </Typography>
                <Typography
                  variant="body2"
                  color={SECONDARY[500]}
                  fontWeight={700}
                  fontSize={pxToRem(28)}
                  lineHeight={pxToRem(33.6)}
                >
                  Justin Collin
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={pxToRem(24)}>
                <SearchBar />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={pxToRem(32)}
                >
                  <BellIcon />
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <AccountPopover />
                </Stack>
              </Stack>
            </>
          )}
          {isMobile && (
            <Stack direction={"row"} alignItems={"center"} gap={pxToRem(32)}>
              <BellIcon />
              <Divider orientation="vertical" variant="middle" flexItem />
              <AccountPopover />
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
