import "./Header.css";
import FlexBox from "../UI/FlexBox";
const Header = ({ img }) => {
  return (
    <FlexBox className="header">
      <img src={img} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </FlexBox>
  );
};
export default Header;
