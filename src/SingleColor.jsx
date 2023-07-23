import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";
const SingleColor = ({ data, index }) => {
  let { weight, hex } = data;
  hex = "#" + hex;
  // console.log(hex);
  const notification = () => {
    copy(hex);
    toast.success("Copied✅");
  };
  return (
    <article
      className={index > 10 ? "color-light" : "color"}
      style={{ backgroundColor: hex }}
      onClick={notification}
    >
      <ToastContainer />
      <p className=" percent-value">{weight}%</p>
      <p className=" color-value">{hex}</p>
    </article>
  );
};
export default SingleColor;
