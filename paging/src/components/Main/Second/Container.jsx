import { useState } from "react";
import SecondComp from "./Comp";

const SecondContainer = () => {
  const [dataArr, setArr] = useState([
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1603308507/assets/f6/0c9607-ae68-43d5-9e88-79f3011d88ee/original/Sustainability.jpg",
      title: "지속 가능성",
      detail:
        "Uber는 2040년까지 완전 전기, 무배출 플랫폼으로 거듭나기 위해 최선을 다하고 있습니다. 이는 차량 서비스의 100%가 무배출 차량이나 대중교통, 마이크로 모빌리티로 이루어짐을 의미합니다. 세계 최대의 모빌리티 플랫폼인 Uber는 기후 변화 문제에 보다 적극적으로 대응할 책임이 있습니다. 이를 위해 승객에게 더 다양한 친환경 차량 서비스를 제공하고, 기사님들이 전기차를 운행할 수 있도록 돕고, 투명성을 최우선으로 하며, NGO 및 민간 부문과 협력하여 깨끗하고 공정한 에너지 전환을 촉진할 것입니다.",
      etc: "자세히 알아보기",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg",
      title: "차량 서비스, 그 이상을 향해",
      detail:
        "저희는 사람들이 목적지까지 편안하게 이동할 뿐만 아니라 빠르고 저렴하게 음식을 주문할 수 있도록 돕고, 의료 서비스 장벽을 허물고 새로운 화물 운송 예약 솔루션을 개발하며, 기업이 임직원에게 원활한 이동 수단을 제공할 수 있도록 돕고 있습니다. 또한 기사님들이 운행 및 배달을 통해 수익을 창출할 수 있도록 돕죠.",
      etc: "Uber 앱 이용 방법 ",
    },
    {
      imgSrc:
        "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555433729/assets/13/b383de-93a1-4327-8812-91de86e3edd9/original/_background-01.svg",
      title: "여러분의 안전이 Uber의 동력입니다",
      detail:
        "Uber가 중요하게 생각하는 것은 승객과 기사의 안전입니다. Uber는 모두의 안전을 위해 최선을 다하고 있으며 그 핵심에는 Uber의 최첨단 기술이 자리하고 있습니다. Uber는 안전 단체와 협력하여 더욱 안전하고 편리한 차량 서비스를 제공하기 위한 기술과 시스템을 만들어 갑니다.",
      etc: "자세히 알아보기 ",
    },
  ]);
  return <SecondComp dataArr={dataArr} />;
};
export default SecondContainer;
