package com.EjerciciosJava.ejercicios_2;



class Cuenta {

    private double saldoActual;

    public double getBalance() {
        return saldoActual;
    }

    public double deposit(double deposit) {
        return this.saldoActual = this.saldoActual + deposit;
    }

    public double withdrar(double deposit) {
        return this.saldoActual = this.saldoActual - deposit;
    }

    public Cuenta(double saldoActual) {
        this.saldoActual = saldoActual;
    }

    @Override
    public String toString() {
        return "Cuenta{" +
                "saldoActual=" + saldoActual +
                '}';
    }

}
public class ejercicio2 {
    //2º Actividad
    //Cree una clase Cuenta que almacena el saldu actual y proporciona los métodos getBalance para obtener el saldo y deposit para depositar fondos,
    // withdrar para reitrar fondos y toString para devolver por pantalla el saldo actual, además de al menos un constructor.
    // Escriba y pruebe la clase.



         public static void main(String[] args) {

            Cuenta cuenta = new Cuenta(10);
             System.out.println(cuenta);
             System.out.println(cuenta.getBalance());
             System.out.println(cuenta.deposit(5));
             System.out.println(cuenta.withdrar(3));
        }

    }
