import { IReactQueryHookArgs } from "types/react-query"

export interface ISignUpParams {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    avatar?: File | null
}

export enum UserAuthEnums { NEW_USER = 'New_User', DUPLICATE_USER = "Duplicate_User", PASSWORD_DOES_NOT_MATCH = 'Password_Does_Not_Matches' }

export interface ILoginParams {
    email: string,
    password: string
}

export interface ILoginArgs<T, U> extends IReactQueryHookArgs<T, U>, ILoginParams { }


export interface ILogoutArgs<T, U> extends IReactQueryHookArgs<T, U> { }