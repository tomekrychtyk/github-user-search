import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { connect, ConnectedProps } from "react-redux";
import { IGithubRepo, IGithubUser } from "../interfaces/GithubApi";
import { RootState } from "../redux/reducers";

const mapState = (state: RootState) => {
  return {
    id: state.currentUser.get("id"),
    repos: state.currentUser.get("repos"),
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  onUserSelect: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  user: IGithubUser;
}

const UserCard = ({ user, onUserSelect, repos, id }: Props) => {
  const selected = user.id === id;
  const rotate = selected ? "-90deg" : "90deg";
  return (
    <>
      <ListItem
        key={user.id}
        sx={{ backgroundColor: "#eee", marginBottom: "16px" }}
      >
        <Box sx={{ paddingRight: "16px" }}>
          <img src={user.avatar_url} width="32" />
        </Box>
        <ListItemText>
          <Button id={`${user.id}`} onClick={onUserSelect}>
            {user.login}
          </Button>
        </ListItemText>
        <ListItemIcon>
          <ArrowForwardIosIcon sx={{ transform: `rotate(${rotate})` }} />
        </ListItemIcon>
      </ListItem>
      {repos?.toJS().length && selected ? (
        <List>
          {repos.toJS().map((repo: IGithubRepo) => {
            return (
              <ListItem
                key={repo.id}
                sx={{ backgroundColor: "#ddd", marginBottom: "8px" }}
              >
                <Box sx={{ position: "relative", width: "100%" }}>
                  <Box sx={{ width: "70%", overflow: "hidden" }}>
                    <Typography>
                      <a href={repo.html_url} target="_blank">
                        {repo.name}
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                    {repo.stargazers_count} <StarIcon />
                  </Box>
                </Box>
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </>
  );
};

export default connector(UserCard);
