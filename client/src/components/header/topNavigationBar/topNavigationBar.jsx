import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";

export const TopNavigationBar = ({cart}) => {
  const [login, setLogin] = useState("로그인");
  const [logout, setLogout] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('http://localhost:3000/')
  }

  const handleLogin = () => {
    if (localStorage.getItem('email') === null) {
      setLogin("로그인");
    }
    else{
      setLogin(localStorage.getItem('email')+"님");
      setLogout("로그아웃");
    }
  }

  useEffect(() => {
    handleLogin();
  }, []);



  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/logo.png" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img src="/images/icon-search.svg" alt="search" />
        </div>
      </div>

      <div className={styles.menu}>
        <Link to="/board">
        <div className={styles.board}>
          <img src="/images/board.png" alt="board"></img>
          <span>게시판</span>
        </div>
        </Link>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
            {cart.length>=1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{cart.length}</p>
              </div>
            ) : ""}
          </div>
        </Link>
        <Link to="/login">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>{login}</span>
          </div>
        </Link>
          <div className={styles.logout}>
            <span onClick={handleLogout}>{logout}</span>
          </div>
      </div>
    </header>
  );
};
