import { atom, selector } from "recoil";

const UserIds = Object.freeze(["aaa", "bbb"]);
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const todoList = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1643371725095 + i * 1000,
    text: `${i + 1}. todo`,
  }));

const getKorTimestamp = (timestamp) =>
  new Date(timestamp).toLocaleString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

export const todoListState = atom({
  key: "todoListState",
  default: todoList,
});

export const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList.map((todo) => ({
      ...todo,
      timestamp: getKorTimestamp(todo.timestamp),
    }));
  },
});
