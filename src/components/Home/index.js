import PinkButton from '../PinkButton';
import RedButton from '../RedButton';
import Font from './style';


export default function Home(props){
    return(
        <>
     <Font> Olá, {props.userInfo.name} </Font>
     <PinkButton> Solicitar brindes </PinkButton>
     <PinkButton> Materiais bônus de web </PinkButton>
     
     <PinkButton> Mudar plano </PinkButton>
     <RedButton> Cancelar plano </RedButton>
     </>
    );
}