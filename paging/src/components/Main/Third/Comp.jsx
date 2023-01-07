import { useState } from "react";
import styled from "styled-components";

import ItemContainer from "./Item/Container";

const ThirdComp = () => {
  const [companyInfo, setInfo] = useState([
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1555540623/assets/cb/9b789f-167d-4a57-ac3a-c23060bfa9e8/original/170830_DaraAllHands_0I7A9940_R2.jpg",
      title: "Uber를 이끄는 사람들",
      info: `Uber는 승객과 기사, 직원들을 위해 언제나 옳은 일을 해야 한다는 기업
        문화를 정착시켜 나가고 있습니다. 이 문화를 이끌고 있는 팀에 대해
        자세히 알아보세요.`,
      buttonInner: "경영진 소개",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1619719896/assets/96/8d24b6-76cd-4dcb-8b89-e3125c603538/original/test2259.jpg",
      title: "다양성을 존중하는 기업",
      info: `우리의 목표는 도시의 다양성을 반영한 포용적인 근무 환경을 조성하는 것입니다. 무엇보다 개인의 정체성과 개성이 강점으로 인정되는 문화와 다양한 배경의 사람들이 함께 발전할 수 있는 환경을 통해 직원과 고객 모두가 행복한 회사를 만들어 가고자 합니다.`,
      buttonInner: "다양성에 대해 자세히 알아보기",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1664822806/assets/b6/c8a24d-8e79-45a1-9e03-adead244ef0a/original/about-ec-image-01-thumb.png",
      title: "윤리적이고 청렴하게 행동하기",
      info: `Uber의 윤리 및 규정 준수 프로그램 헌장은 최고로 엄격한 수준의 기업 윤리 및 청렴성에 대한 Uber의 약속을 명시하고 있습니다. 투명성은 윤리적인 조직 문화에 있어 매우 중요하며, Uber는 윤리 핫라인 운영 및 확장 가능하고 효과적인 규정 준수 이니셔티브를 통해 투명성을 달성하고 있습니다.`,
      buttonInner: "자세히 알아보기",
    },
  ]);
  return (
    <ThirdBox>
      <div>
        <div>회사정보</div>
        <ItemContainer companyInfo={companyInfo} />
      </div>
    </ThirdBox>
  );
};

export default ThirdComp;

const ThirdBox = styled.div`
  width: 75%;
  margin: 0 auto;
  & > div {
    & > div:first-child {
      font-size: 2rem;
      font-weight: 850;
    }
  }
`;
