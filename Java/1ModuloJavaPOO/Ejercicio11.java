package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio11 {
    public static void main(String[] args) {
            //11º Actividad.
        //Cree un programa que a partir de n números introducidos
        // nos índique el número de números positivos introducidos y el número de números negativos introducidos.

        Scanner scan= new Scanner(System.in);

        while(true){
            System.out.println("Digame un numero:");
            int numero = scan.nextInt();
            int numeroNegativo=0;
            int numeroPositivo=0;

            if(numero<=0){
                numeroNegativo=numeroNegativo+1;
            }else{
                numeroPositivo=numeroPositivo+1;
            }
            System.out.println("Ha introducido:"+numeroPositivo+" Numeros positivos y "+numeroNegativo+" numeros negativos");
        }

    }



}
