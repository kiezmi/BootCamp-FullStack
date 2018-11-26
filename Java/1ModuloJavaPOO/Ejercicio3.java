package com.EjerciciosJava.ejercicios_1;



public class Ejercicio3 {
    public static void main(String[] args) {
       // 3º Actividad.
       // Leer 10 datos numéricos y mostrarlos en orden inverso
        int[] numeros = {1,2,3,4,5,6,7,8,9,10};

        for(int i =numeros.length -1; i>=0;i--){
            System.out.println(numeros[i]);
        }

    }
}
