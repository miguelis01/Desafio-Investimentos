import "./Styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Resultados({info}) {
    const [api, setApi] = useState([])
    const [resultado, setResultado] = useState(null)

    useEffect(() => {
      startAPI()
    }, [])
    
    useEffect(() => {
        getResultados(info)
     },[info])

    function startAPI() {
        axios
        .get("http://localhost:3000/simulacoes")
        .then(response => {
          var simulacoes = response.data;
          setApi(simulacoes)
          console.log(simulacoes)
        })
        // if error
        .catch(function(error) {
          console.log(error);
        });
    }

    function getResultados(info) {
        api.forEach(element => {
            if(info.tipoIndexacao == element.tipoIndexacao && info.tipoRendimento == element.tipoRendimento){
                setResultado(element)
            }
        });
    }

    return(<>
        <div className="app">a</div>
        {resultado ? <div className="app">{resultado.ganhoLiquido}</div> : null}
    </>
    )
}
export default Resultados;