import Button from "@/components/Button";
import SearchBoxWithIcon from "@/components/SearchBoxWithIcon";
import { SearchIcon } from "@/components/svgs/SearchIcon";
import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Collapse, Grid, Stack, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IconContainer } from "../../../../components/IconContainer";
import { CasesEnum } from "../../constants";
import { AddIcon } from "../svgs/AddIcon";
import { CloseIcon } from "../svgs/CloseIcon";
import { FilterIcon } from "../svgs/FilterIcon";

export enum TableView {
  cases = "cases",
  archive = "archive",
}

export default function TopNav({
  handleClickOpen,
  handleFilterClick,
  showFilter,
}: {
  showFilter: boolean;
  handleClickOpen: () => void;
  handleFilterClick: () => void;
}) {
  const router = useRouter();
  const { tab } = useParams();
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack padding={pxToRem(14)}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Stack direction={"row"} alignItems={"center"} gap={pxToRem(48)}>
            <Typography
              variant="subtitle1"
              color={SECONDARY[500]}
              fontWeight={600}
              fontSize={pxToRem(19)}
              onClick={() =>
                router.push(`/dashboard/cases/${CasesEnum.management}`)
              }
              sx={{
                cursor: "pointer",
                color:
                  tab === CasesEnum.management ? SECONDARY[500] : NEUTRAL[300],
              }}
            >
              Case Management
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={pxToRem(8)}
              onClick={() =>
                router.push(`/dashboard/cases/${CasesEnum.archive}`)
              }
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                fontSize={pxToRem(19)}
                sx={{
                  cursor: "pointer",
                  color:
                    tab === CasesEnum.archive ? SECONDARY[500] : NEUTRAL[300],
                }}
              >
                Archive
              </Typography>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  width: pxToRem(24),
                  height: pxToRem(24),
                  background: SECONDARY[500],
                  borderRadius: "50%",
                }}
              >
                <Typography variant="subtitle1" color={NEUTRAL[0]}>
                  1
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={pxToRem(32)}
            justifyContent={{ md: "flex-end", sm: "flex-start" }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
              <Collapse in={open} orientation="horizontal">
                <SearchBoxWithIcon />
              </Collapse>
              {open ? (
                <>
                  <IconContainer
                    tooltip="Close"
                    open={true}
                    onClick={handleChange}
                  >
                    <CloseIcon />
                  </IconContainer>
                </>
              ) : (
                <IconContainer tooltip="Search" onClick={handleChange}>
                  <SearchIcon />
                </IconContainer>
              )}
            </Stack>
            <IconContainer
              tooltip="Filter"
              onClick={handleFilterClick}
              active={showFilter}
            >
              <FilterIcon />
            </IconContainer>
            <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
            >
              Add New Case
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
