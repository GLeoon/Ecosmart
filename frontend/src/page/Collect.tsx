import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCollects, removeCollect } from "../api/collect";
import { Button } from "@mui/material";
import { Tabelas } from "../components/Tabelas";
import ReplyIcon from "@mui/icons-material/Reply";
import "../css/pageList.css";
import Swal from "sweetalert2";

type CollectType = {
  type: string;
  mass: number;
  volume: number;
  client: any;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export function Collect() {
  const [collect, setCollect] = useState<CollectType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPages() {
      const res = await getAllCollects();
      setCollect(res.data);
    }

    fetchPages();
  }, []);

  const deleteCollect = async (id: number) => {
    try {
      await removeCollect(id);
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
      <Button sx={{ marginBottom: "15px" }} onClick={() => navigate("/")}>
        {<ReplyIcon />}
      </Button>
      <div>
        {collect.length > 0 && (
          <Tabelas remove={deleteCollect} data={collect} />
        )}
      </div>
    </div>
  );
}
