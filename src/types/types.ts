export type TUser = {
    imageUri: string
    name: string
}

export type TPost = {
    user: TUser
    imageUri: string
    likesCount: number,
    caption: string,
    postedAt: string
}