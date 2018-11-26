package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio1 {
    public static void main(String[] args) {
        //1º Actividad.
        //Escriba un métodos estático que tome un año como parámetro y devuelva false si el año es bisiesto y true en caso contrario.

        Scanner scanner = new Scanner(System.in);
        System.out.println("Dime un año: ");
        int anyo = scanner.nextInt();
        boolean calculo = bisiesto(anyo);
        System.out.println(calculo);
    }

        public static boolean bisiesto(int anyo){
        if ((anyo%4==0) && (anyo%100!=0)&& (anyo%400==0)){
            return false;
        }
            return true;
        }

    }

