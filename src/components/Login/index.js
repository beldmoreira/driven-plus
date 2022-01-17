import { useState} from 'react/cjs/react.development';
import { useContext } from 'react';
import LoginContext from '../../contexts/loginContext';
import { useNavigate } from 'react-router';
import api from '../../services/api';
import PinkButton from '../PinkButton';
import Input from '../Input';
import Logo from '../Logo';
import Container from '../Container';
import StyledLink from '../StyledLink';


 function Login (){
    const[userData,setUserData]= useState({ email: '', password: '' });
    const[inputMode, setInputMode]= useState(false);
    const {setToken} = useContext(LoginContext)
    const navigate = useNavigate();

    
    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      }
    
    function handleLogin(e) {
        e.preventDefault();
    
        setInputMode(true);
        const promise =  api.login({ ...userData });
        promise.then((response) => {
               setToken(response.data);
               setInputMode(false);
        if (response.data.membership === null ){
            navigate('/subscriptions');    
        } else if (response.data.membership !== null){
            navigate('/home');
        }
      });
        promise.catch(error => alert("Parece que algo deu errado. Confira seus dados e tente novamente por favor :)"));
    }
      

return(
    <>
    <Container>
        <Logo/>
        <form onSubmit={handleLogin}>
        <Input
         type="email"
         value={userData.email}
         disabled = {inputMode}
         onChange={handleChange} 
         placeholder="E-mail"
         />
        <Input 
         type= "password"
         value={userData.password}
         disabled = {inputMode}
         onChange={handleChange}
         placeholder="Senha"
         /> 
        <PinkButton type="submit">
             ENTRAR 
        </PinkButton>
        </form>

        <StyledLink to="/sign-up"> 
        Não possui uma conta? Cadastre-se
        </StyledLink>
    </Container>
    </>
    
    );
}
export default Login;