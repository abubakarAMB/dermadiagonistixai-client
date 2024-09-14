import { CaseDetailEnum, MapViewEnum } from "@/containers/cases/caseDetail/constants";
import { PRIMARY, SECONDARY, pxToRem } from "@/theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/navigation";

function createData(
  icdCode: string,
  description: string,
  caseNumber: string,
  amount: string
) {
  return { icdCode, description, caseNumber, amount };
}

const rows = [
  createData("A15-A19", "Basal cell carcinoma (BCC)", "1234-A988", "$15,000"),
  createData(
    "H30-H36",
    "Squamous cell carcinoma (SCC)",
    "1A34-A988",
    "$5,000"
  ),
  createData("H30-H32", "Melanoma", "1234-A988", "$2,000"),
];

const subtitle1 = {
  fontSize: pxToRem(16),
  fontWeight: 600,
  color: SECONDARY[400],
};

export default function ClaimsTable() {
  const router = useRouter();
  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        sx={{
          minWidth: 650,
          "& th": {
            fontSize: pxToRem(16),
            fontWeight: 700,
            color: SECONDARY[500],
            borderBottom: `1px solid ${SECONDARY[100]}`,
            // pl: pxToRem(32),
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Case Number</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            padding: pxToRem(16),
            // bgcolor: 'red',
            "& td": {
              ...subtitle1,
            },
            "& td, th": {
              ...subtitle1,
            },
            "& td:last-child": {
              ...subtitle1,
            },
          }}
        >
          {rows.map((row) => (
            <TableRow
              key={row.icdCode}
              sx={{
                "& td, & th": { border: 0 },
                "&:hover": { backgroundColor: PRIMARY[25] },
              }}
              onClick={() =>
                router.push(
                  `/dashboard/case/1/${CaseDetailEnum.medicalHistory}?view=${MapViewEnum.detailsView}`
                )
              }
            >
              <TableCell component="th" scope="row">
                {row.icdCode}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.caseNumber}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="right" sx={{ cursor: "pointer" }}>
                View
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
