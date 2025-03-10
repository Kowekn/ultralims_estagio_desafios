package Desafio_1;

public class Saque {
//     Notas: 100, 50, 20, 10, 5, 2 
//   Moedas: 1

    static int[] Notas = {100, 50, 20, 10, 5, 2};

    public static String metodo(int valor) {
        String msg = "Para esse valor você precisará de: ";
        int index = 0;
        int pivo = valor;
        int quantidade;
        while (index < 6) {
            quantidade = 0;
            while (pivo < Notas[index]) {
                index++;
            }
            while (pivo >= Notas[index]) {
                quantidade++;
                pivo -= Notas[index];
            }
            if (quantidade > 1) {
                msg += "\n" + quantidade + " notas de " + Notas[index];
            } else {
                msg += "\n" + quantidade + " nota de " + Notas[index];
            }
            index++;
        }
        if (pivo == 1) {
            msg += "\n e uma moeda";
        }

        return msg;

    }

    // public static void main(String[] args) {
    //     System.out.print(metodo(6514));
    // }
    // @SuppressWarnings("UnnecessaryBoxing")   //acabei fazendo desse outro jeito por engano :)
    // public static HashMap<Integer, Integer> metodo(int valor){
    //     Map<Integer, Integer> map = new HashMap<>();
    //     int index = 0;
    //     int pivo = valor;
    //     int quantidade;
    //     int debug;
    //     while(index<6){
    //         quantidade = 0;
    //         while(pivo < notas[index]){
    //             map.put(Integer.valueOf(notas[index]), Integer.valueOf(0)); // 0 notas de 100, 0 notas de 50 ...
    //             index++;
    //         }
    //         while(pivo >= notas[index]){
    //             quantidade++;
    //             pivo -= notas[index];
    //         }
    //         map.put(Integer.valueOf(notas[index]), Integer.valueOf(quantidade));
    //         index++;
    //     }
    //     if(pivo == 1){
    //         map.put(Integer.valueOf(1),Integer.valueOf(1)); //1 moeda de 1, maior seria 1 nota de 2
    //     }
    //     return (HashMap<Integer, Integer>) map; //key nota, value quantidade
    // }
    // public static void main(String args[]){
    //     System.out.print(metodo(6342));
    // }
}
