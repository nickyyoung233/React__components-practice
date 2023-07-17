import keyConceptsImage from "../../assets/images/key-concepts.png";
import "./Header.css";
import FlexBox from "../UI/FlexBox";
const Header = () => {
  return (
    <FlexBox className="header">
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </FlexBox>
  );
};
export default Header;
