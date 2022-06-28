import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { logInRoute } from './logInRoute';
import { resetPasswordRoute } from "./resetPasswordRoute";
import { signUpRoute } from './signUpRoute';
// import { testEmailRoute } from './testEmailRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';

export const routes = [
    forgotPasswordRoute,
    testRoute,
    // testEmailRoute,
    verifyEmailRoute,
    signUpRoute,
    resetPasswordRoute,
    logInRoute,
    updateUserInfoRoute
];
