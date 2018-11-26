package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio10 {
    public static void main(String[] args) {
        //10º Actividad.
        //Cree un programa que dibuje en pantalla una pirámide a partir de una altura y un símbolo que se pedira al usuario.

        Scanner scan = new Scanner(System.in);

        System.out.println("Elija su simbolo");
        String simbolo = scan.nextLine();

        System.out.println("Elija su altura");
        int altura = scan.nextInt();


        for (int i = 0; i <= altura; i++) {

            for (int espacio = 1; espacio <= altura - i; espacio++) {
                System.out.print(" ");
            }
            for (int s = 1; s <= (i * 2) - 1; s++) {
                System.out.print(simbolo);
            }

            System.out.println();

        }
    }

}
