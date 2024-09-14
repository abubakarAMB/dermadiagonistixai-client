import { ERROR, PRIMARY, SUCCESS, pxToRem } from "@/theme";
import { Box } from "@mui/material";

export function ClaimStatusPill({
  claimStatus,
  isFilter,
}: {
  claimStatus: string;
  isFilter?: boolean;
}) {
  const statusStyle = (status: string) => {
    switch (status) {
      case "New":
        return {
          border: `1px solid ${PRIMARY[200]}`,
          color: PRIMARY[700],
          background: PRIMARY[50],
          bghover: SUCCESS[100],
        };
      case "In progress":
        return {
          border: `1px solid ${PRIMARY[200]}`,
          color: SUCCESS[600],
          background: SUCCESS[50],
          bghover: SUCCESS[100],
        };
      case "Escalated":
        return {
          border: `1px solid ${ERROR[200]}`,
          color: ERROR[400],
          background: ERROR[50],
          bghover: ERROR[100],
        };

      default:
        break;
    }
  };
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        py: pxToRem(8),
        px: pxToRem(16),
        borderRadius: pxToRem(12),
        width: isFilter ? "100%" : "fit-content",
        fontWeight: 600,
        fontSize: pxToRem(14),
        ...statusStyle(claimStatus),
        "&:hover": {
          background: statusStyle(claimStatus)?.bghover || "",
        },
      }}
    >
      {claimStatus}
    </Box>
  );
}
