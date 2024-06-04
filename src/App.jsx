import Tariff from './components/Tariff';
import './App.css'
import tariffs from './common/Tariff';
import { useState } from 'react';
import themeA from "./styles/300.module.css";
import themeB from "./styles/450.module.css";
import themeC from "./styles/550.module.css";
import themeD from "./styles/1000.module.css";

function App() {
  const [selectedId, setSelectedId] = useState();
  const themes = [themeA, themeB, themeC, themeD];

  return (
    <>
      <div className="plans">
        {tariffs.map((tariff, i) =>
          <Tariff
            key={tariff.id}
            card={tariff}
            isSelected={tariff.id === selectedId}
            // setId={setSelectedId}
            theme={themes[i]}
          />
        )
        }
      </div>

    </>
  )
}

export default App;
