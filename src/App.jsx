import QuotesTiles from "./components/QuotesTiles";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div className="bg-gray-100 py-10 space-y-10  items-center">
        <QuotesTiles />
        <TodoApp />
      </div>
    </>
  );
}

export default App;
