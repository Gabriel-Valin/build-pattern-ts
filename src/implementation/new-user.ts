import { ConcreteUserBuilder } from "../builder/user-builder"

class EngineerUser {
    static buildUser() {
        return new ConcreteUserBuilder()
            .setName('Gabriel Valin')
            .setAge(23)
            .setDepartament('Engineering')
            .setSalary(99999999) //hahahaha :D
            .getUser() 
    }
}

class MarketingUser {
    static buildUser() {
        return new ConcreteUserBuilder()
            .setName('Thais Valin')
            .setAge(19)
            .setDepartament('Marketing')
            .setSalary(8888888) //hahahaha :D
            .getUser() 
    }
}

const newEngineer = EngineerUser.buildUser()
const newMarketing = MarketingUser.buildUser()

newMarketing.create()
newEngineer.create()