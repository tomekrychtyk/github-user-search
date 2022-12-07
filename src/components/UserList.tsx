import { Box, List, Typography } from "@mui/material";
import { connect, ConnectedProps } from "react-redux";
import { IGithubUser } from "../interfaces/GithubApi";
import { useWindowSize } from "../hooks/useWindowSize";
import UserCard from "./UserCard";
import * as currentUserActions from "../redux/actions/current-user";
import { RootState } from "../redux/reducers";

const mapDispatch = {
  getUserDetails: currentUserActions.getDetails,
};

const mapState = (state: RootState) => ({
  users: state.users,
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  searchString: string;
  data: IGithubUser[] | undefined;
}

const UserList = (props: Props) => {
  const { searchString, data } = props;
  const [width] = useWindowSize();

  const handleUserSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = e.currentTarget;
    const user = (props.users.get("list")?.toJS() as IGithubUser[]).find(
      (user) => {
        return user.id === parseInt(id);
      }
    );

    if (user) {
      props.getUserDetails(user);
    }
  };

  return (
    <Box sx={{ paddingTop: "2.5rem" }}>
      {data?.length ? (
        <>
          <Typography>{`Showing users for "${searchString}"`}</Typography>
          <List sx={{ width: width > 899 ? "235px" : "100%" }}>
            {data.map((user) => {
              return (
                <UserCard
                  onUserSelect={handleUserSelect}
                  user={user}
                  key={user.id}
                />
              );
            })}
          </List>
        </>
      ) : null}
    </Box>
  );
};

export default connector(UserList);
