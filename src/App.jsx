
import './App.css'

function App() {

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
