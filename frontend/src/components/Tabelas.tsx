import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ResponsiveDialog from "./DialogoDelete";
import ResponsiveDialogEdit from "./DialogoEdit";

interface IProps {
  data?: { [key: string]: any }[];
  remove: (id: number) => void;
  setAtt?: any;
}

export function Tabelas({ data, remove, setAtt }: IProps) {
  const [open, setOpen] = useState({
    open: false,
    selected: {},
  });
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = (row: any) => {
    setOpen({ open: true, selected: row });
  };

  const handleClose = () => {
    setOpen({ ...open, open: false });
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <Box
      sx={{
        height: "auto",
        backgroundColor: "white",
        borderRadius: "7px",
        margin: "20px",
      }}
    >
      <ResponsiveDialog
        inf={open.selected}
        open={open.open}
        handleClose={handleClose}
        remove={remove}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          {data ? (
            <TableHead>
              <TableRow>
                {Object.keys(data[0]).map((titles) => (
                  <TableCell key={titles} sx={{ fontWeight: "bold" }}>
                    {titles}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <ResponsiveDialogEdit
                  inf={row}
                  open={openEdit}
                  handleClose={handleCloseEdit}
                  setAtt={setAtt}
                />
                {Object.keys(data[0]).map((inf) => (
                  <TableCell key={`${inf}${row}`}>{row[inf]}</TableCell>
                ))}
                <TableCell>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => handleClickOpenEdit()}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => handleClickOpen(row)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
