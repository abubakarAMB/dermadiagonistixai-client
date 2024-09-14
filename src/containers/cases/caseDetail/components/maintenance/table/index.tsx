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

interface TableProps {
  maintenanceData: TableDataProps[];
}

interface TableDataProps {
  name: string;
  uploadedBy: string;
  dateUploaded: string;
  size: string;
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
  name: string,
  uploadedBy: string,
  dateUploaded: string,
  size: string
) {
  return {
    name,
    uploadedBy,
    dateUploaded,
    size,
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

export default function MaintenanceTable({ maintenanceData }: TableProps) {
  const { tab } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultUpload = searchParams.get("upload") === "true";

  const [open, setOpen] = useState({
    upload: defaultUpload || false,
    delete: false,
    filter: false,
  });
  const [showPortal, setShowPortal] = useState(false);
  const [tableData, setTableData] = useState(maintenanceData);

  const rows = tableData.map(({ name, uploadedBy, dateUploaded, size }) => {
    return createData(name, uploadedBy, dateUploaded, size);
  });

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
      <TableContainer>
        <Table
          sx={{ minWidth: { xs: "100%", sm: 700 } }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Uploaded by
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Date Uploaded
              </StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {/* {row.caseNumber} */}
                  <Stack
                    gap={pxToRem(16)}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <PdfIcon />
                    <Stack gap={pxToRem(4)}>
                      <Typography variant="h5" color={SECONDARY[400]}>
                        {row.name}
                      </Typography>
                      <Typography variant="caption" color={SECONDARY[300]}>
                        {row.size}
                      </Typography>
                    </Stack>
                  </Stack>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  sx={{
                    "& div": { margin: "0" },
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  <Stack
                    gap={pxToRem(8)}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <CustomImage
                      src="/images/userHeader.png"
                      wrapperSx={{
                        height: pxToRem(30),
                        width: pxToRem(30),
                      }}
                    />
                    <Typography variant="body1" color={SECONDARY[400]}>
                      {row.uploadedBy}
                    </Typography>
                  </Stack>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  <Typography variant="body1" color={SECONDARY[400]}>
                    {row.dateUploaded}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  sx={{ "& div": { margin: "0" } }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={pxToRem(8)}
                  >
                    <IconContainer tooltip="Download" sx={actionStyles}>
                      <DownloadIcon />
                    </IconContainer>
                    <IconContainer tooltip="Share" sx={actionStyles}>
                      <ShareIcon />
                    </IconContainer>
                    <IconContainer
                      tooltip="Delete"
                      sx={actionStyles}
                      onClick={() => handleClickOpen(OpenEnums.delete)}
                    >
                      <DeleteIcon />
                    </IconContainer>
                  </Stack>
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
