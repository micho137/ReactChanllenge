import { Pagination } from "@mui/material";

export const PaginationCH = ({ page, maxPages, setPage }) => {
  return (
    <div className="flex justify-center items-center mb-2">
      <div>
        <Pagination
          count={maxPages}
          variant="outlined"
          size="large"
          page={page}
          onChange={(e, v) => {
            setPage(v);
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              border: "solid 1px #22c55e",
              fontWeight: "bold",
            },
            ".Mui-selected": {
              backgroundColor: "#22c55e",
            },
          }}
        />
      </div>
    </div>
  );
};
