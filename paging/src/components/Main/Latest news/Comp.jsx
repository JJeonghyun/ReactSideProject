import { useState } from "react";
import styled from "styled-components";

import ItemContainer from "./Item/Container";

const NewComp = () => {
  const [companyInfo, setInfo] = useState([
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg",
      title: "뉴스룸",
      info: `파트너십과 이니셔티브, 앱 업데이트, 내 지역 및 전 세계의 다양한 소식을 받아보세요.`,
      buttonInner: "뉴스룸으로 이동",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg",
      title: "블로그",
      info: `Uber 제품과 파트너십 등에 대해 자세히 알아보세요.`,
      buttonInner: "게시글 읽기",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg",
      title: "투자자 정보",
      info: `재무 보고서를 다운로드하고 다음 분기 계획과 사회적 책임 경영 목표에 대해 자세히 알아보세요.`,
      buttonInner: "자세히 알아보기",
    },
  ]);
  return (
    <NewBox>
      <div>
        <div>최신 소식을 확인하세요</div>
        <ItemContainer companyInfo={companyInfo} />
      </div>
    </NewBox>
  );
};
export default NewComp;

const NewBox = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 7% 0;
  & > div {
    & > div:first-child {
      font-size: 2rem;
      font-weight: 850;
    }
  }
`;
