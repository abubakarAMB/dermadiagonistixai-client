import { Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

import { NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
// import { caseData } from "./constants";
import { CustomImage } from "@/components/CustomImage";
import AppDialog from "@/components/DailogBox";
import { IconContainer } from "@/components/IconContainer";
import ShareIcon from "@/components/svgs/ShareIcon";
import DeleteCase from "@/containers/cases/components/DeleteCase";
import { DeleteIcon } from "@/containers/cases/components/svgs/DeleteIcon";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DownloadIcon } from "../../svg/DownloadIcon";
import { PdfIcon } from "../../svg/PdfIcon";
import { useReactiveVar } from "@apollo/client";
import { showFilterVar } from "../../../state";
import Filter from "../filter";

interface TableProps {
  reportData: TableDataProps[];
}

interface TableDataProps {
  Icd: string;
  group: string;
  description: string;
  amountSpent: string;
  claimDate: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: PRIMARY[400],
    color: SECONDARY[500],
    fontWeight: 700,
    fontSize: pxToRem(16),
  },
  [`&.${tableCellClasses.body}`]: {
    color: SECONDARY[400],
    fontWeight: 500,
    fontSize: pxToRem(16),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: SECONDARY[300],
  "&:hover": {
    backgroundColor: PRIMARY[25],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Icd: string,
  group: string,
  description: string,
  amountSpent: string,
  claimDate: string
) {
  return {
    Icd,
    group,
    description,
    amountSpent,
    claimDate,
  };
}

const actionStyles = {
  margin: "auto",
  "&:hover": {
    background: NEUTRAL[0],
    borderRadius: pxToRem(12),
    cursor: "pointer",
  },
};

enum OpenEnums {
  upload = "upload",
  delete = "delete",
  filter = "filter",
}

export default function ReportTable({ reportData }: TableProps) {
  const { tab } = useParams();
  const router = useRouter();
  const showFilter = useReactiveVar(showFilterVar);
  const searchParams = useSearchParams();
  const defaultUpload = searchParams.get("upload") === "true";

  const [open, setOpen] = useState({
    upload: defaultUpload || false,
    delete: false,
    filter: false,
  });
  const [showPortal, setShowPortal] = useState(false);
  const [tableData, setTableData] = useState(reportData);

  const rows = tableData.map(
    ({ Icd, group, description, amountSpent, claimDate }) => {
      return createData(Icd, group, description, amountSpent, claimDate);
    }
  );

  const handleClickOpen = (view: OpenEnums) => {
    setOpen({ ...open, [view]: !open[view] });
  };

  const handleClose = (view: OpenEnums) => {
    setOpen({ ...open, [view]: false });
  };

  const handleModal = () => {
    setShowPortal(!showPortal);
  };

  return (
    <Stack
      flex={1}
      bgcolor={NEUTRAL[0]}
      sx={{
        // boxShadow: `0px 0px 10px ${NEUTRAL["600"]}`,
        borderRadius: pxToRem(24),
      }}
    >
      <Filter showFilter={showFilter} />
      <TableContainer>
        <Table
          sx={{ minWidth: { xs: "100%", sm: 700 } }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ICD-10</StyledTableCell>
              <StyledTableCell align="center">Group</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Description
              </StyledTableCell>
              <StyledTableCell align="center">Amount Spent</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Claim Date
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.Icd}>
                <StyledTableCell component="th" scope="row">
                  {row.Icd}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ "& div": { margin: "0" } }}
                >
                  <Stack
                    gap={pxToRem(8)}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="body1" color={SECONDARY[400]}>
                      {row.group}
                    </Typography>
                  </Stack>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: { xs: "none", sm: "table-cell" } }}
                >
                  {row.description}
                </StyledTableCell>

                <StyledTableCell align="center">
                  {row.amountSpent}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: { xs: "none", sm: "table-cell" } }}
                >
                  {row.claimDate}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AppDialog
        open={open.delete}
        onClose={() => handleClose(OpenEnums.delete)}
      >
        <DeleteCase />
      </AppDialog>
    </Stack>
  );
}
