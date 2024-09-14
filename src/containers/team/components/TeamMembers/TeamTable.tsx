import { DeleteIcon } from "@/containers/cases/components/svgs/DeleteIcon";
import { NEUTRAL, PRIMARY, pxToRem, SECONDARY } from "@/theme";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton, MenuItem, Select, Stack, styled, TableCell, tableCellClasses, TableContainer, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

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

const accessLevels = ["All access", "View Only"];

export default function TeamTable() {
  const [roles, setRoles] = useState(
    teamMembers.reduce((acc, member) => {
      acc[member.email] = member.role;
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleRoleChange = (email: string, newRole: string) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [email]: newRole,
    }));
  };

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
            <StyledTableCell align="center">Access</StyledTableCell>
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
                    <Typography variant="h4" sx={{ color: '#282833' }}>{row.name}</Typography>
                    <span>{row.email}</span>
                  </Stack>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="center">
                <Select
                  value={roles[row.email]}
                  onChange={(e) => handleRoleChange(row.email, e.target.value as string)}
                  size="small"
                  sx={{ minWidth: 120, borderRadius: 2 }}
                >
                  {accessLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}