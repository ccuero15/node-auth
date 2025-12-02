// src/config/validators.ts

export default class Validators {
    /**
     * Verifica si el valor dado es un email válido según la regex.
     * @returns regex para validar emails
     */
    static get email() {
      return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    }
}