import "../styles/global.scss";

// 다른 모든 페이지에서 공통적으로 사용되는 최상위 구성 요소
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
