import './Contatos.css'

import W from '../../image.C/whatsapp.png'

function Contatos(){
    return(
        <>
        
        <div class='ponto'>
        <h1 id="h1-1">Precisa de ajuda?</h1>
        <h1 id="h1-2">Veja enrar em contato !</h1>
        </div>
        <div class='caixa'>
            <div class='pnt'>
                <img src={W} id="img-1" />
                <h2 id="h2-1">Whatsapp</h2>
            </div>
        </div>
        

        </>
    )
}
export default Contatos;