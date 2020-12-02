import db from './data/db.json';
import { useCheckout } from './hooks/useCheckout';

function App() {
  console.log(db);
  const total = useCheckout();
  return (
    <div className="min-h-screen bg-gray-200 px-4">
      <h1>Cofi-test</h1>
      {total}
    </div>
  );
}

export default App;
