import Button from "@/components/Button";
import { IconContainer } from "@/components/IconContainer";
import { UserAvatar } from "@/components/UserAvatar";
import { CloseModalIcon } from "@/components/svgs/CloseModalIcon";
import { GREEN, NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
import { Box, Stack, Typography } from "@mui/material";
import { AddIcon } from "../svgs/AddIcon";
import { CopyIcon } from "../svgs/CopyIcon";

export default function ShareModal({ onClose }: { onClose: () => void }) {
  return (
    <Stack
      sx={{
        width: pxToRem(650),
        padding: pxToRem(24),
        gap: pxToRem(24),
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography
            variant="subtitle1"
            color={SECONDARY[500]}
            fontWeight={700}
            fontSize={pxToRem(28)}
          >
            Share
          </Typography>
          <Typography variant="body1" color={SECONDARY[300]}>
            Invite your team to view collaboration.
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={pxToRem(8)} alignItems={"center"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              gap: pxToRem(8),
              borderRadius: pxToRem(12),
              border: `1px solid ${NEUTRAL[201]}`,
              py: pxToRem(10),
              px: pxToRem(16),
                height: pxToRem(40),
              cursor: "pointer",
            }}
          >
            <CopyIcon />
            <Typography variant="subtitle1" color={SECONDARY[300]}>
              Copy link
            </Typography>
            <AddIcon fill={GREEN[301]} />
          </Stack>
          <IconContainer tooltip="Close" onClick={onClose}>
            <CloseModalIcon />
          </IconContainer>
        </Stack>
      </Stack>
      <Stack
        justifyContent={"center"}
        sx={{
          width: "100%",
          height: pxToRem(72),
          padding: pxToRem(16),
          borderRadius: pxToRem(16),
          bgcolor: PRIMARY[26],
        }}
      >
        <UserAvatar title="Justin Collins" subtitle="Case Number: 1458-CDAD" />
      </Stack>
      <Stack gap={pxToRem(12)}>
        <Typography variant="subtitle1" color={SECONDARY[300]}>
          Share with team member
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
          <Box
            component={"input"}
            placeholder="Search by name or email"
            sx={{
              border: `1px solid ${NEUTRAL[301]}`,
              width: "100%",
              px: pxToRem(16),
              py: pxToRem(14.5),
              height: pxToRem(48),
              borderRadius: pxToRem(16),
            }}
          />
          <Button
            sx={{
              height: pxToRem(48),
              width: pxToRem(95),
              borderRadius: pxToRem(16),
              fontSize: pxToRem(16),
              fontWeight: 600,
              backgroundColor: GREEN[500],
            }}
          >
            Invite
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
