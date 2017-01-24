import {Company} from "Company";

interface Users {
    count: number
    data: User[]
}

interface User {
    id: number
    firstName: string //the given name
    lastName: string //the family name
    age?: number
    parent?: User
    company: Company
}

