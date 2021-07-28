import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" borderRadius="lg">
        No Todos, Yayyyy!!!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="thin"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id} justify="space-between">
          <Text>{todo.content}</Text>
          {/* <Spacer /> */}
          <IconButton
            icon={<FaTrash />}
            isRound={true}
            onClick={(e) => deleteTodo(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
