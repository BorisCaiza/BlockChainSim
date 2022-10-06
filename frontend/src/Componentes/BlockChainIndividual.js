function BlockChainIndividual(usuario) {


    console.log(usuario)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos="flip-right">
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.hash}</li>
                        <li className='list-group-item'>{usuario.body}</li>
                        <li className='list-group-item'>{usuario.previousHash}</li>
                        <li className='list-group-item'>{usuario.heigh}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}


export default BlockChainIndividual;