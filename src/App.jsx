import Tariff from './components/Tariff';
import './App.css'
import { useState } from 'react';


function App() {
  const [selectedId, setSelectedId] = useState();

  return (
    <>
      <div className="plans">
        {tariffs.map((tariff, i) =>
          <Tariff
            key={tariff.id}
            card={tariff}
            isSelected={tariff.id === selectedId}
            setId={setSelectedId}
            theme={themes[i]}
          />
        )
        }
      </div>

    </>
  )
}

export default App;
