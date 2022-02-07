import TestItem from "./TestItem";
import { useRecoilValue } from "recoil";
import { testListState, testListSelector } from "./states";

function Testlist() {
  const testList = useRecoilValue(testListState);
  const testListWithKorTimestamp = useRecoilValue(testListSelector);

  return (
    <>
      <ul className="test">
        {testList.map((x) => (
          <TestItem key={x.id} {...x} />
        ))}
      </ul>
      <br />
      <ul className="test">
        {testListWithKorTimestamp.map((x) => (
          <TestItem key={x.id} {...x} />
        ))}
      </ul>
    </>
  );
}

export default Testlist;
