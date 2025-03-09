package Desafio_1;
import java.lang.Math;


public class NumerosPerf {
    //1 ate sqrt(numero)
    public static boolean metodo(int numero){
        int count = 1;
        for(int divisor = 2; (divisor*divisor)<numero && count<=numero; divisor++){
            if((numero % divisor) == 0){
                count += divisor;
                count += (numero/divisor);
            }
        }
        
        
        
        if(count == numero){
            return true;
        }else{
            return false;
        }
        
        
        
        
        
    }
    // public static void main(String[] args) {
    //     System.out.print(metodo(29));
    // }
    }
