import "../styles/reset.scss";
import "../styles/global.scss";
import { RecoilRoot } from "recoil";

// 다른 모든 페이지에서 공통적으로 사용되는 최상위 구성 요소
const App = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;
