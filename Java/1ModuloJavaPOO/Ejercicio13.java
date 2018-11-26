package com.EjerciciosJava.ejercicios_1;


public class Ejercicio13 {
    public static void main(String[] args) {
        //13º Actividad.
        //Escribe un programa que muestre tres apuestas de la quiniela en tres columnas
        // para los 14 partidos y el pleno al quince (15 filas)

       // String equipos[] = {"Valencia", "Barcelona", "Madrid", "Atletico", "Sevilla", "Betis", "Atheli", "Real Sociedad"};


        for (int filas = 1; filas < 15; filas++) {
            System.out.print("Partido " + filas + " |");

            for (int columnas = 0; columnas < 3; columnas++) {
                for (int i = 0; i < 1; i++) {
                    double dato = Math.random() * 3 + 1;

                    switch ((int) dato) {
                        case 1:
                            System.out.print(" 1 | ");
                            break;
                        case 2:
                            System.out.print(" X | ");

                            break;
                        case 3:
                            System.out.print(" 2 | ");

                            break;
                    }
                }

            }
            System.out.println();

        }

        double pleno = Math.random() * 3 + 1;
        String apuesta15 = "";
        switch ((int) pleno) {
            case 1:
                apuesta15 = " 1";
                break;
            case 2:
                apuesta15 = " X";

                break;
            case 3:
                apuesta15 = " 2";

                break;
        }

        System.out.println("Pleno al 15: " + apuesta15);

    }
}


