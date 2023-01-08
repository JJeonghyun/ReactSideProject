import styled from "styled-components";

const LogoComp = () => {
  return (
    <LogoBox>
      <div>
        <div>
          <img src="./imgs/facebook.png" alt="" />
        </div>
        <div>
          <img src="./imgs/twitter.png" alt="" />
        </div>
        <div>
          <img src="./imgs/youtube.png" alt="" />
        </div>
        <div>
          <img src="./imgs/linkedin.png" alt="" />
        </div>
        <div>
          <img src="./imgs/instagram.png" alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src="./imgs/web.png" alt="" /> 한국어
        </div>
        <div>
          <img src="./imgs/gps.png" alt="" /> 위치
        </div>
      </div>
    </LogoBox>
  );
};

export default LogoComp;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div:first-child {
    width: 49%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    & > div {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      & > img {
        width: 30%;
        filter: invert(1);
        padding: 0 5px 0 0;
      }
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
      }
    }
  }
  & > div:last-child {
    width: 49%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > div {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0;
      & > img {
        width: 25%;
        filter: invert(1);
        padding: 0 5px 0 0;
      }
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
      }
    }
  }
`;
