interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name';


type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMetaFirst = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMetaSecond = Pick<User, '_id' | 'createdAt'>

let userOne: UserKeysNoMetaFirst = 'name';
