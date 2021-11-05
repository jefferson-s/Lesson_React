const Card = () =>{
    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">
                <button type="button" class="btn btn-warning">
                    Adicionar
                </button>
                <button type="button" class="btn btn-dark">
                    Remover
                </button>
                <p>0</p>
            </div>
        </div>  
    )
}

export default Card; 