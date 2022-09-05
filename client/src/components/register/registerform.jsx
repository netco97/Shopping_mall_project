import { useState } from "react";
import Axios from 'axios';
import styles from "./registerform.module.css";

export const Registerform = () =>{
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    console.log(usernameReg);
    console.log(passwordReg);

    const register = () =>{
        Axios.post('http://localhost:8000/register', {
        email: usernameReg, 
        password: passwordReg
      }).then((response)=>{
        console.log(response);
      });
    }
    

    return (
            <div className={styles.body}>
                <h3 className={styles.head}>회원가입</h3>
                <div>
                    <input
                        className={styles.text}
                        type="text"
                        onChange={(e)=>{
                            setUsernameReg(e.target.value);
                        }}
                        placeholder="이메일"
                        />
                </div>
                <div>
                    <input 
                        type='password'
                        className={styles.text}
                        onChange={(e)=>{
                            setPasswordReg(e.target.value);
                        }}
                        name="password" 
                        placeholder="비밀번호"
                        />
                </div>
                <div>
                    <input 
                        type='password'
                        className={styles.text}
                        name="check"
                        placeholder="비밀번호 확인"
                        />
                </div>
                <div>
                    <button className={styles.sign_up} onClick={register}>등록</button>
                </div>
            </div>
    )
}