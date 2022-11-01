export type UserInfo = {
    name: string
    age: number
    departament: string
    salary: number
}

export class User {
    name = ''
    age = 0
    departament = ''
    salary = 0

    create() {
        console.log({
            name: this.name,
            age: this.age,
            departament: this.departament,
            salary: this.salary
        })
    }
}

