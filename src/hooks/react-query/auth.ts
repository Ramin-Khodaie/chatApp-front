
import { UseMutationOptions, useMutation } from "react-query";
import { logIn, logOut, signUp } from "services/auth";
import { ILoginParams, ILogoutArgs, ISignUpParams } from "types/api/auth";
import { IReactQueryHookArgs } from "types/react-query";

export const useSignUp = (
  options?: UseMutationOptions<any, any, ISignUpParams>
) => {
  return useMutation<any, any, ISignUpParams>(signUp, options);
};

export const useLogin = (
  options?: UseMutationOptions<any, any, ILoginParams>
) => {
  return useMutation<any, any, ILoginParams>(logIn, options);
};
