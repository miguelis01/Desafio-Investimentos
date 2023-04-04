import {useState, useRef } from "react";
import "./Styles.css";
import Input from "../Form/input";
import {Form} from '@unform/web'
import Resultados from "../../Components/Resultados/Resultados";

function Simulador() {   

    const formRef = useRef(null)
    const [Botao1, setBotao1] = useState("bruto");
    const [Botao2, setBotao2] = useState("pre");
    const initialData = {
        aporteInicial: "",
        prazo:"",
        IPCA: "10.06",
        aporteMensal:"",
        rentabilidade:"",
        CDI: 9.18,
        tipoRendimento: Botao1,
        tipoIndexacao: Botao2
    }
    const [info, setInfo] = useState(initialData)

    function simular(data){
        data.tipoRendimento = Botao1;
        data.tipoIndexacao = Botao2
        setInfo(data)
    }

    function resetar(){
        formRef.current.reset()
        formRef.current.setData(initialData)
    }

    return(<>
        <div class="Container">
            <h2 class="Title">Simulador</h2>
            <Form ref={formRef} onSubmit={simular} initialData={initialData}>
            <div class="FormsContainer">

            <div class="FormBox">
                <h4>Rendimento</h4>
                <button type="button" class={Botao1 == "bruto" ? "Botao1Selecionado" : "Botao1Descelescionado"} onClick={(()=>setBotao1("bruto"))}>Bruto</button>
                <button type="button" class={Botao1 == "liquido" ? "Botao2Selecionado" : "Botao2Descelescionado"} onClick={(()=>setBotao1("liquido"))}>Liquido</button>
                <Input name="aporteInicial"/>
                <Input name="prazo"/>
                <Input name="IPCA"/>
            </div>
            <div class="FormBox">
                 <h4>Rendimento</h4>
                <button type="button" class={Botao2 == "pre" ? "Botao3Selecionado" : "Botao3Descelescionado"} onClick={(()=>setBotao2("pre"))}>pre</button>
                <button type="button" class={Botao2 == "pos" ? "Botao4Selecionado" : "Botao4Descelescionado"} onClick={(()=>setBotao2("pos"))}>pos</button>
                <button type="button" class={Botao2 == "ipca" ? "Botao5Selecionado" : "Botao5Descelescionado"} onClick={(()=>setBotao2("ipca"))}>ipca</button>
                <Input name="aporteMensal"/>
                <Input name="rentabilidade"/>
                <Input name="CDI"/>
            </div>
            </div>
            <div class="ButtonContainer">
                <button type="button" onClick={(()=> resetar())}>Limpar</button>
                <button type="submit">Simular</button>
            </div>  
            </Form>
        </div>
        <Resultados info={info}/>
        </>
    )
}
export default Simulador;