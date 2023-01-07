import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;

// const backgroundArr = ["./imgs/plus.png", "./imgs/minus-sign.png"];
// const randomIndex = Math.floor(Math.random() * backgroundArr.length);
// const backgroundImg = backgroundArr[randomIndex];
// <Container>{/* <img src={`${img1}`} alt="" /> */}</Container>
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: url(${backgroundImg});
// `;

// background-image: url
// (${(props) => (props.backgroundImg ? props.backgroundImg : "")});
