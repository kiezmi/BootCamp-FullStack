package com.EjerciciosJava.ejercicios_1;

import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        //2º Actividad.
        //Escriba un método que imprima la representación de su parámetro entero en números romanos.
        // Por ejemplo, si el parámetro es 1998, la salida debe ser MCMXCVIII


        Scanner scanner = new Scanner(System.in);

        int anyo;
        do{
            System.out.println("Dime un año: ");
            anyo = scanner.nextInt();
        }while (anyo<=0 && anyo >5000);
            System.out.println(anyo + " en numeros romanos es: " + convertirRomanos(anyo));

    }

    public static String convertirRomanos(int numero){
        int i, millares, centenas,decenas,unidades;
        String romanos="";
        millares = numero/1000;
        centenas = numero/100%10;
        decenas = numero/10%10;
        unidades = numero%10;

        //millar
        for (i = 1; i <= millares; i++) {
            romanos  += "M";
        }

        //centenas
        if (centenas == 9) {
            romanos  += "CM";
        } else if (centenas >= 5) {
            romanos += "D";
            for (i = 6; i <= centenas; i++) {
                romanos += "C";
            }
        } else if (centenas == 4) {
            romanos += "CD";
        } else {
            for (i = 1; i <= centenas; i++) {
                romanos += "C";
            }
        }

        //decenas
        if (decenas == 9) {
            romanos = romanos + "XC";
        } else if (decenas >= 5) {
            romanos = romanos + "L";
            for (i = 6; i <= decenas; i++) {
                romanos = romanos + "X";
            }
        } else if (decenas == 4) {
            romanos = romanos + "XL";
        } else {
            for (i = 1; i <= decenas; i++) {
                romanos = romanos + "X";
            }
        }

        //unidades
        if (unidades == 9) {
            romanos += "IX";
        } else if (unidades >= 5) {
            romanos += "V";
            for (i = 6; i <= unidades; i++) {
                romanos = romanos + "I";
            }
        } else if (unidades == 4) {
            romanos = romanos + "IV";
        } else {
            for (i = 1; i <= unidades; i++) {
                romanos = romanos + "I";
            }
        }
        return romanos;
    }


}
