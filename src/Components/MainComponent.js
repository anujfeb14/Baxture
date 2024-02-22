import { useSelector } from "react-redux";
import CardView from "./CardView";
import { Flex } from "@mantine/core";

const MainComponent = () => {
  const users = useSelector((store) => store.user.users);

  return (
    <>
      <Flex
        mih={50}
        gap="lg"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        {users.map((user) => (
          <CardView key={user.id} user={user} />
        ))}
      </Flex>
    </>
  );
};

export default MainComponent;
