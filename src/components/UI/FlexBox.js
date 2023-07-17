import "./FlexBox.css";
const FlexBox = (props) => {
  const className = "flex-box " + props.className;
  return <div className={className}>{props.children}</div>;
};
export default FlexBox;
