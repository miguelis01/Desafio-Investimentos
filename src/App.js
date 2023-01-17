import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [indicadores, setIndicadores] = useState(null)

  useEffect(() => {
    startAPI()
    console.log('i fire once');
   }, [])

  function startAPI() {
    axios
      .get("http://localhost:3000/indicadores")
      .then(response => {
        console.log(response.data);
        setIndicadores(response.data)
      })
      // if error
      .catch(function(error) {
        console.log(error);
      });

      axios
      .get("http://localhost:3000/simulacoes")
      .then(response => {
        var simulacoes = response.data;
        console.log(simulacoes);
      })
      // if error
      .catch(function(error) {
        console.log(error);
      });

  }

    return (
      <div>
        <button type="submit" label="Send" onClick={(() => console.log("ws"))}>
          Send!
        </button>
        {indicadores ? indicadores[0].nome : null}
      </div>
    );

}
export default App;
