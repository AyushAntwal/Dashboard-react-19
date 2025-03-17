import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Container,
  Button,
} from "@mui/material";

const contractsData = [
  { id: "JHS-HQ", startDate: "28 Jan 2025", endDate: "27 Aug 2025", totalWeld: 6000, tested: 2892, completed: "48%", status: "Active" },
  { id: "K46", startDate: "28 Jan 2025", endDate: "09 Oct 2025", totalWeld: 10000, tested: 1191, completed: "12%", status: "Active" },
  { id: "K47", startDate: "2 Jan 2025", endDate: "4 Mar 2025", totalWeld: 4000, tested: 4001, completed: "100%", status: "Completed" },
  { id: "K48", startDate: "12 Jan 2025", endDate: "12 Mar 2025", totalWeld: 3000, tested: 3000, completed: "100%", status: "Completed" },
  { id: "K49", startDate: "30 Jan 2025", endDate: "30 Nov 2025", totalWeld: 6000, tested: 2203, completed: "36%", status: "Active" },
  { id: "K21", startDate: "30 Jan 2025", endDate: "3 Nov 2025", totalWeld: 5500, tested: 4900, completed: "89%", status: "Active" },
  { id: "K40", startDate: "31 Jan 2025", endDate: "6 May 2025", totalWeld: 5500, tested: 1203, completed: "23%", status: "Active" },
  { id: "K44", startDate: "31 Jan 2025", endDate: "18 Aug 2025", totalWeld: 3000, tested: 1000, completed: "30%", status: "Active" },
];

export default function ContractDashboard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredContracts = contractsData.filter(
    (contract) =>
      contract.id.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || contract.status === statusFilter)
  );


  return (
    <Container maxWidth='lg'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4 }} >
        <Typography variant="h5" component='h1' >
          User List
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, }}>
          <Button variant='contained'>
            Submit
          </Button>
          <Button variant="outlined" color="secondary">
            Upload
          </Button>
        </Box>
      </Box>
      <Card sx={{ my: 2, p: 2 }}>
        <Box >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 2,
              mb: 2,
            }}
          >
            {[
              { label: "Total Contracts", value: 7 },
              { label: "Ongoing Contracts", value: 5 },
              { label: "Completed Contracts", value: 2 },
            ].map((item, index) => (
              <Card key={index} sx={{ backgroundColor: "#fff" }}>
                <CardContent>
                  <Typography variant="h6">{item.label}</Typography>
                  <Typography variant="h4">{item.value}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>


          {/* Filters */}
          <Box display="flex" gap={2} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Search by contract"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ bgcolor: "white" }}
            />
            <TextField
              select
              fullWidth
              label="Contract status"
              variant="outlined"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Contract</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Completion Date</TableCell>
                  <TableCell>Total Weld</TableCell>
                  <TableCell>Cumulative Weld Tested</TableCell>
                  <TableCell>% Completed</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContracts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell>
                        <Typography color="secondary" sx={{ textDecoration: "underline", cursor: "pointer" }}>
                          {contract.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{contract.startDate}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
                      <TableCell>{contract.totalWeld}</TableCell>
                      <TableCell>{contract.tested}</TableCell>
                      <TableCell>{contract.completed}</TableCell>
                      <TableCell>{contract.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={filteredContracts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />
        </Box>
      </Card>
    </Container>
  );

};

//   return (
//
//   );
// }
