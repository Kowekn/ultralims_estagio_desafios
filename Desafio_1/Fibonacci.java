package Desafio_1;

import java.util.Scanner;

public class Fibonacci {

    private int atual;
    private int nxt;
    private int pivo;
    private int[] retorne;

    public void Fib(int count) {
        atual = 0;
        nxt = 1;
        pivo = 0;
        retorne = new int[count + 1]; //inicilizando agora permite tamanho dinamico

        for (int index = 0; index <= count; index++) {
            retorne[index] = atual;
            pivo = atual;
            atual = nxt;
            nxt += pivo;
        }
        System.out.print("[");      //tem que formatar na mao
        System.out.print(retorne[0]); //caso queira ver 0 numeros fibonacci por algum motivo e n quebrar a formatacao
        for (int index = 1; index <= count; index++) {
            System.out.print(", ");
            System.out.print(retorne[index]);
        }
        System.out.print("]");

    }

    // public static void main(String args[]){
    //     Fibonacci obj = new Fibonacci(); //acho que nesse caso nao precisava encapsular, mas se vou usar java vou do jeito java
    //     int input = 0;
    //     System.out.print("\nDigite quantos números de Fibonacci gostaria de ver:  ");
    //     Scanner scanIn = new Scanner(System.in);  //scanner me parece mais simples 
    //     input = scanIn.nextInt();    
    //     scanIn.close();  
    //     obj.Fib(input); //chamando a funcao com o valor do cliente
}
