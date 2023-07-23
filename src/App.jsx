import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { useState } from "react";
const App = () => {
  const [color, setColor] = useState(new Values("#ff99cc").all(10));
  console.log(color);
  const addColor = (color) => {
    setColor(new Values(color).all(10));
  };
  return (
    <main style={{ background: "#e2e8f0" }}>
      <Form addColor={addColor} />
      <ColorList color={color} />
    </main>
  );
};
export default App;
