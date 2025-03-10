package Desafio_1;

public class SubstrPalin {

    public static String metodo(String string) {
        int len = string.length();
        String substring1;
        String substring2;
        while (len > 1) {

            for (int index = 0; index <= (string.length() - len); index++) { //itera sobre possiveis posicoes
                substring1 = string.substring(index, index + len);
                substring2 = ""; //reseta substring2

                for (int revert = index + len - 1; revert >= index; revert--) { //cria substring1 invertida e armazena na substring2
                    substring2 += string.charAt(revert);
                }
                if (substring1.equals(substring2)) {
                    return substring1;
                }
                len--;

            }

        }

        return null;
    }

    // public static void main(String[] args) {
    //     System.out.print(metodo("dadaad"));
    // }
}
