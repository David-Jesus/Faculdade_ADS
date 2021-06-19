import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import '../cadastroCliente/index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));



export default function CadastroCliente() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
        email,
        senha,
        telefone
    };

    try {
      if(dados.email !== "" && dados.senha !== "" && dados.telefone !== "") {
        console.log(dados);
        api.put('/usuario', dados);
        alert('Salvo com sucesso');
        setEmail('');
        setSenha('');
        setTelefone(''); 
      }
      else {
        alert('É necessário preencher todos os campos!')
      }

    } catch (error) {
        alert("Erro ao cadastrar usuário " + error.message);            
    }
}

  const classes = useStyles();
  

  return (
    <div id="container">
    <h1>Cadastro de Usuário</h1>

    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleCadastro}>
         
      <div >
     
      <TextField
          id="email"
          label="email"
          defaultValue="Código"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          id="senha"
          label="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="telefone"
          label="Telefone"
          defaultValue="foo"
          variant="outlined"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

      </div>
      <Button variant="contained" color="secondary" type="submit" id="salvar">
        Salvar
      </Button>
    </form>
    </div>
  );
}
