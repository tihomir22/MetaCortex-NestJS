export class ValidacionesEstaticas {
    public static esValidacionDePrecio(query: any): boolean {
        if (query.base != undefined && query.counter != undefined) { return true }
        return false;
    }
}