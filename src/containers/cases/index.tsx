"use client";

import { SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { BackIcon } from "./components/svgs/BackIcon";
import CasesTable from "./components/table";
import { caseData } from "./components/table/constants";

export default function CasesPageContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");

  const handleNavigation = () => {
    switch (referrer) {
      case "home":
        router.push("/dashboard/home");
        break;
      default:
        router.push("/dashboard/home");
    }
  };

  return (
    <Stack
      sx={{
        borderRadius: pxToRem(24),
        gap: pxToRem(12),
        width: "100%",
      }}
    >
      {referrer && ["home"].includes(referrer) && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={pxToRem(4)}
          sx={{ cursor: "pointer" }}
        >
          <BackIcon />
          <Typography
            variant="subtitle2"
            color={SECONDARY[300]}
            fontSize={pxToRem(12)}
            onClick={handleNavigation}
          >
            Go back
          </Typography>
        </Stack>
      )}

      <Stack width={"100%"}>
        <CasesTable caseData={caseData} />
      </Stack>
    </Stack>
  );
}
