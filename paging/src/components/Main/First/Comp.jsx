import styled from "styled-components";

const FirstComp = ({ hiddenView, setView }) => {
  return (
    <FirstBox>
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg"
          alt=""
        />
      </div>
      <div>
        <div>
          <div>Uber는 이동및 운송의 혁신을 추구한다</div>
          <div>
            누구나 쉽게 이동하는 세상을 만드는 것은 우리의 사명인 동시에
            본질이며, 기업 전체를 관통하는 기본 정신입니다. 매일 아침 다시
            업무에 매진하게 해주는 목표이자 언제나 더 좋은 이동 방법을 고민하게
            하는 자극제입니다. 저희는 언제나 사용자 편의를 우선 고려합니다.
            어디로든 편안하게 이동하고, 원하는 것을 바로 배달받고, 원하는
            방식대로 수입을 올리실 수 있도록 돕습니다. 전 세계 모든 곳에서.
            실시간으로. 지금과 같은 놀라운 속도로 말이죠.
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setView((state) => !state);
          }}
        >
          <div>Uber의 사명 선언문 전체보기</div>
          <div>
            <img
              src={`${
                hiddenView ? "./imgs/plus.png" : "./imgs/minus-sign.png"
              }`}
              alt=""
            />
          </div>
        </div>
        {!hiddenView ? (
          <div>
            Uber는 강한 실천력을 자랑합니다. 사람들이 어디로든 이동하고,
            무엇이든 배달받으며, 수익을 올리도록 지원하는 사명을 완수하기 위해
            끊임없이 노력합니다. 누구나 쉽게 이동하는 세상은 Uber의 사명인
            동시에 본질이기도 하며 기업 전체를 관통하는 기본 정신입니다. 우리를
            매일 아침 일어나게 하는 원동력이고 더 좋은 이동 방법을 계속 고민하게
            하는 자극제입니다. Uber는 여러분을 우선적으로 생각합니다. 어디로든
            이동하고 원하는 것을 배달받고 원하는 방식으로 수입을 올리도록
            도와드립니다. 전 세계 모든 곳에서 실시간으로, 그리고 지금과 같은
            놀라운 속도로 말이죠.
          </div>
        ) : (
          <></>
        )}
        <hr />
      </div>
    </FirstBox>
  );
};
export default FirstComp;

const FirstBox = styled.div`
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
  & > div:nth-child(2) {
    width: 100%;
    & > div {
      width: 75%;
      margin: 0 auto;
      padding: 3% 0 0 0;
      & > div:first-child {
        display: inline-block;
        font-size: 2rem;
        font-weight: 700;
      }
      & > div:last-child {
        width: 60%;
        padding: 20px 0;
        font-size: 1.3rem;
        letter-spacing: 2px;
      }
    }
  }
  & > div:last-child {
    width: 100%;
    padding: 0 0 3% 0;
    & > div {
      width: 70%;
      margin: 0 auto;
      padding: 3% 0 0 0;
      &:first-child {
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div:last-child {
          width: 20px;
          & > img {
            width: 100%;
          }
        }
      }
    }
  }
  hr {
    width: 70%;
    margin: 20px auto;
  }
`;
