import { User } from ".."
import { UserBuilder } from "../protocols/user-builder-protocol"

export class ConcreteUserBuilder implements UserBuilder {
    user: User

    constructor() {
        this.user = new User()
    }

    setName(name: string): this {
        this.user.name =  name
        return this
    }

    setAge(age: number): this {
        this.user.age =  age
        return this
    }

    setDepartament(departament: string): this {
        this.user.departament =  departament
        return this
    }

    setSalary(salary: number): this {
        this.user.salary =  salary
        return this
    }

    getUser(): User {
        return this.user
    }
}