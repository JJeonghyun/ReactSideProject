import styled from "styled-components";

import ItemContainer from "./Item/Container";
import LogoContainer from "./Logo/Container";

const FooterComp = () => {
  return (
    <FooterBox>
      <div>
        <div>Uber</div>
        <div>고객지원 센터 방문</div>
        <div>
          <ItemContainer />
        </div>
        <LogoContainer />
        <div>
          <div>© 2023 Uber Technologies Inc.</div>
          <div>
            <div>개인정보 보호</div>
            <div>접근성</div>
            <div>이용약관</div>
          </div>
        </div>
      </div>
    </FooterBox>
  );
};
export default FooterComp;

const FooterBox = styled.div`
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  padding: 5% 0;
  & > div {
    width: 75%;
    margin: 0 auto;
    & > div {
      padding: 15px 0;
      &:nth-child(3) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        & > div {
          padding: 15px 0;
          & > div {
            padding: 10px 0;
          }
        }
      }
    }
    & > div:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & > div {
        width: 50%;
      }
      & > div:last-child {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        & > div {
          padding: 0 10px;
        }
      }
    }
  }
`;
