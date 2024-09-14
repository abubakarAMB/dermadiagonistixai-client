import { NEUTRAL, pxToRem } from "@/theme";
import { Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import TopNav from "./components/TopNav";
import ActionsTab from "./components/actionsTab";
import Maintenance from "./components/maintenance";
import MapView from "./components/medicalHistory";
import Report from "./components/reports";
import { CaseDetailEnum } from "./constants";

export default function CaseDetailPageContainer() {
  const { tab, id } = useParams();
  const router = useRouter();

  const getView = () => {
    switch (tab) {
      case CaseDetailEnum.medicalHistory:
        return <MapView />;
      case CaseDetailEnum.maintenance:
        return <Maintenance />;
      case CaseDetailEnum.reports:
        return <Report />;
    }
  };

  useEffect(() => {
    // router.replace(`/dashboard/cases/${id}/${tab}`);
  }, [tab]);

  return (
    <Stack
      flex={1}
      bgcolor={NEUTRAL[0]}
      sx={{
        boxShadow: { xs: "none", sm: "0px 0px 10px rgba(5, 113, 112, 0.04)" },
        borderRadius: { xs: 0, sm: pxToRem(24) },
        height: 'calc( 100vh - 112px)',
        // bgcolor: 'red'
      }}
    >
      <TopNav />
      <ActionsTab />

      {getView()}
    </Stack>
  );
}
