package POO2;

import java.util.Scanner;

public class AppMain {

	public static void main(String[] args) {

		Pessoa pessoa = new Pessoa();
		Scanner leia = new Scanner(System.in);
		Cadastro cad = new Cadastro();

		System.out.printf("\nOlá Cidadão! \nO que você deseja fazer? \n");
		String opcao = "0";
		boolean verificador = false;

		while (opcao == "0") {

			System.out.println("\nEscolha Uma das Opções: ");
			System.out.println("\t1 - Realizar cadastro;");
			System.out.println("\t2 - Consultar Dados do cadastro;");
			System.out.println("\t3 - Fechar o programa.");
			System.out.print("Digite sua escolha: ");
			opcao = leia.next();

			switch (opcao) {

			case "1":

				System.out.println("\nPor favor digite seu nome completo: ");
				leia.nextLine();
				cad.setNomeCompleto(leia.nextLine());

				do {
					System.out.println("\nPor favor digite sua idade: ");
					String idade = leia.nextLine();

					try {
						if (Integer.parseInt(idade) > 18) {
							cad.setIdade(Integer.parseInt(idade));
							verificador = true;
						} else{

							System.out.println("Desculpe o benefício é apenas para maiores de idade!");
						}
					} catch (NumberFormatException e) {
						System.out.println("Digite apenas números");
					}

				} while (verificador == false);
				System.out.println("\nPor favor escolha uma categoria: ");

				Categoria categoria = Categoria.EMPREGADO;
				System.out.println("1- " + categoria);
				categoria = Categoria.EMPREGADOR;
				System.out.println("2- " + categoria);
				categoria = Categoria.DESEMPREGADO;
				System.out.println("3- " + categoria);
				String escolha = leia.next();

				if (Integer.parseInt(escolha) == 1) {

					do {

						System.out.println("É aposentado?: ");
						System.out.println("1- Sim");
						System.out.println("2- Não");
						String ehAposentado = leia.next();

						if (Integer.parseInt(ehAposentado) == 1) {
							cad.setEhAposentado(true);
							cad.setCategoria(categoria.EMPREGADO);
							verificador = true;
						} else if (Integer.parseInt(ehAposentado) == 2) {
							cad.setEhAposentado(false);
							cad.setCategoria(categoria.EMPREGADO);
							cad.setQtdFuncionarios(0);
							cad.setMesesDesempregado(0);
							verificador = true;
						}

						else {
							System.out.println("\nDigite uma opção válida!");
						}
					} while (verificador == false);
				}

				if (Integer.parseInt(escolha) == 2) {
					verificador = false;
					do {
						System.out.println("Digite a quantidade de funcionários na sua empresa: ");
						String qtd = leia.next();

						try {
							if (Integer.parseInt(qtd) > 0) {
								cad.setQtdFuncionarios(Integer.parseInt(qtd));
								cad.setCategoria(categoria.EMPREGADOR);
								cad.setMesesDesempregado(0);
								cad.setEhAposentado(false);
								verificador = true;
							} else {
								System.out.println("Quantidade deve ser maior de 0!");
							}
						} catch (NumberFormatException e) {
							System.out.println("\nDigite apenas números!");
						}

					} while (verificador == false);
				}

				if (Integer.parseInt(escolha) == 3) {
					verificador = false;
					do {
						System.out.println("Digite quantos meses está desempregado: ");
						String qtd = leia.next();

						try {
							if (Integer.parseInt(qtd) > 0) {
								cad.setMesesDesempregado(Integer.parseInt(qtd));
								cad.setCategoria(categoria.DESEMPREGADO);
								cad.setQtdFuncionarios(0);
								verificador = true;
							} else {
								System.out.println("Quantidade deve ser maior de 0!");
							}
						} catch (NumberFormatException e) {
							System.out.println("\nDigite apenas números!");
						}

					} while (verificador == false);
				}

				verificador = false;

				do {
					System.out.println("Digite a uf do seu Estado: ");
					String uf = (leia.next().toUpperCase());

					if (uf.length() == 2) {

						for (EstadosEnum t : EstadosEnum.values()) {
							if (t.getValor().compareTo(uf) == 0) {
								cad.setUf(t);
								verificador = true;
							}
						}
						if (!verificador)
							System.out.println("\nEstado inválido! Digite novamente: \n");
						cad.setStatus(true);
						cad.addPessoas(pessoa = new Pessoa(cad.getNomeCompleto(), cad.getIdade(), cad.getCategoria(),
								cad.getUf(), cad.getQtdFuncionarios(), cad.getEhAposentado(),
								cad.getMesesDesempregado()));
					} else
						System.out.println("Quantidade de Carateres inválida!");
				} while (verificador == false);

				opcao = "0";
				break;
			default:
				System.out.println("Opção inválida! Informe outra opção:\n");
				opcao = "0";
				break;

			case "2":
				int selecao = 0;
				for (Pessoa x : cad.getDb()) {
					System.out.println("\n" + cad.getDb().get(selecao).toString());
					selecao++;

				}
				opcao = "0";
				break;

			case "3":

				System.out.println("\nPrograma finalizado!");
				break;
			}

		}
		leia.close();
	}

}
