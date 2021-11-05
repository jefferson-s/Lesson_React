import { useState } from "react";
import Button from '../buton';

const Card = () =>{

    const [valor, setValor] = useState (0)

    function add(){
        setValor(valor + 1);
    }
    function del(){
        if(valor > 0){
        setValor(valor - 1);
        }else{
            alert("Não existe valor para remover");
        }
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">
                <Button
                className="btn btn-warning" 
                onClick={add}
                >
                    Adicionar
                </Button>
                <Button 
                className="btn btn-dark" 
                onClick={del}
                >
                    Remover
                </Button>
               
                <p>{valor}</p>
            </div>
        </div>  
    )
}

export default Card; 