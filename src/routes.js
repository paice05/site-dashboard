/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile";
import TableList from "./views/TableList/TableList";
import Typography from "./views/Typography/Typography";
import Icons from "./views/Icons/Icons";
import NotificationsPage from "./views/Notifications/Notifications";
import Login from "./views/Login";

const dashboardRoutes = [
  {
    path: "/",
    name: "Login",
    icon: Dashboard,
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  }
];

export default dashboardRoutes;
