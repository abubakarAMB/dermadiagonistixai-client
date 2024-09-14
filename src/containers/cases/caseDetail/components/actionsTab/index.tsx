import { Button } from "@/components/Button";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import SearchBoxWithIcon from "@/components/SearchBoxWithIcon";
import { UserAvatar } from "@/components/UserAvatar";
import { SearchIcon } from "@/components/svgs/SearchIcon";
import FilterDrop from "@/containers/cases/components/FilterDrop";
import { CloseIcon } from "@/containers/cases/components/svgs/CloseIcon";
import { FilterIcon } from "@/containers/cases/components/svgs/FilterIcon";
import { AddIcon } from "@/containers/sidebar/svg/AddIcon";
import { shareModalVar } from "@/state/modal";
import { NEUTRAL, pxToRem } from "@/theme";
import { useReactiveVar } from "@apollo/client";
import { Collapse, Divider, Grid, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconContainer } from "../../../../../components/IconContainer";
import ShareIcon from "../../../../../components/svgs/ShareIcon";
import { CaseDetailEnum } from "../../constants";
import {
  MaintenanceView,
  maintenanceViewVar,
  showFilterVar,
} from "../../state";
import { GridIcon } from "../svg/GridIcon";
import { ListIcon } from "../svg/ListIcon";

export enum TableView {
  cases = "cases",
  archive = "archive",
}

export enum MenuEnum {
  grid = "grid",
  list = "list",
  share = "share",
  filter = "filter",
}

export default function ActionsTab() {
  const maintenanceView = useReactiveVar(maintenanceViewVar);
  const showFilter = useReactiveVar(showFilterVar);
  const { tab } = useParams();
  const [open, setOpen] = useState(false);
  // const [selectedMenu, setSelectedMenu] = useState('');

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const handleShareClick = () => {
    console.log("Share clicked");
    shareModalVar(true);
  };

  useEffect(() => {
    console.log("maintenanceView", maintenanceView);
  }, [maintenanceView]);

  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      sx={{
        borderTop: `1px solid ${NEUTRAL[900]}`,
        borderBottom: `1px solid rgba(241, 243, 243, 1)`,
        height: { sm: "auto", md: pxToRem(80) },
        gap: { xs: pxToRem(24), sm: pxToRem(0) },
        py: { xs: pxToRem(24), sm: pxToRem(0) },
        px: { xs: pxToRem(16), sm: pxToRem(16) },
      }}
    >
      <Grid item xs={12} sm={4}>
        <UserAvatar title="Adam Mills" subtitle="Case Number: 1234-A856" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={!open ? pxToRem(8) : pxToRem(16)}
          justifyContent={{ xs: "flex-start", sm: "flex-end" }}
        >
          {tab === CaseDetailEnum.maintenance && (
            <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
              <IconContainer
                tooltip="List view"
                onClick={() => maintenanceViewVar(MaintenanceView.listView)}
                active={maintenanceView == MaintenanceView.listView}
              >
                <ListIcon />
              </IconContainer>
              <IconContainer
                tooltip="Grid view"
                onClick={() => maintenanceViewVar(MaintenanceView.gridView)}
                active={maintenanceView == MaintenanceView.gridView}
              >
                <GridIcon />
              </IconContainer>
              <Divider
                orientation="vertical"
                sx={{
                  height: pxToRem(33.5),
                  width: pxToRem(1),
                  backgroundColor: NEUTRAL[900],
                  // margin: { xs: `0 ${pxToRem(8)}`, sm: `0 ${pxToRem(16)}` },
                }}
              />
            </Stack>
          )}
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={tab === CaseDetailEnum.reports ? pxToRem(16) : pxToRem(8)}
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
            {tab === CaseDetailEnum.reports ? (
              <IconContainer
                tooltip="Filter"
                onClick={() => showFilterVar(!showFilter)}
                active={showFilter}
              >
                <FilterIcon />
              </IconContainer>
            ) : (
              <IconContainer tooltip="Share" onClick={handleShareClick}>
                <ShareIcon />
              </IconContainer>
            )}

            {tab === CaseDetailEnum.medicalHistory && (
              <Button onClick={() => showFilterVar(!showFilter)}>
                View by
              </Button>
            )}
            {tab === CaseDetailEnum.maintenance && (
              <ButtonWithIcon
                text="Upload new file"
                icon={<AddIcon />}
                onClick={() => ""}
                containerStyles={{
                  bgcolor: "#022625",
                  height: pxToRem(48),
                  width: "auto",
                  py: pxToRem(12),
                  px: pxToRem(20),
                  gap: pxToRem(8),
                  borderRadius: pxToRem(16),
                  color: NEUTRAL[0],
                }}
              />
            )}
            {tab === CaseDetailEnum.reports && (
              <FilterDrop
                title="Claim Related"
                options={["Claim Related", "Privileged", "Yet to be decided"]}
              />
            )}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
