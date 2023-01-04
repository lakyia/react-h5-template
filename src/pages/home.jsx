import { PullToRefresh, Button, Swiper, Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "@/assets/css/home.less";
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.swiperItem}
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.indexContainer}>
      <div className={styles.indexHeader}>首页Header</div>
      <div className={styles.indexBody}>
        <PullToRefresh
          onRefresh={() => {
            console.log("PullToRefresh");
          }}
        >
          <div className={styles.indexTop}>
            <div className={styles.desc}>
              {"一个基于umi4 antd mobile5 的react移动端脚手架;"}
            </div>
            <div className={styles.desc}>{"含dva,mock,多环境配置等;"}</div>
            <Button
              block
              className={styles.btn}
              style={{
                "--border-radius": "100px",
              }}
              size="large"
              onClick={() => {
                navigate("/login");
              }}
            >
              登录
            </Button>
          </div>
          <Swiper
            className={styles.swiper}
            style={{
              "--track-padding": " 0 0 16px",
            }}
            indicator={(total, current) => (
              <div className={styles.customIndicator}>
                {Array(total)
                  .fill(1)
                  .map((el, i) => (
                    <div
                      key={i}
                      className={`${styles.indicator}  ${
                        current == i ? styles.activeIndicator : ``
                      }`}
                    />
                  ))}
              </div>
            )}
            loop
          >
            {items}
          </Swiper>
        </PullToRefresh>
      </div>
    </div>
  );
};

export default Home;
