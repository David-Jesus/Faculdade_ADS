package Atividade_Contatos;


public class AppMain {

	public static void main(String[] args) {
		
		Contatos contato1 = new Contatos();
		contato1.setCodigo(1);
		contato1.setEmail("teste@teste.com");
		contato1.setEmpresa("Teste");
		contato1.setNome("David");
		contato1.setTelefoneCelular("91254824");
		contato1.setTelefoneResidencial("3333-3333");
		
		Contatos contato = new Contatos();
		contato.setCodigo(2);
		contato.setEmail("teste2@teste.com");
		contato.setEmpresa("Teste2");
		contato.setNome("Luiz");
		contato.setTelefoneCelular("91254824");
		contato.setTelefoneResidencial("3333-3333");
	
		Contatos contato3 = new Contatos();
		contato3.setCodigo(3);
		contato3.setEmail("teste3@teste.com");
		contato3.setEmpresa("Teste3");
		contato3.setNome("Pedro");
		contato3.setTelefoneCelular("999-9999");
		contato3.setTelefoneResidencial("3333-3333");
		
		Contatos contato4 = new Contatos();
		contato4.setCodigo(4);
		contato4.setEmail("teste3@teste.com");
		contato4.setEmpresa("Teste3");
		contato4.setNome("Pedro");
		contato4.setTelefoneCelular("999-9999");
		contato4.setTelefoneResidencial("3333-3333");
		
		Agenda ag = new Agenda();
		
		ag.cadastraNovoContato(contato1);
		ag.cadastraNovoContato(contato);
		ag.atualizar(contato3);
		ag.cadastraNovoContato(contato4);

		ag.listar();
	}

}
