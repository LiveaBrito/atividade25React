import imgCidade from '../assets/imgCidade.jpg';
import imgMontanha from '../assets/imgMontanha.jpg';
import imgLago from '../assets/imgLago.jpg';

function ImagensAleatorias(props){
    return <img src={props.url} alt="Imagem aleatória dentre as imagens selecionadas" />
}

function Imagens(){
    const urlImagens = [imgCidade, "", imgMontanha,"",imgLago,"",""];

    return(
        <>
        <h1>Array de Imagens</h1>
        <ul>
        {urlImagens.map((img)=>{
            if (img != ""){
                return <ImagensAleatorias url={img} />
            }
        })}
        </ul>
        </>
    );
}

export default Imagens;
