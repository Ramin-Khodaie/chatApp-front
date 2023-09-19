import { UseMutationOptions, useMutation, useQuery } from "react-query";
import { logIn, signUp } from "services/auth";
import { ILoginArgs, ILoginParams, ISignUpParams } from "types/api/auth";

export const useSignUp = (options?: UseMutationOptions<any, any, ISignUpParams>) => {
    return useMutation<any, any, ISignUpParams>(signUp, options)
}


export const useLogin = (options?: UseMutationOptions<any, any, ILoginParams>) => {
    return useMutation<any, any, ILoginParams>(logIn, options)
}