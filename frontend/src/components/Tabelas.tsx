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
import ResponsiveDialog from "./Dialogo";

interface IProps {
  data?: { [key: string]: any }[];
  remove: (id: number) => void;
}

export function Tabelas({ data, remove }: IProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        inf={selected}
        open={open}
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
                {Object.keys(data[0]).map((inf) => (
                  <TableCell key={`${inf}${row}`}>{row[inf]}</TableCell>
                ))}
                <TableCell>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => console.log("abre popup")}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => (handleClickOpen(), setSelected(row))}
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
