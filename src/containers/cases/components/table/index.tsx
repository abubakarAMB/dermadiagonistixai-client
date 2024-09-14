import { Stack, Tooltip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

import { NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
import TopNav from "./TopNav";
// import { caseData } from "./constants";
import ClientPortal from "@/components/ClientPortal";
import AppDialog from "@/components/DailogBox";
import { IconContainer } from "@/components/IconContainer";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CasesEnum } from "../../constants";
import DeleteCase from "../DeleteCase";
import { ArchiveIcon } from "../svgs/ArchiveIcon";
import { DeleteIcon } from "../svgs/DeleteIcon";
import { RetryIcon } from "../svgs/RetryIcon";
import UploadcaseModal from "../uploadCase";
import CompletedAlert from "../uploadCase/completedAlert";
import { ClaimStatusPill } from "./ClaimStatus";
import Filter from "./filter";
import { deleteModalVar, uploadModalVar } from "@/state/modal";
import { useReactiveVar } from "@apollo/client";
import { showFilterVar } from "../../state";

interface TableProps {
  caseData: TableDataProps[];
}

interface TableDataProps {
  caseNumber: string;
  plaintiff: string;
  dateOfClaim: string;
  claimStatus: string;
  actionRequired: string;
  targetCompletion: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: PRIMARY[400],
    color: SECONDARY[500],
    fontWeight: 600,
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
  caseNumber: string,
  plaintiff: string,
  dateOfClaim: string,
  claimStatus: string,
  actionRequired: string,
  targetCompletion: string
) {
  return {
    caseNumber,
    plaintiff,
    dateOfClaim,
    claimStatus,
    actionRequired,
    targetCompletion,
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

export default function CasesTable({ caseData }: TableProps) {
  const showFilter = useReactiveVar(showFilterVar);
  const { tab } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultUpload = searchParams.get("upload") === "true";

  const [showPortal, setShowPortal] = useState(false);
  const [tableData, setTableData] = useState(caseData);

  const rows = tableData.map(
    ({
      caseNumber,
      plaintiff,
      dateOfClaim,
      claimStatus,
      actionRequired,
      targetCompletion,
    }) => {
      return createData(
        caseNumber,
        plaintiff,
        dateOfClaim,
        claimStatus,
        actionRequired,
        targetCompletion
      );
    }
  );

  const handleModal = () => {
    setShowPortal(!showPortal);
  };

  useEffect(() => {
    switch (tab) {
      case CasesEnum.archive:
        setTableData(caseData.slice(0, 1));
        break;
      case CasesEnum.management:
        setTableData(caseData);
        break;

      default:
        break;
    }
  }, [tab]);

  useEffect(() => {
    if (defaultUpload)
      router.replace(`/dashboard/cases/${CasesEnum.management}`);
  }, [tab]);

  return (
    <Stack
      flex={1}
      bgcolor={NEUTRAL[0]}
      sx={{
        boxShadow: `0px 0px 10px ${NEUTRAL["600"]}`,
        borderRadius: pxToRem(24),
      }}
    >
      <TopNav
        handleClickOpen={() => uploadModalVar(true)}
        handleFilterClick={() => showFilterVar(!showFilter)}
        showFilter={showFilter}
      />
      {showFilter && <Filter />}
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Case Number</StyledTableCell>
              <StyledTableCell align="center">Plaintiff</StyledTableCell>
              <StyledTableCell align="center">Date of Claim</StyledTableCell>
              <StyledTableCell align="center">Claim Status</StyledTableCell>
              <StyledTableCell align="center">Action Required</StyledTableCell>
              <StyledTableCell align="center">
                Target Completion
              </StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.caseNumber}>
                <StyledTableCell component="th" scope="row">
                  {row.caseNumber}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.plaintiff}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.dateOfClaim}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ "& div": { margin: "auto" } }}
                >
                  <ClaimStatusPill claimStatus={row.claimStatus} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.actionRequired}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.targetCompletion}
                </StyledTableCell>
                <StyledTableCell align="justify">
                  {tab === CasesEnum.archive ? (
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={pxToRem(4)}
                    >
                      <IconContainer
                        tooltip="Delete"
                        sx={actionStyles}
                        onClick={() => deleteModalVar(true)}
                      >
                        <DeleteIcon />
                      </IconContainer>
                      <IconContainer tooltip="Restore" sx={actionStyles}>
                        <RetryIcon />
                      </IconContainer>
                    </Stack>
                  ) : (
                    <Tooltip title="Archive">
                      <IconContainer tooltip="Archive" sx={actionStyles}>
                        <ArchiveIcon />
                      </IconContainer>
                    </Tooltip>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ClientPortal selector="myportal" show={showPortal}>
        <CompletedAlert />
      </ClientPortal>
    </Stack>
  );
}
