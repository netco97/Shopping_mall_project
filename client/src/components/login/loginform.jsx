import { useState } from "react";
import Axios from 'axios';
import styles from "./loginform.module.css";
import { Link } from "react-router-dom";

export const Loginform = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () =>{
        Axios.post('http://localhost:8000/login', {
        email: username,
        password: password
      }).then((response)=>{
        console.log(response); //console 확인용
        if(response.data.message !== "잘못된 아이디 또는 비밀번호 입니다. "){
            localStorage.setItem('email', response.data[0].email);
            window.location.replace('http://localhost:3000/')
        }
        else{
            alert(response.data.message);
        }
      });
    }
    
    return (
        <div>
            <a href="https://netco97.tistory.com">
                <img className={styles.blog} src="/images/blog.png" alt="blog" />
            </a>
            <div className={styles.form}>
                <h3>로그인</h3>
                <input className={styles.input} 
                    type="text"
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    placeholder="이메일"
                    />
                <input className={styles.input} 
                    type="password"
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    placeholder="비밀번호"
                    />
                <button onClick={login}>로그인</button>

                <Link to="/register">
                <p className={styles.message}>Not registered? </p>
                </Link>
            </div>
            
        </div>
    )
}