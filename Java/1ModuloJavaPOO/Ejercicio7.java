package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio7 {



    public static void main(String[] args) {
        //7º Actividad.
        //Escriba un programa que calcule la media de N numéro enteros introducidos.

        int numeroIntroducido=0;
        int numeros=0;


        Scanner scan= new Scanner(System.in);
        System.out.println("De cuantos numeros quieres calcular la media? ");
        numeros = scan.nextInt();

        int[] arrnumeros= new int[numeros];

        for (int i=0; i<numeros;i++){
            System.out.println("Dame un numero: ");
            numeroIntroducido = scan.nextInt();
            arrnumeros[i]=numeroIntroducido;
        }

        System.out.println("La media de los numeros introcucidos es: "+ media(arrnumeros));
    }

    public static double media(int[] arrnumeros) {

        double rest = 0;
        double sumado=0;

        for(int i=0;i<arrnumeros.length;i++){
            sumado=sumado + arrnumeros[i];
        }

        rest = sumado / arrnumeros.length;
        return rest;
    }


}
