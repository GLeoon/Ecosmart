import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllClients } from "../api/client";
import { updateCollect } from "../api/collect";

interface IProps {
  open: boolean;
  handleClose: () => void;
  setAtt: any;
  inf: any;
}

export default function ResponsiveDialogEdit({
  open,
  handleClose,
  inf,
  setAtt,
}: IProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [client, setClient] = useState("");
  const [allClient, setAllClient] = useState([]);
  const [formData, setFormData] = useState({
    type: inf.type,
    mass: inf.mass,
    volume: inf.volume,
  });

  useEffect(() => {
    async function fetchPages() {
      const res = await getAllClients();
      for (const i of res.data) {
        if (i.id == inf.clientId) {
          setClient(i.name);
        }
      }
      setAllClient(res.data);
    }

    fetchPages();
  }, []);

  const handleChangeClient = (event: SelectChangeEvent) => {
    setClient(event.target.value as string);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const passInt = {
      type: formData.type,
      mass: parseInt(formData.mass),
      volume: parseInt(formData.volume),
    };
    let temp = 0;
    for (const i of allClient) {
      if (i.name == client) {
        temp = i.id;
      }
    }

    await updateCollect(inf.id, { ...passInt, clientId: parseInt(client) });
    setAtt(false);

    Swal.fire({
      timer: 1500,
      showConfirmButton: false,
      icon: "success",
      title: "O registro foi atualizado"!,
      position: "center",
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Editar registro."}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Tipo"
            name="type"
            value={formData.type}
            onChange={handleChange}
            sx={{ margin: "20px", width: "500px" }}
          />
          <TextField
            fullWidth
            label="Massa"
            name="mass"
            value={formData.mass}
            onChange={handleChange}
            sx={{ margin: "20px", width: "500px" }}
          />
          <TextField
            fullWidth
            label="Voluume"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            sx={{ margin: "20px", width: "500px" }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{client}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={client}
                label="Cliente"
                onChange={handleChangeClient}
              >
                {allClient
                  ? allClient.map((i: any) => (
                      <MenuItem key={i.id} value={i.id}>
                        {i.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{ margin: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Atualizar
          </Button>
        </form>
      </Dialog>
    </div>
  );
}
