import SpringCashDialog from '@/components/SpringCashDialog';

import './App.css';

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <SpringCashDialog number="4201 1245 8789 2213" exp="12/32" cvc="123" />
    </main>
  );
}

export default App;
