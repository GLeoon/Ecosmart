import { useEffect, useState } from "react";
import { Tabelas } from "../components/Tabelas";
import { getAllClients, removeClient } from "../api/client";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import "../css/pageList.css";
import Swal from "sweetalert2";

type ClientType = {
  id: number;
  name: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export function Client() {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [att, setAtt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPages() {
      const res = await getAllClients();
      setClients(res.data);
    }

    fetchPages();
  }, [att]);

  const deleteClient = async (id: number) => {
    try {
      await removeClient(id);
      setAtt(false);
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        icon: "success",
        title: "O registro foi deletado"!,
        position: "center",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="backGround">
      <Button className="back-button" onClick={() => navigate("/")}>
        {<ReplyIcon />}
      </Button>
      <div>
        {clients.length > 0 && <Tabelas data={clients} remove={deleteClient} />}
      </div>
    </div>
  );
}
