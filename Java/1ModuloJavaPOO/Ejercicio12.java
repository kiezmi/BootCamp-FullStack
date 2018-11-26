package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio12 {
    public static void main(String[] args) {
        //12º Actividad.
        //Cree un programa que invierta el número que se pide el usuario por ejemplo
        //si el usuario introduce 4561 el programa debe devolver 1654

        Scanner scan= new Scanner(System.in);
        System.out.println("Digame un numero:");
        String numero = scan.next();

        char[] arrayChar = numero.toCharArray();

        //System.out.println(arrayChar.length);

        for(int i = arrayChar.length-1; i>= 0;i--){

            System.out.print(arrayChar[i]);

        }
    }
}
