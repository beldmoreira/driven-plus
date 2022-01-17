import { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../services/api';
import PinkButton from '../PinkButton';
import Input from '../Input';
import Container from '../Container';
import StyledLink from '../StyledLink';

 function Register(){
  const [userData, setUserData] = useState({ name: '', email: '', password: '', image: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

    function handleLogin(e) {
      e.preventDefault();
      const promise = api.signUp({...userData})
      promise.then(response => {
      navigate('/')
      });
      promise.catch(error => alert("Parece que algo deu errado. Confira seus dados e tente novamente por favor :)"));
    }
      
  
return(
<Container>
    <form onSubmit={handleLogin}>
    <Input
     type="name" 
     value={userData.name} 
     onChange={handleChange}
     placeholder="Nome"/> 
    <Input 
    type="cpf"
    value={userData.cpf}
    onChange={handleChange} 
    placeholder="CPF"/> 
    <Input
    type="email"
    value={userData.email}
    onChange={handleChange}
    placeholder="E-mail" /> 
    <Input 
    type="password"
    value={userData.password}
    onChange={handleChange} 
    placeholder="Senha"/>
    <PinkButton type="submit">
       CADASTRAR
    </PinkButton>
    </form>
    <StyledLink to="/">
      Já possui uma conta? Entre 
    </StyledLink>
</Container>
);
}
export default Register;
