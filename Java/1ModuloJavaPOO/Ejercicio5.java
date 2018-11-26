package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio5 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Dime el radio ");
        float radio = scanner.nextFloat();

        System.out.println("Dime la altura ");
        float altura = scanner.nextFloat();

        System.out.println("El volumen del cono es : " + calcularVolumen(radio,altura));

    }

    public static double calcularVolumen(float radio, float altura){
        double volumen;
       // ((Math.PI*Math.pow(radio,2)*altura)/3);
        volumen = (0.33)*(Math.PI*(radio*radio)*altura);
        System.out.println(volumen);
        return volumen;
    }
}
