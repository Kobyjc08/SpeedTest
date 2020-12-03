import db from './data/db.json';
import { useCheckout } from './hooks/useCheckout';

function App() {
  const { total, scan } = useCheckout();
  console.log(total);
  scan('Hello World');
  return (
    <div className="min-h-screen bg-gray-200 px-4">
      <h1>Cofi-test</h1>
    </div>
  );
}

export default App;
