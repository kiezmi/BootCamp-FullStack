package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio4 {
    public static void main(String[] args) {
        //4º Actividad.
        //Realizar un programa que nos pida un unidad en kb y nos haga la conversión a MB

        Scanner scanner = new Scanner(System.in);
        System.out.println("Dame un numero en kb: ");
        int numero = scanner.nextInt();
        System.out.println(numero + " en megabites son: " + calcularMB(numero));
    }

        public static int calcularMB (int numeroIntroducido){
            int res;
            res = numeroIntroducido * 1024;
            return res;
        }



}
