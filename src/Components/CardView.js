import { Card, Text, Button, Group, Image, Flex } from "@mantine/core";
import { FiPhoneCall } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/dataSlice";
import { FiUserMinus } from "react-icons/fi";
import { USER_INITIALS_API } from "../utils/Constants";

const CardView = ({ user }) => {
  const allUsers = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    const filteredData = allUsers.filter((user) => user.id !== userId);
    dispatch(addUser(filteredData));
    console.log(filteredData);
  };

  const handleFollow = (userId) => {
    const updatedData = allUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, isFollowing: !user.isFollowing };
      } else {
        return user;
      }
    });
    dispatch(addUser(updatedData));
  };

  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex justify="center">
          <Image
            radius="50%"
            h={120}
            w={120}
            src={`${USER_INITIALS_API} + ${user.name}`}
            alt="User Icon"
          />
        </Flex>

        <Group justify="center" mt="md" mb="xs">
          <Text fw={500}>{user.name}</Text>
        </Group>

        <Text size="sm" mt="sm" c="dimmed">
          <span>@ </span>
          {user.email}
        </Text>

        <Text size="sm" mt="sm" c="dimmed">
          <span>
            <FiPhoneCall /> {user.phone}
          </span>
        </Text>

        <Text size="sm" mt="sm" mb="sm" c="dimmed">
          <span>
            <CiGlobe />
          </span>
          {user.website}
        </Text>

        <div>
          <Flex gap="xs">
            <Button
              variant={user.isFollowing ? "default" : "filled"}
              style={{ minWidth: "50%" }}
              onClick={() => handleFollow(user.id)}
            >
              <span style={{ marginRight: "10px" }}>
                {user.isFollowing ? <FiUserMinus /> : <FiUserPlus />}
              </span>
              {user.isFollowing ? "Unfollow" : "Follow"}
            </Button>

            <Button
              variant="outline"
              style={{ minWidth: "50%" }}
              onClick={() => handleDelete(user.id)}
            >
              <span style={{ marginRight: "10px" }}>
                <RiDeleteBin6Line />
              </span>
              Delete
            </Button>
          </Flex>
        </div>
      </Card>
    </div>
  );
};

export default CardView;
