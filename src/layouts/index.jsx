import { Outlet } from "umi";
import { useNavigate, matchRoutes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "@/routes";
import "lib-flexible";
import { TabBar, SafeArea } from "antd-mobile";
import { AppOutline, HeartOutline, UserOutline } from "antd-mobile-icons";
import "normalize.css/normalize.css"; //全局引入
import styles from "./index.less";
export default function Layout() {
  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  const [isInit, setIsInit] = useState(false);
  const navigate = useNavigate();
  const { pathname } = location;
  useEffect(() => {
    console.log(router, location.pathname);
    const routes = matchRoutes(router.routes, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr = [];
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      });
    }
    setDefaultSelectedKeys(pathArr);
    setDefaultOpenKeys(pathArr);
    setIsInit(true);
  }, [location.pathname]);
  if (!isInit) {
    return null;
  }

  const setRouteActive = (value) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline fontSize="25" />,
    },
    {
      key: "/about",
      title: "关于",
      icon: <HeartOutline fontSize="25" />,
    },

    {
      key: "/my",
      title: "我的",
      icon: <UserOutline fontSize="25" />,
    },
  ];
  return (
    <>
      <div className={styles.app}>
        <SafeArea position="top" />
        <Outlet />
      </div>
      {["/home", "/about", "/my"].includes(pathname) && (
        <div className={styles.bottom}>
          <TabBar
            defaultActiveKey="/home"
            className={styles.tabbar}
            activeKey={pathname}
            onChange={(value) => setRouteActive(value)}
          >
            {tabs.map((item) => (
              <TabBar.Item
                className={styles.tabbarItem}
                key={item.key}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </TabBar>
          <SafeArea position="bottom" />
        </div>
      )}
    </>
  );
}
