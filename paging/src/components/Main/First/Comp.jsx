import styled from "styled-components";

const FirstComp = ({ hiddenView, setView }) => {
  return (
    <FirstBox>
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg"
          alt=""
        />
        <div>회사소개</div>
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
          <>
            <div>
              Uber는 강한 실천력을 자랑합니다. 사람들이 어디로든 이동하고,
              무엇이든 배달받으며, 수익을 올리도록 지원하는 사명을 완수하기 위해
              끊임없이 노력합니다. 누구나 쉽게 이동하는 세상은 Uber의 사명인
              동시에 본질이기도 하며 기업 전체를 관통하는 기본 정신입니다.
              우리를 매일 아침 일어나게 하는 원동력이고 더 좋은 이동 방법을 계속
              고민하게 하는 자극제입니다. Uber는 여러분을 우선적으로 생각합니다.
              어디로든 이동하고 원하는 것을 배달받고 원하는 방식으로 수입을
              올리도록 도와드립니다. 전 세계 모든 곳에서 실시간으로, 그리고
              지금과 같은 놀라운 속도로 말이죠.
            </div>
            <div>
              Uber는 물리적 세계와 디지털 세계를 연결하는 테크 기업으로, 터치 한
              번으로 이동할 수 있도록 지원합니다. Uber는 누구나 평등한 이동권을
              보장받는 세상을 만들고자 합니다. 안전하게 이동하고, 안전하게
              수입을 올릴 수 있습니다. 친환경적인 방법을 사용하면서요. Uber는
              성별, 인종, 종교, 능력, 성적 지향에 관계없이 누구나 안심하고
              자유롭게 이동하며 수입을 올릴 수 있는 권리를 옹호합니다. 물론
              지금까지의 여정에 성공만 있었던 것은 아닙니다. 하지만 Uber는
              실패를 두려워하지 않습니다. 실패를 통해 더욱 발전하고, 현명해지고,
              강해질 수 있기 때문입니다. 또한, 실패를 통해 Uber는 고객,
              지역사회와 도시, 다양한 전 세계 파트너를 위해 옳은 일을 해나가는
              데 더 전념합니다.
            </div>
            <div>
              Uber에 대한 아이디어는 2008년 겨울, 파리의 어느 눈 내리던 밤에
              탄생했으며 그 이후로도 혁신과 재창조를 위한 노력은 변함없이
              이어지고 있습니다. 글로벌 플랫폼으로 성장한 Uber는 유연한 수입,
              사람과 사물의 이동을 지원하며 끊임없는 성장을 거듭하고 있습니다.
              일반 차량을 대상으로 서비스를 시작했지만 이제 이륜 차량 서비스와
              18륜 화물 운송에 이르기까지 그 서비스를 확장했습니다. 고객은
              테이크아웃 음식에서부터 생필품, 의약품에 이르기까지 언제든 원하는
              것을 배달받을 수 있고 수익을 올릴 수 있습니다. 기사 신원 조회부터
              실시간 인증에 이르기까지, 언제나 안전을 최우선으로 하고 있습니다.
              Uber의 혁신 추구는 언제나 현재 진행형입니다. 항상 초심을 잃지 않고
              끊임없이 달려가겠습니다.
            </div>
          </>
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
    position: relative;
    & > img {
      width: 100%;
      object-position: center center;
      object-fit: cover;
      overflow: hidden;
      height: 100%;
    }
    & > div {
      position: absolute;
      top: 70%;
      left: 20%;
      color: white;
      font-size: 3rem;
      font-weight: 850;
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
