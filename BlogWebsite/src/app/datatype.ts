export interface BlogPost{
    id?: number,
    title: string,
    content: string,
    publisher: string,
    userId: number,
    date: string
}

export interface User{
    id? : number,
    username: string,
    name: string,
    password: string
}

