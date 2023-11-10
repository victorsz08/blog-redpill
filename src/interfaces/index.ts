


export interface IUser {
    id?: string
    name: string
    role?: string
    email?: string
}


export interface IPost {
    id?: string
    title: string
    image?: string
    category?: string
    content?: string
    user_post?: IUser
    createdAt?: string
}