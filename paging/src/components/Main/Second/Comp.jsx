import styled from "styled-components";

const SecondComp = ({ dataArr }) => {
  return (
    <SecondBox>
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/v1590112350/assets/ba/e2d6c0-0335-4c4c-ad45-04097c24e819/original/dara-desktop.jpg"
          alt=""
        />
      </div>
      {dataArr.map((item, index) => (
        <>
          <div>
            <div>
              <div>
                <img src={item.imgSrc} alt="" />
              </div>
              <div>
                <div>{item.title}</div>
                <div>{item.detail}</div>
                <div>{item.etc}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </SecondBox>
  );
};
export default SecondComp;

const SecondBox = styled.div`
  width: 100%;
  & > div:first-child {
    height: 50vh;
    & > img {
      width: 100%;
      object-position: center center;
      object-fit: cover;
      overflow: hidden;
      height: 100%;
    }
  }
  & > div:nth-child(2),
  & > div:nth-child(3) {
    width: 100%;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75%;
      margin: 0 auto;
      padding: 3% 0 0 0;
      & > div {
        width: 47%;
        &:last-child > div:first-child {
          font-size: 2.5rem;
          font-weight: 800;
        }
        &:last-child > div:nth-child(2) {
          padding: 5% 0;
          width: 75%;
          letter-spacing: 2px;
        }
        &:last-child > div:last-child {
        }
      }
    }
  }
`;
