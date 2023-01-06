import { useState } from "react";

import FirstComp from "./Comp";

const FirstContainer = () => {
  const [hiddenView, setView] = useState(false);
  return <FirstComp hiddenView={hiddenView} setView={setView} />;
};
export default FirstContainer;
