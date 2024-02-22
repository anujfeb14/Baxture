import { Card, Text, Button, Group, Image, Flex } from "@mantine/core";
import { FiPhoneCall } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const CardView = ({ user }) => {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex justify="center">
          <Image
            radius="50%"
            h={120}
            w={120}
            src={`https://api.dicebear.com/7.x/initials/svg?seed= + ${user.name}`}
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

        <Flex gap="xs">
          <Button variant="filled" style={{ minWidth: "120px" }}>
            <span style={{ marginRight: "10px" }}>
              <FiUserPlus />
            </span>
            Follow
          </Button>
          <Button variant="outline" style={{ minWidth: "120px" }}>
            <span style={{ marginRight: "10px" }}>
              <RiDeleteBin6Line />
            </span>
            Delete
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default CardView;
