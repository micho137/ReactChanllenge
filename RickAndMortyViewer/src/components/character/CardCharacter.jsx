import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const CardCharacter = ({ id, name, image, status, specie }) => {
  const statusCharacter =
    status === "Alive" ? "#22c55e" : status === "Dead" ? "#e05052" : "#676e7b";

  return (
    <Card sx={{ maxWidth: 345, border: `solid 4px ${statusCharacter}` }}>
      <CardActionArea>
        <Link to={`/character/${id}`}>
          <CardMedia component="img" height="140" image={image} />
          <CardContent sx={{ backgroundColor: `${statusCharacter}` }}>
            <Typography
              fontWeight="bold"
              color="white"
              className="text-center"
              gutterBottom
              variant="h5"
            >
              {name}
            </Typography>
            <div>
              <div className="flex justify-center items-center">
                <span
                  style={{ color: `${statusCharacter}` }}
                  className={`font-semibold text-xl text-center rounded-2xl py-1 px-2 bg-white`}
                >
                  {status} - {specie}
                </span>
              </div>
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
