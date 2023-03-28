import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export const CardGeneralInfo = ({ id, name, info1, info2, info3 }) => {
  return (
    <>
      <Card
        sx={{
          border: "solid 3px #22c55e",
          width: "250px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
          ":hover": {
            backgroundColor: "#22c55e",
            border: "solid 3px white",
            color: "white",
          },
        }}
      >
        <CardActionArea>
          <Link to={`/${info3}/${id}`}>
            <CardContent
              className="flex flex-col justify-center items-center"
              sx={{ width: "250px", height: "200px" }}
            >
              <Typography gutterBottom className="font-semibold text-center">
                {info2}
              </Typography>
              <Typography
                fontWeight="bold"
                color="black"
                className="text-center hover:font-get-schwifty"
                gutterBottom
                variant="h5"
              >
                {name}
              </Typography>
              <div>
                <div className="flex justify-center items-center font-semibold text-center">
                  {info1}
                </div>
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </>
  );
};
