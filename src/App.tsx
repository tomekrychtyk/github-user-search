import { useState } from "react";
import { createTheme, ThemeProvider, Grid } from "@mui/material";
import { connect, ConnectedProps } from "react-redux";
import Nav from "./components/Nav";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { RootState } from "./redux/reducers";
import { IGithubUser } from "./interfaces/GithubApi";
import * as usersActions from "./redux/actions/users";

const theme = createTheme();

const mapState = (state: RootState) => ({
  users: state.users,
});

const mapDispatch = {
  getUsers: usersActions.getUsers,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

export const App = (props: Props) => {
  const [searchString, setSearchString] = useState("");

  const onSearch = () => {
    props.getUsers(searchString);
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Grid container>
        <Grid item md={2} xs={12} />
        <Grid item md={8} xs={12}>
          <Search
            onSearchStringChange={setSearchString}
            onSearch={onSearch}
            searchString={searchString}
          />
          <UserList
            searchString={searchString}
            data={props.users.get("list")?.toJS() as IGithubUser[]}
          />
        </Grid>
        <Grid item md={2} xs={12} />
      </Grid>
    </ThemeProvider>
  );
};

export default connector(App);
