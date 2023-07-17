import keyConceptsImage from "../../assets/images/key-concepts.png";
import "./Header.css";
import FlexBox from "../UI/FlexBox";
const Header = () => {
  return (
    <FlexBox className="header">
      <img src={keyConceptsImage} alt="小奖章" />
      <h1>React核心概念</h1>
      <p>你应该知道的关键React概念</p>
    </FlexBox>
  );
};
export default Header;
