import FirstContainer from "./First/Container";
import FooterContainer from "./Footer/Container";
import NewContainer from "./Latest news/Container";
import RecruitInfoContainer from "./RecruitmentInfo/Container";
import SecondContainer from "./Second/Container";
import ThirdContainer from "./Third/Container";

const MainComp = () => {
  return (
    <>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <NewContainer />
      <RecruitInfoContainer />
      <FooterContainer />
    </>
  );
};

export default MainComp;
