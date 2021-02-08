package Atividade_Contatos;

import java.util.ArrayList;

public class Agenda {

	private ArrayList<Contatos> agenda = new ArrayList<>();
	
	public void listar(){
		
		int x = 0;
		while ( x < agenda.size()) {
			
			System.out.println();
			System.out.println("Código: " + agenda.get(x).getCodigo());
			System.out.println("Email: " +agenda.get(x).getEmail());
			System.out.println("Empresa: " +agenda.get(x).getEmpresa());
			System.out.println("Nome: " +agenda.get(x).getNome());
			System.out.println("Celular: " +agenda.get(x).getTelefoneCelular());
			System.out.println("Telefone Residencial: " +agenda.get(x).getTelefoneResidencial());
			System.out.println();
			x++;
		}
	}
	
	public void cadastraNovoContato(Contatos contato) {
		if(this.agenda.contains(contato)) {
			System.out.println("Este contato já existe!");
		}
		else {
			this.agenda.add(contato);
			System.out.println("Contato adicionado!");
		}
		
	}
	
	public void excluir(Contatos contato) {
		if(this.agenda.contains(contato)) {
			this.agenda.remove(contato);
		}
		else {
			System.out.println("Este contato não está cadastrado");
		}
	}
	
	public void atualizar(Contatos contato) {
		this.agenda.remove(0);
		this.agenda.add(0, contato);
	}
	
	
}
