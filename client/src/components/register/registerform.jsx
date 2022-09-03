import { useState } from "react";
import Axios from 'axios';

export const Registerform = () =>{
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
                <h3>회원가입</h3>
                <input
                    type="text"
                    onChange={(e)=>{
                        setUsernameReg(e.target.value);
                    }}
                    placeholder="이메일"
                    />
                <input 
                    onChange={(e)=>{
                        setPasswordReg(e.target.value);
                    }}
                    name="password" 
                    placeholder="비밀번호"
                    />
                <button onClick={register}>등록</button>
            </div>
    )
}