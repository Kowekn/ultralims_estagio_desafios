package Desafio_1;

public class BuscaBinaria {
    //binarySearch() hehe
    public static int metodo(int[] array, int alvo){
        int start = 0;
        int end = (array.length) -1;
        int middle;
        int target;
        do { 
            middle = end - start;
            target = array[middle];
            if(target == alvo){
                return middle;
            }
            else if(target < alvo){
                start = middle+1;
            }else if(target > alvo){
                end = middle-1;
            }
        } while (start< end);
        return -1;


    }
    
    // public static void main(String args[]){
    //     int[] array = {5, 12, 18, 23, 45, 70, 89};
    //     int alvo = 27;
    //     System.out.print(metodo(array,alvo));
    
    //     }


}