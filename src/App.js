import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

import FlexBox from "./components/UI/FlexBox";
import Header from "./components/Header/Header";
import ConceptItems from "./components/CardContents/ConceptItems";

const concepts = [
  {
    title: "组件",
    image: componentsImage,
    description:
      "组件允许您将UI拆分为独立的、可重用的部分，并单独考虑每个部分。组件可以通过props接收数据，并且可以使用JSX呈现动态输出.",
  },
  {
    title: "状态",
    image: stateImage,
    description:
      "状态是可能随时间变化的数据。当它发生变化时，应该更新UI以反映更新的数据。每个组件可以维护自己的状态，多个组件可以共享状态.",
  },
  {
    title: "事件",
    image: eventsImage,
    description:
      "事件处理程序是通过props添加到(内置)组件的。将函数作为值传递给这些事件处理程序，以控制哪个函数针对哪个事件执行.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <FlexBox className="concepts">
        <ConceptItems
          img={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <ConceptItems
          img={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <ConceptItems
          img={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </FlexBox>
    </div>
  );
}

export default App;
