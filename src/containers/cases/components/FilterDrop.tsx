import SearchBoxWithIcon from "@/components/SearchBoxWithIcon";
import { GREEN, NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
import {
  Box,
  ClickAwayListener,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CarretDown from "./svgs/CarretDown";
import { CarretUp } from "./svgs/CarretUp";
import { CloseIcon } from "./svgs/CloseIcon";
import { ClaimStatusPill } from "./table/ClaimStatus";

export default function FilterDrop({
  title,
  options,
  isClaimStatus,
  search,
}: {
  title: string;
  options: string[];
  isClaimStatus?: boolean;
  search?: boolean;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleRemoveOption = (e: any) => {
    e.stopPropagation();
    setSelectedOption(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Grid item xs={12} sm={"auto"}>
        <Stack sx={{ position: "relative", minWidth: "max-content" }}>
          <Stack
            onClick={handleClick}
            direction={"row"}
            alignItems={"center"}
            className={selectedOption ? "active" : ""}
            sx={{
              gap: pxToRem(8),
              py: pxToRem(10),
              px: pxToRem(16),
              border: `1px solid ${NEUTRAL[300]}`,
              borderRadius: pxToRem(12),
              maxHeight: { sm: pxToRem(48) },
              cursor: "pointer",
              "&:hover": {
                background: PRIMARY[25],
                border: `1px solid ${NEUTRAL[300]}`,
              },
              "&.active": {
                background: PRIMARY[50],
                border: `1px solid ${NEUTRAL[300]}`,
              },
            }}
          >
            <Typography variant="subtitle1" color={GREEN[400]}>
              {selectedOption ?? title}
            </Typography>
            {!selectedOption ? (
              <>{open ? <CarretUp /> : <CarretDown />}</>
            ) : (
              <IconButton onClick={handleRemoveOption}>
                <CloseIcon />
              </IconButton>
            )}
          </Stack>
          {open && (
            <Stack
              sx={{
                background: NEUTRAL[0],
                boxShadow: "0px 0px 20px rgba(23, 26, 28, 0.08)",
                borderRadius: pxToRem(16),
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: pxToRem(8),
                gap: pxToRem(8),
                position: "absolute",
                top: "120%",
                zIndex: 30,
                width: "100%",
                minWidth: "max-content",
              }}
            >
              {search && (
                <SearchBoxWithIcon
                  boxStyles={{ height: pxToRem(40), width: "100%" }}
                  inputProps={{
                    placeholder: "Search here",
                  }}
                />
              )}
              {options.map((option: string, index) => (
                <Stack
                  key={index}
                  onClick={() => handleSelectOption(option.toString())}
                  width="100%"
                  // height={pxToRem(32)}
                >
                  {isClaimStatus ? (
                    <ClaimStatusPill claimStatus={option} isFilter={true} />
                  ) : (
                    <Box
                      sx={{
                        padding: `${pxToRem(8)}`,
                        borderRadius: pxToRem(10),
                        ":hover": {
                          background: PRIMARY[25],
                          borderRadius: pxToRem(10),
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography variant="subtitle1" color={SECONDARY[300]}>
                        {option}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </Grid>
    </ClickAwayListener>
  );
}
