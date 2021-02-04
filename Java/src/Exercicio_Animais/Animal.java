package Exercicio_Animais;

public abstract class Animal {

	private float tamanho;
	private String cor;
	
	
	
	public void comer() {
		System.out.println("O  animal está comendo");
	}
	
	public float getTamanho() {
		return tamanho;
	}
	public void setTamanho(float tamanho) {
		this.tamanho = tamanho;
	}
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	
	
}
