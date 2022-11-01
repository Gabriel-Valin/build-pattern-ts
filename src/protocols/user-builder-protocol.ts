import { User } from ".."

export interface UserBuilder {
    setName(name: string): this
    setAge(age: number): this
    setDepartament(departament: string): this
    setSalary(salary: number): this
    getUser(): User
}