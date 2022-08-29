import { useState } from "react";
import Axios from 'axios';
import styles from "./loginform.module.css";

export const Loginform = () =>{
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () =>{
        Axios.post('http://localhost:8000/register', {
        email: usernameReg, 
        password: passwordReg
      }).then((response)=>{
        console.log(response);
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
                    placeholder="이메일"
                    />
                <input className={styles.input} 
                    type="password"
                    placeholder="비밀번호"
                    />
                <button>로그인</button>
                <p className={styles.message}>Not registered?</p>
            </div>
            <div className={styles.test}>
                <h3>회원가입</h3>
                <input className={styles.input} 
                    type="text"
                    onChange={(e)=>{
                        setUsernameReg(e.target.value);
                    }}
                    placeholder="이메일"
                    />
                <input className={styles.input} 
                    onChange={(e)=>{
                        setPasswordReg(e.target.value);
                    }}
                    name="password" 
                    placeholder="비밀번호"
                    />
                <button onClick={register}>등록</button>
                <p className={styles.message}>Not registered?</p>
            </div>
        </div>
    )
}