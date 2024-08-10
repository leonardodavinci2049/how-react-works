import { content } from "../data/content";
import Tabbed from "./Tabbed";

function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

export default App;
