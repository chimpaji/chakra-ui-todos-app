import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ todos, addTodo }) => {
  const toast = useToast();

  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "Type Something🤨",
        description: "Cant create a todo from BLANK",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = { id: nanoid(), content };
    addTodo(todo);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant="filled"
          placeholder="Wanna do something?"
          name="todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></Input>
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
