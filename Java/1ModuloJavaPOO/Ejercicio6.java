package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio6 {
    public static void main(String[] args) {
        //6º Actividad.
        //Escriba un programa que calcule el tiempo de caída de un objeto determinado desde una altura dada,
        // para ello se pide la altura en metros.

        Scanner scanner = new Scanner(System.in);

        System.out.println("Dime la altura desde donde quieres tirarlo en metros: ");
        double altura = scanner.nextDouble();

        System.out.println("El tiempo que tarda es  : " + tiempocaida(altura)+ " minutos");
    }

    public static double tiempocaida(double altura){
        double velocidad;
        velocidad= Math.sqrt(altura)*4.43;
        velocidad= velocidad/60;
        return velocidad;
    }
}
