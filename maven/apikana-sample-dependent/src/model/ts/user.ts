import {Company} from "apikana-sample-base/company";
import {Int, TimeOnly,DateOnly, DateTime, UTC} from "apikana/default-types";
export type UUID=string // @format uuid
interface Users {
    count: Int
    data: User[]
}

enum Gender{
    MALE,FEMALE
}

interface User {
    id: UUID
    firstName: string //the given name
    lastName: string //the family name
    age?: Int

    birthday: DateOnly
    birthtime: TimeOnly
    birth: DateTime
    birthinstant: UTC
    parent?: User
    company: Company
}

