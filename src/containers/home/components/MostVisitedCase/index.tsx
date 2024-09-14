import { CustomImage } from "@/components/CustomImage";
import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";

const data = [
  {
    name: "John Doe",
    caseNumber: "12457-980",
    amountSpent: "$20,000",
  },
  {
    name: "Anthony Smith",
    caseNumber: "12457-980",
    amountSpent: "$15,000",
  },
  {
    name: "Sara William",
    caseNumber: "12457-980",
    amountSpent: "$3,000",
  },
];

function MostVisitedRow({
  name,
  caseNumber,
  amountSpent,
  isLast,
}: {
  name: string;
  caseNumber: string;
  amountSpent: string;
  isLast: boolean;
}) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack gap={pxToRem(6)} direction={"row"} alignItems={"center"}>
        <CustomImage
          src="/images/userHeader.png"
          wrapperSx={{
            height: pxToRem(44),
            width: pxToRem(44),
          }}
        />
        <Stack gap={pxToRem(4)}>
          <Typography variant="h5" color={SECONDARY[400]}>
            {name}
          </Typography>
          <Typography variant="body1" color={SECONDARY[400]} fontWeight={500}>
            {`Case Number: ${caseNumber}`}
          </Typography>
        </Stack>
      </Stack>
      <Stack gap={pxToRem(4)}>
        <Typography variant="subtitle2" fontSize={pxToRem(12)} color={SECONDARY[400]}>
          Amount Spent
        </Typography>
        <Typography
          variant="subtitle1"
          color={SECONDARY[400]}
          fontWeight={700}
          fontSize={pxToRem(23)}
        >
          {amountSpent}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function MostVisitedCase() {
  return (
    <Stack
      sx={{
        padding: pxToRem(16),
        gap: pxToRem(16),
        width: "100%",
        borderRadius: pxToRem(24),
        bgcolor: NEUTRAL[0],
        boxShadow: "0px 0px 10px rgba(5, 113, 112, 0.04)",
      }}
    >
      <Stack gap={pxToRem(16)}>
        <Stack direction={"row"}>
          <Typography variant="h5" color={SECONDARY[500]}>
            Most Visited Case
          </Typography>
        </Stack>
        <Stack gap={pxToRem(8)}>
          {data.map((item, index) => (
            <MostVisitedRow
              {...item}
              key={index}
              isLast={data.length - 1 === index}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
