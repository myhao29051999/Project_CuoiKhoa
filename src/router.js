import Home from "./page/user/home";
import ChiTietPhim from "./module/ChiTietPhim";
import Login from "./page/user/Login";
import ChiTietLichChieu from "./page/user/ChiTietLichChieuPhim/index";
import HoSo from "./page/HoSo";
import MovieAdmin from "./page/admin/Movie";
import UserAmin from "./page/admin/User";
import Dashboard from "./page/admin/Dashboard";

export const routeHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/chitietphim/:maPhim",
    exact: false,
    component: ChiTietPhim,
  },
  {
    path: "/login",
    exact: false,
    component: Login,
  },
  {
    path: "/chi-tiet-rap-chieu-phim/:maLichChieu",
    exact: false,
    component: ChiTietLichChieu,
  },
  {
    path: "/ho-so",
    exact: false,
    component: HoSo,
  },
];
export const routerAdmin = [
  {
    path: "/admin/dashboard",
    exact: true,
    Component: Dashboard,
  },

  {
    path: "/admin/movie",
    exact: false,
    Component: MovieAdmin,
  },
  {
    path: "/admin/user",
    exact: false,
    Component: UserAmin,
  },
];
