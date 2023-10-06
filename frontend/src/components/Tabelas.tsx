import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IProps {
  attributes: { [key: string]: string };
  data: { [key: string]: string }[];
}

export function Tabelas({ attributes, data }: IProps) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {Object.keys(attributes).map((titles) => (
              <TableCell align={titles == "name" ? "left" : "right"}>
                {titles}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.keys(attributes).map((inf) => (
                <TableCell align={inf == "name" ? "left" : "right"}>
                  {row.inf}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
