package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio14 {
    public static void main(String[] args) {
        //14º Actividad.
        //Escribe un programa que pida 20 números enteros. Estos números se deben introducir en un array de 4 filas por 5 columnas.
        // El programa mostrará las sumas parciales de filas y columnas igual que si de una hoja de cálculo se tratara.
        // La suma total debe aparecer en la esquina inferior derecha.

        Scanner scan = new Scanner(System.in);
        int[][] arrayNumeros;
        arrayNumeros = new int[4][5];
        int sumaparcial = 0;
        int sumatotal = 0;


        for (int fila = 0; fila < 4; fila++) {
            System.out.println(" ---------- ");
            for (int columna = 0; columna < 5; columna++) {
                System.out.println("introduzca un numero");
                arrayNumeros[fila][columna] = scan.nextInt();
                System.out.print(arrayNumeros[fila][columna] + " | ");
                sumatotal = sumatotal + arrayNumeros[fila][columna];


                if (fila == 0) {
                    sumaparcial = sumaparcial + arrayNumeros[0][columna];
                    System.out.println("Suma parcial  = " + sumaparcial);
                } else if (fila == 1) {
                    sumaparcial = sumaparcial + arrayNumeros[0][columna];
                    System.out.println("Suma parcial  = " + sumaparcial);
                } else if (fila == 2) {
                    sumaparcial = sumaparcial + arrayNumeros[0][columna];
                    System.out.println("Suma parcial  = " + sumaparcial);
                } else if (fila == 3) {
                    sumaparcial = sumaparcial + arrayNumeros[0][columna];
                    System.out.println("Suma parcial  = " + sumaparcial);
                }

            }
            System.out.println();
        }
        System.out.println("Suma total= " + sumatotal);
    }
}
