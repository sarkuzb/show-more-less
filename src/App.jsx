import { useState } from "react";
import ShowMoreLess from "./show-more-less";

function App() {
  const [count, setCount] = useState(0);

  return <ShowMoreLess />;
}

export default App;
