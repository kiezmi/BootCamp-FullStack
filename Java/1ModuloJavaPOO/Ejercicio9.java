package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio9 {
    public static void main(String[] args) {
        //9º Actividad.
        //Cree un programa que calcule la potencia de un número a partir de su base y su exponente.

        Scanner scan = new Scanner(System.in);

        System.out.println("Elija su base");
        int base = scan.nextInt();

        System.out.println("Elija su exponente");
        int exponente = scan.nextInt();

        System.out.println("Su potencia es: " + Math.pow(base, exponente));
    }
}
