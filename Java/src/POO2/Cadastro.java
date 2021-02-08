package POO2;

import java.util.ArrayList;

public class Cadastro extends Pessoa {

	private ArrayList<Pessoa> db = new ArrayList<>();
	private boolean status = false;

	public void addPessoas(Pessoa pessoa) {

		if (db.contains(pessoa) == false) {
			db.add(pessoa);
			System.out.println("Cadastrado com sucesso!");
		} else {
			System.out.println("N�o possivel cadastrar. Este usu�rio j� existe");
		}

	}

	public ArrayList<Pessoa> getDb() {
		return this.db;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public boolean getStatus() {
		return this.status;
	}

}
