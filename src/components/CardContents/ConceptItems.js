import "./ConceptItems.css";
const ConceptItems = (_item) => {
  return (
    <li className="concept">
      <img src={_item.img} alt={_item.title} />
      <h2>{_item.title}</h2>
      <p>{_item.description}</p>
    </li>
  );
};
export default ConceptItems;
