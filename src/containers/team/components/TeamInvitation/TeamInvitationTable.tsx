import OutlinedButton from "@/components/OutlinedButton";
import { NEUTRAL, PRIMARY, pxToRem, SECONDARY, WARNING } from "@/theme";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Stack, styled, TableCell, tableCellClasses, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

const teamMembers = [
  {
    name: "John Doe (You)",
    role: "All access",
    email: "john@example.com",
    status: "Active",
    profileImage: "/images/team/john-doe.jpg",
    createdAt: "2021-09-01",
  },
  {
    name: "Verdi Ergun",
    role: "View Only",
    email: "johndoe@example.com",
    status: "Active",
    profileImage: "/images/team/jane-doe.jpg",
    createdAt: "2021-09-01",
  },
];

export default function TeamInvitationTable() {
 
  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        sx={{
          minWidth: 650,
          "& th": {
            fontSize: pxToRem(16),
            fontWeight: 700,
            color: NEUTRAL[700],
          },
        }}
      >
        <TableHead
          sx={{
            "& th": {
              color: SECONDARY[500],
              backgroundColor: NEUTRAL[300],

            },
          }}
        >
          <TableRow>
            <StyledTableCell>
              <Stack direction="row" alignItems="center">
                <span> Name</span>
                <ArrowDropDownIcon />
              </Stack>
            </StyledTableCell>
            <StyledTableCell align="center">Date Added</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "& td": {
              fontSize: pxToRem(16),
              fontWeight: 600,
            },
            "& td, th": {
              color: SECONDARY[300],
            },
            "& td:last-child": {
              color: SECONDARY[500],
            },
          }}
        >
          {teamMembers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    src={row.profileImage}
                    alt={row.name}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Stack direction={"column"} spacing={0}>
                    {/* <Typography variant="h4" sx={{ color: '#282833' }}>{row.name}</Typography> */}
                    <span>{row.email}</span>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="center">
                <OutlinedButton
                  customColor={WARNING["700"]}
                  bgColor={WARNING["500"]}
                  hoverColor="transparent"
                  sx={{
                    padding: "5px 20px",
                  }}
                >
                  Pending
                </OutlinedButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <OutlinedButton
                  customColor={SECONDARY["350"]}
                  hoverColor="transparent"
                >
                  Send Reminder
                </OutlinedButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}