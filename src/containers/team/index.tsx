"use client";
import Button from "@/components/Button";
import FormDialog from "@/components/FormDialog";
import { SearchIcon } from "@/components/svgs/SearchIcon";
import { NEUTRAL, pxToRem, SECONDARY } from "@/theme";
import { Add } from "@mui/icons-material";
import { Badge, Box, OutlinedInput, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import TeamInvitation from "./components/TeamInvitation";
import TeamMembers from "./components/TeamMembers";

export default function TeamPageContainer() {
  const [openAddTeamMember, setOpenAddTeamMember] = useState(false);
  const [tab, setTab] = useState(0);

  const handleClose = () => setOpenAddTeamMember(false);
  const handleOpen = () => setOpenAddTeamMember(true);

  const getTabContent = useMemo(() => {
    switch (tab) {
      case 0:
        return <TeamMembers />;
      case 1:
        return <TeamInvitation />;
      default:
        return <TeamMembers />;
    }
  }, [tab]);

  const tabStyles = {
    cursor: 'pointer',
    color: tab === 0 ? 'primary.main' : SECONDARY[200],
  };

  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0px 0px 10px ${NEUTRAL["600"]}`,
          borderRadius: pxToRem(24),
          backgroundColor: NEUTRAL[0],
          width: '100%',
          minHeight: '85vh',
        }}
        spacing={0}
      >
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            px: pxToRem(20),
            height: pxToRem(88),
          }}
        >
          <Stack direction="row" gap={3}>
            <Typography
              variant="h3"
              onClick={() => setTab(0)}
              sx={{
                cursor: 'pointer',
                color: tab === 0 ? 'primary.main' : SECONDARY[200],
              }}
            >
              Team Members
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              onClick={() => setTab(1)}
              sx={{
                cursor: 'pointer',
                color: tab === 1 ? 'primary.main' : SECONDARY[200],
              }}
            >
              <Typography variant="h3">
                Invitation Sent
              </Typography>
              <Badge badgeContent={4} color="primary" />
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
            <SearchIcon />
            <Button
              onClick={handleOpen}
              startIcon={<Add />}
              variant="contained"
              color="primary"
            >
              Add Team Member
            </Button>
          </Stack>
        </Stack>
        {getTabContent}
      </Stack>
      <FormDialog
        headline="Add team member"
        subText="Add team member to your team"
        open={openAddTeamMember}
        onClose={handleClose}
        onFormSubmit={(e) => {
          e.preventDefault();
          handleClose();
        }}
        content={
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: pxToRem(650) }}>
            <Typography variant="subtitle1" color={SECONDARY[200]}>
              Share with team member
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                sx={{ borderRadius: pxToRem(16), width: '85%' }}
                placeholder="Search by email or name"
                size="small"
              />
              <Button variant="contained" color="primary" onClick={handleClose} size="small">
                Add
              </Button>
            </Stack>
          </Box>
        }
      />
    </>
  );
}