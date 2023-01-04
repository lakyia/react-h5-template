import { Checkbox, Input, Button, NavBar } from "antd-mobile";
import { useState } from "react";
import { getCaptcha, getCaptchaMock } from "@/api/user.js";
import { useNavigate } from "react-router-dom";
import styles from "@/assets/css/login.less";
export default function LoginPage() {
  const getCaptchaFunc = () => {
    getCaptcha();
    getCaptchaMock();
  };
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        back="返回"
        style={{
          "--height": "64px",
        }}
        onBack={() => navigate(-1)}
      >
        标题
      </NavBar>
      <div className={styles.loginContainer}>
        <div className={styles.loginBg}></div>
        <div className={`${styles.loginBody} ${styles.login}`}>
          <div className={styles.loginSub}>
            <Button
              block
              style={{
                "--border-radius": "100px",
              }}
              size="large"
              onClick={getCaptchaFunc}
            >
              获取验证码
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
