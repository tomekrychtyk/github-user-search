import { Dispatch, SetStateAction } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {
  onSearchStringChange: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  searchString: string;
};

const Search = (props: Props) => {
  const handleSearchStringChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    props.onSearchStringChange(e.currentTarget.value);
  };

  const [width] = useWindowSize();

  return (
    <>
      <Box sx={{ paddingTop: "1rem" }}>
        <TextField
          placeholder="Enter username"
          type="search"
          onChange={handleSearchStringChange}
          sx={{ width: width > 899 ? "235px" : "100%" }}
        />
      </Box>
      <Box sx={{ paddingTop: ".75rem" }}>
        <Button
          variant="contained"
          onClick={props.onSearch}
          sx={{ width: width > 899 ? "235px" : "100%" }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default Search;
