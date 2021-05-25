export type TUser = {
    id: string,
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

export type TStory = {
    user: TUser
}