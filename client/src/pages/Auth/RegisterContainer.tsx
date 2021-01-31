// import React from "react";
// import get from 'lodash/get'
//
// import { RegisterForm } from "./components/Register/RegisterForm";
// import { useLazyQuery, useMutation, useQuery } from "@apollo/react-hooks";
// import { GraphqlApi } from "../../graphql";
//
// export function RegisterContainer({ history }) {
//
//
//     const { data } = useQuery(GraphqlApi.Queries.GetAccounts);
//     const [getParkByAccount, { data: parksByAccountData }] = useLazyQuery(GraphqlApi.Queries.GetParkByAccount);
//     const [doRegister] = useMutation(GraphqlApi.Mutations.Register);
//
//     const accounts = get(data, 'listAccounts', []);
//     const parks = get(parksByAccountData, 'parksByAccount', []);
//
//
//     const onAccountChange = ({ accountId }) => getParkByAccount({ variables: { accountId } })
//     const onRegister = async ({ name, username, email, password, confirmPassword, account, parks }) => {
//         console.log({ name, username, email, password, confirmPassword, account, parks })
//         try {
//             const res = await doRegister({
//                 variables: {
//                     name,
//                     username,
//                     email,
//                     password,
//                     confirmPassword,
//                     account,
//                     parks
//                 }
//             });
//             console.log(res)
//         } catch (e) {
//             console.log(e)
//         }
//     };
//
//     const navigateToLogin = () => history.push('/login');
//
//     return (
//       <RegisterForm
//         onRegister={onRegister}
//         accounts={accounts}
//         parks={parks}
//         onAccountChange={onAccountChange}
//         navigateToLogin={navigateToLogin}
//       />
//     )
// }

export const noop = {}
