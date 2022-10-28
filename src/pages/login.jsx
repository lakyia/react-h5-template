import { Checkbox, Input, Button } from "antd-mobile";
import { useState } from "react";
import { getCaptcha, getCaptchaMock } from "@/api/user.js";

import styles from "@/assets/css/login.less";
export default function LoginPage() {
  const getCaptchaFunc = () => {
    getCaptcha();
    getCaptchaMock();
  };
  return (
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
  );
}
