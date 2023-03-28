import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const FavButton = ({ onSave }) => {
  return (
    <div>
      <IconButton
        onClick={onSave}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "white",
          borderColor: "red",
          position: "absolute",
          ":hover": { backgroundColor: "white", opacity: 0.9 },
          right: 5,
          top: 5,
        }}
      >
        <FavoriteIcon sx={{color:"red"}} />
      </IconButton>
    </div>
  );
};
