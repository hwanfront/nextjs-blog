const TodoItem = ({ userId, timestamp, text }) => (
  <li className="todo__item">
    <li className="messages__item">
      <h3>
        {userId} <sub>{timestamp}</sub>
      </h3>
      {text}
    </li>
  </li>
);

export default TodoItem;
