import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
  }, []);

  const initialTodos = [
    { id: 1, content: "Your first todo 😅" },
    { id: 2, content: "Another one 😲" },
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      ></IconButton>
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo list
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo todos={todos} addTodo={addTodo} />
    </VStack>
  );
}

export default App;
