export class PessoaModel {
    private name: string
    private email: string

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }

    public getName(): string {
        return this.name
    }
    public getEmail(): string {
        return this.email
    }
}