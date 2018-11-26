package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio8 {

    public static void main(String[] args) {
        //8º Actividad.
        //Cree un programa que a partir de un entero calcule su serie Fibonacci

        Scanner scan = new Scanner(System.in);
        System.out.println("Introduzca numero para hacer su Fibonacci: ");

        int numero = scan.nextInt();
        int[] arrnumeros = new int[numero];
        int[] result = Fibonacci(numero, arrnumeros);

        for (int i = 0; i < result.length; i++) {
            System.out.println("Posicion :" + i + " Valor->:" + result[i]);
        }
    }

    public static int[] Fibonacci(int numero, int[] arrnumeros) {
        arrnumeros[0] = 0;
        arrnumeros[1] = 1;

        if (numero < 2) {
            return arrnumeros;
        } else {
            for (int i = 2; i < arrnumeros.length; i++) {
                arrnumeros[i] = arrnumeros[i - 1] + arrnumeros[i - 2];
            }
            return arrnumeros;
        }
    }

}
