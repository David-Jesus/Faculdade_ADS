package POO2;

public enum Categoria {
	EMPREGADO("Empregado"),
	EMPREGADOR("Empregador"),
	DESEMPREGADO("Desempregado");
	
	private String descricao;

	private Categoria(String descricao) {
		this.descricao = descricao;
	}
	
	@Override
	public String toString() {
		return this.descricao;
	}
}
