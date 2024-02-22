import { useSelector } from "react-redux";
import CardView from "./CardView";
import { Grid } from "@mantine/core";

const MainComponent = () => {
  const users = useSelector((store) => store.user.users);

  return (
    <>
      <Grid>
        {users.map((user) => (
          <Grid.Col key={user.id} span={{ base: 12, md: 6, lg: 3 }}>
            <CardView user={user} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default MainComponent;
