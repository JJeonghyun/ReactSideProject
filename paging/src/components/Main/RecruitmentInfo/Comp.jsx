import styled from "styled-components";

const RecruitInfoComp = () => {
  return (
    <RecruitBox>
      <div>
        <div>
          <div>함께 새로운 세상을 만들어 가요</div>
          <div>채용정보 보기</div>
        </div>
        <div>
          <img
            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
            alt=""
          />
        </div>
      </div>
    </RecruitBox>
  );
};

export default RecruitInfoComp;

const RecruitBox = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    padding: 5% 0;
    & > div {
      width: 40%;
      &:first-child > div:first-child {
        font-size: 3rem;
        font-weight: 900;
        padding: 0 0 30px 0;
      }
      &:first-child > div:last-child {
        color: white;
        background-color: rgba(0, 0, 0, 1);
        width: fit-content;
        padding: 10px 25px;
        border-radius: 10px;
        cursor: pointer;
      }
      &:last-child > img {
        width: 100%;
      }
    }
  }
`;
