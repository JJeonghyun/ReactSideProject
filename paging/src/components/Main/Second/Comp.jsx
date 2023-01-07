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
          <div key={`second-box-${index}`}>
            <div key={`second-inner-box-${index}`}>
              <div key={`second-first-item-${index}`}>
                <img src={item.imgSrc} alt="" key={`img-${index}`} />
              </div>
              <div key={`second-second-item-${index}`}>
                <div key={`inner-first-item-${index}`}>{item.title}</div>
                <div key={`inner-second-item-${index}`}>{item.detail}</div>
                <div key={`inner-third-item-${index}`}>{item.etc}</div>
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
  & > div:nth-child(n + 1) {
    width: 100%;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 75%;
      margin: 0 auto;
      padding: 3% 0;
      & > div {
        width: 45%;
        padding: 0 10px;
        &:last-child > div:first-child {
          font-size: 2.3rem;
          font-weight: 800;
        }
        &:last-child > div:nth-child(2) {
          padding: 5% 0;
          width: 100%;
          letter-spacing: 2px;
        }
        &:last-child > div:last-child {
          display: inline-block;
          cursor: pointer;
          position: relative;
          border-bottom: 3px solid gray;
          padding: 5px 0;
          &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            width: 0;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          &:hover::after {
            width: 100%;
            border-bottom: 3px solid black;
          }
        }
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
