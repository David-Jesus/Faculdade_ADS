import React, { useState, useEffect } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 

  

  async function HandleCadastro(e) {
    e.preventDefault();

    const dados = {
      email,
      senha
    };

    try{
      // alert(dados.email + "  " + dados.senha);::

        api.post('login', dados).then(response => {
            if (response.status === 200){
              alert('entrou');
            }
            else if (response.status === 401) {
              alert('usuário não cadastrado!');
            }
        });
    }  catch (error){
      alert("Erro ao cadastrar usuário " + error.message); 
    }
  }

  const classes = useStyles();
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form className={classes.form} noValidate onSubmit={HandleCadastro}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value= {email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value= {senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="cadastrar-usuario" variant="body2">
                {"Não tem uma conta? cadastre-se!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}