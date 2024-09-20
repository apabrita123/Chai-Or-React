import "./App.css";
import ActionAreaCard from "./components/Card";

function App() {
  let model1 = {
    title: "Spider",
    img: "https://images.pexels.com/photos/997313/pexels-photo-997313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Jhon",
  };

  let model2 = {
    title: "Lizard",
    img: "https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Hitesh",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-2">
        Tailwind test
      </h1>
      <ActionAreaCard model={model1} />
      <ActionAreaCard model={model2} />
    </>
  );
}

export default App;
