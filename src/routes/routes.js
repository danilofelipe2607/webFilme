import React from "react";

const Dashboard = React.lazy(() => import("../views/Dashboard/index"));
// const Login = React.lazy(() => import('../views/Login'));
// const Servicos = React.lazy(() => import('../views/Servicos'));
// const Register = React.lazy(() => import('../views/Register'));
export const Routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    layout: "/dashboard",
    component: Dashboard
  }
];

// export const Routes = [
//   {
//     path: '/',
//     name: 'Home',
//     exact: true,
//     layout: '/painel',
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Dashboard,
//     layout: '/painel',
//   },
//   {
//     path: '/cadastros',
//     name: 'Cadastros',
//     exact: true,
//     layout: '/painel',
//   },
//   {
//     path: '/cadastros/servicos',
//     name: 'Serviços',
//     component: Servicos,
//     layout: '/painel',
//   },
//   { path: '/login', name: 'Login', component: Login, layout: '/auth' },
//   { path: '/register', name: 'Login', component: Register, layout: '/auth' },
// ];

// export const MenuRoutes = {
//   items: [
//     {
//       name: 'Dashboard',
//       url: '/dashboard',
//       icon: 'icon-speedometer',
//       badge: {
//         variant: 'info',
//       },
//     },
//     {
//       name: 'Cadastros',
//       url: '/cadastros',
//       icon: 'icon-puzzle',
//       children: [
//         {
//           name: 'Serviços',
//           url: '/cadastros/servicos',
//           icon: 'icon-puzzle',
//         },
//       ],
//     },
//   ],
// };
