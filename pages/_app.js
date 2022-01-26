import "../styles/global.css";

// 다른 모든 페이지에서 공통적으로 사용되는 최상위 구성 요소
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
