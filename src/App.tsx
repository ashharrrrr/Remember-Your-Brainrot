import CardsRender from "./components/CardsRender";
import Nav from "./components/Nav";

function App() {
  
  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gray-900">
      <Nav />
      <div className="flex-grow flex items-center justify-center w-full p-5 pt-8">
        <CardsRender />
      </div>
    </div>
  );
}

export default App;
