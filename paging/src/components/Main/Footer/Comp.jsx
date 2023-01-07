import styled from "styled-components";

const FooterComp = () => {
  return (
    <FooterBox>
      <div>
        <div>Uber</div>
        <div>고객지원 센터 방문</div>
        <div>
          <div>
            <div>기업정보 </div>
            <div>기업정보1</div>
            <div>기업정보1</div>
            <div>기업정보1</div>
            <div>기업정보1</div>
          </div>
          <div>
            <div>기업정보 </div>
            <div>기업정보2</div>
            <div>기업정보2</div>
            <div>기업정보2</div>
            <div>기업정보2</div>
          </div>
          <div>
            <div>기업정보 </div>
            <div>기업정보3</div>
            <div>기업정보3</div>
            <div>기업정보3</div>
            <div>기업정보3</div>
          </div>
          <div>
            <div>기업정보 </div>
            <div>기업정보3</div>
            <div>기업정보3</div>
            <div>기업정보3</div>
            <div>기업정보3</div>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div></div>
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
        align-items: center;
        width: 100%;
        & > div {
          padding: 15px 0;
          & > div {
            padding: 10px 0;
          }
        }
      }
    }
  }
`;
