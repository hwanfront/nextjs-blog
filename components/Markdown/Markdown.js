import styles from "./Markdown.module.scss";
import ReactMarkdown from "react-markdown";

const Markdown = ({ children }) => (
  <ReactMarkdown className={styles.reactMarkDown}>{children}</ReactMarkdown>
);

export default Markdown;
