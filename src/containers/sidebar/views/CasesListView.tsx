import { SearchIcon } from "@/components/svgs/SearchIcon";
import { PRIMARY, SECONDARY, pxToRem } from "@/theme";
import { Box, Stack } from "@mui/material";

export default function CasesListView() {
  return (
    <Stack
      sx={{
        borderRadius: pxToRem(16),
        bgcolor: "#022625",
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderBottom: `1px solid ${SECONDARY[400]}`,
          width: "100%",
          height: pxToRem(52),
          position: "relative",
          bgcolor: "inherit",
          borderTopLeftRadius: pxToRem(16),
          borderTopRightRadius: pxToRem(16),
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0.6rem",
            left: "1.2rem",
          }}
        >
          <SearchIcon size={20} />
        </Box>
        <Box
          component={"input"}
          placeholder="Search"
          sx={{
            pl: pxToRem(57),
            py: pxToRem(16),
            bgcolor: "inherit",
            border: "none",
            outline: "none",
            fontSize: pxToRem(14),
            fontWeight: 500,
            borderTopLeftRadius: pxToRem(16),
            borderTopRightRadius: pxToRem(16),
            color: PRIMARY[50],
          }}
        />
      </Box>
      <Stack maxHeight={pxToRem(385)}>
        {Array.from({ length: 7 }).map((_, index, arr) => (
          <Box
            key={index}
            sx={{
              pl: pxToRem(12),
              py: pxToRem(16),
              bgcolor: "inherit",
              fontSize: pxToRem(14),
              fontWeight: 500,
              borderBottom:
                index !== arr.length - 1
                  ? `1px solid ${SECONDARY[400]}`
                  : "none",
              width: "100%",
              height: pxToRem(48),
              color: PRIMARY[50],
              "&:hover": {
                bgcolor: "#021E1E",
                cursor: "pointer",
              },
            }}
          >
            1458-CDAD
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
