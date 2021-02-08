package POO2;

import java.util.Objects;

public class Pessoa {

	private String nomeCompleto;
	private int idade;
	private Categoria categoria;
	private EstadosEnum uf;
	private int qtdFuncionarios;
	private boolean ehAposentado;
	private int mesesDesempregado;
	private Cadastro cad;

	public Pessoa(String nomeCompleto, int idade, Categoria categoria, EstadosEnum uf, int qtdFuncionarios,
			boolean ehAposentado, int mesesDesempregado) {
		super();
		this.nomeCompleto = nomeCompleto;
		this.idade = idade;
		this.categoria = categoria;
		this.uf = uf;
		this.qtdFuncionarios = qtdFuncionarios;
		this.ehAposentado = ehAposentado;
		this.mesesDesempregado = mesesDesempregado;
	}

	public Pessoa() {
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public EstadosEnum getUf() {
		return uf;
	}

	public void setUf(EstadosEnum uf) {
		this.uf = uf;
	}

	public void setQtdFuncionarios(int qtdFuncionarios) {
		this.qtdFuncionarios = qtdFuncionarios;
	}

	public int getQtdFuncionarios() {
		return qtdFuncionarios;
	}

	public boolean getEhAposentado() {
		return ehAposentado;
	}

	public void setEhAposentado(boolean ehAposentado) {
		this.ehAposentado = ehAposentado;
	}

	public void setMesesDesempregado(int mesesDesempregado) {
		this.mesesDesempregado = mesesDesempregado;
	}

	public int getMesesDesempregado() {
		return mesesDesempregado;
	}

	public String getPagamento() {
		Categoria categoria = getCategoria();
		double pagamento;

		if (getUf().getValor() == "SC") {

			if (categoria == Categoria.EMPREGADO) {
				pagamento = 1000 + ((1000 * 5) / 100);
				if (getEhAposentado() == true) {
					pagamento = pagamento + ((pagamento * 30) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento;
			}
			if (categoria == Categoria.EMPREGADOR) {

				double valor = 200 * getQtdFuncionarios();
				pagamento = valor + ((valor * 5) / 100);
				if (getQtdFuncionarios() <= 10) {
					pagamento = pagamento + ((pagamento * 14) / 100);
				}
				if (getQtdFuncionarios() <= 40) {
					pagamento = pagamento + ((pagamento * 11) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento + " reais";
			}
			if (categoria == Categoria.DESEMPREGADO) {
				pagamento = 2300 + ((2300 * 5) / 100);
				return "Seu pagamento será de R$ " + pagamento;
			}
		}

		else if (getUf().getValor() == "PA" || getUf().getValor() == "TO") {

			if (categoria == Categoria.EMPREGADO) {
				pagamento = 1000 + ((1000 * 9) / 100);
				if (getEhAposentado() == true) {
					pagamento = pagamento + ((pagamento * 30) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento;
			}
			if (categoria == Categoria.EMPREGADOR) {
				double valor = 200 * getQtdFuncionarios();
				pagamento = valor + ((valor * 9) / 100);
				if (getQtdFuncionarios() <= 10) {
					pagamento = pagamento + ((pagamento * 14) / 100);
				}
				if (getQtdFuncionarios() <= 40) {
					pagamento = pagamento + ((pagamento * 11) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento + " reais";
			}
			if (categoria == Categoria.DESEMPREGADO) {
				pagamento = 2300 + ((2300 * 9) / 100);
				return "Seu pagamento será de R$ " + pagamento;
			}
		}

		else if (getUf().getValor() == "PE") {

			if (categoria == Categoria.EMPREGADO) {
				pagamento = 1000 + ((1000 * 14) / 100);
				if (getEhAposentado() == true) {
					pagamento = pagamento + ((pagamento * 30) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento;
			}
			if (categoria == Categoria.EMPREGADOR) {
				double valor = 200 * getQtdFuncionarios();
				pagamento = valor + ((valor * 14) / 100);
				if (getQtdFuncionarios() <= 10) {
					pagamento = pagamento + ((pagamento * 14) / 100);
				}
				if (getQtdFuncionarios() <= 40) {
					pagamento = pagamento + ((pagamento * 11) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento + " reais";
			}
			if (categoria == Categoria.DESEMPREGADO) {
				pagamento = 2300 + ((2300 * 14) / 100);
				return "Seu pagamento será de R$ " + pagamento;
			}
		}

		else {

			if (categoria == Categoria.EMPREGADO) {
				pagamento = 1000;
				if (getEhAposentado() == true) {
					pagamento = pagamento + ((pagamento * 30) / 100);
				}
				return "Seu pagamento será de R$ " + pagamento;
			}
			if (categoria == Categoria.EMPREGADOR) {
				double valor = 200 * getQtdFuncionarios();
				if (getQtdFuncionarios() <= 10) {
					valor = valor + ((valor * 14) / 100);
				}
				if (getQtdFuncionarios() <= 40) {
					pagamento = valor + ((valor * 11) / 100);
				}
				return "Seu pagamento será de R$ " + valor + " reais";
			}
			if (categoria == Categoria.DESEMPREGADO) {
				return "Seu pagamento será de R$ " + 2300;
			}
		}
		return "inválido";
	}

	@Override
	public String toString() {
		return "\tNome: " + nomeCompleto + "\n" + "\tIdade: " + idade + " anos\n" + "\tCategoria:"
				+ categoria.toString() + "\n" + "\tEstado: " + uf.getDescricao() + "\n\t"
				+ (getEhAposentado() ? "É aposentado " : "Não é aposentado") + "\n"
				+ (getQtdFuncionarios() > 10
						? ("\t" + getQtdFuncionarios() + " Funcionários.\n\tSeu benefício será de 7 meses\n")
						: "")
				+ (getQtdFuncionarios() <= 10 && getQtdFuncionarios() != 0
						? ("\t" + getQtdFuncionarios() + " Funcionários.\n\tSeu benefício será de 10 meses\n")
						: "")
				+ (getQtdFuncionarios() == 0 ? ("\t" + "Seu benefício será de 12 meses\n") : "")
				+ (getMesesDesempregado() > 0 ? (getMesesDesempregado() + " meses desempregado.\n") : "")
				+ "\tBenefício: " + getPagamento();
	}

}
