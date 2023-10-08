import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  const listBox = ["client", "collect"];

  return (
    <div
      style={{ height: "100vh", width: "100wh", backgroundColor: "#eeeeee" }}
    >
      <Box>
        {listBox.map((box) => (
          <Box
            key={box}
            sx={{
              flexGrow: 1,
              display: "flex",
              width: "100px",
              height: "100px",
              backgroundColor: "#dadada",
              borderRadius: "7px",
              padding: "5px",
              margin: "5px",
            }}
          >
            <Button key={box} onClick={() => navigate(`/${box}`)}>
              {box}
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
