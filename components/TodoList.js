import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoListSelector } from "./states";

function TodoList() {
  const todoListWithKorTimestamp = useRecoilValue(todoListSelector);

  return (
    <ul className="todo">
      {todoListWithKorTimestamp.map((x) => (
        <TodoItem key={x.id} {...x} />
      ))}
    </ul>
  );
}

export default TodoList;
