package com.EjerciciosJava.ejercicios_2;

import java.util.Scanner;

public class Ejercicio1 {
    //Crea un BinaryArry , este BinaryArray es la representación privada de una matriz de variables booleanas.
    // Por ejemplo la rerpsentación del BinaryArrya "FTTF" sería una matriz de longitud cuatro que almacenaria
    // (false, true, true false) en los índices 0,1,2,3 de la matriz, respectivamente.

    //La clase BinaryArray tiene la sisguiente funcionalidad.
    //Un constructor de un único parámetro que contiene un objeto String.
    //Metodos accesorios get/set para acceder a una variable en un índice concreto o modificarla.


    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Introduzca su texto: ");
        String texto = scan.next().toUpperCase();
        //System.out.println(texto);

        BinaryArray boleanos = new BinaryArray(texto);

        for (int i=0;i<texto.length();i++) {
            System.out.print(boleanos.getMiArray()[i]+", ");
        }
    }

    static class BinaryArray {

        private boolean[] miArray = new boolean[4];

        public BinaryArray(String palabra) {

            char[] binario = palabra.toCharArray();

            for (int i = 0; i < binario.length; i++) {
                if (binario[i] == 'T') {

                    miArray[i] = true;
                   // System.out.println(binario[i]);
                    //System.out.println(miArray[i]);
                } else if (binario[i] == 'F') {
                    miArray[i] = false;
                    //System.out.println(binario[i]);
                    //System.out.println(miArray[i]);
                }

            }

        }

        public boolean[] getMiArray() {
            return miArray;
        }

        public void setMiArray(boolean[] miArray) {
            this.miArray = miArray;
        }

    }

}
