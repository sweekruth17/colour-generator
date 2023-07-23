import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
const ColorList = ({ color }) => {
  return (
    <section className="colors">
      {color.map((i, index) => {
        return <SingleColor key={nanoid()} index={index} data={i} />;
      })}
    </section>
  );
};
export default ColorList;
