import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Loginmodal';
import './Lom.scss';
function App() {
    const realId = "kiki@naver.com";
    const nav = useNavigate();
    const realPw = "12345678";
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    const handleinputid = (e) => {
        setId(e.target.value);
    }
    const handleinputpw = (e) => {
        setPw(e.target.value);
    }
    const handleinputpw = (e) => {
        setPw(e.target.value);
    }
    const [modalOpen, setModalOpen] = useState(false);
    const Login = () => {
        if (realId === id && realPw === pw) {
            nav('/loginmain');
        }
        else {
            alert('비밀번호를 다시 확인해주세요!');
        }
    }
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <React.Fragment>
            <button onClick={openModal}>로그인</button>
            <Modal open={modalOpen} close={closeModal}>
                <div className='l-header'>
                    <img src='icon/logo.png' width="150" height="30" />
                </div>
                <div className='l-title'>
                    <b>로그인</b>
                    <img className='img-t' src='icon/36.png' width="50" height="70"/>
                </div>
                <div className='login-field'>
                    <input id="login-basic" placeholder='ID 입력'></input>
                    <br />
                    <input id="password-basic" placeholder='PW 입력'></input>
                    <img src='icon/logon.png' />
                </div>
                <div className='l-title'>
                    <b>로그인</b>
                    <img className='img-t' src='icon/36.png' />
                </div>
                <div className='login-field'>
                    <TextField id="login-basic" label="ID 입력" variant="outlined" style={{ width: '250%' }} value={id} onChange={handleinputid} />
                    <br /><br />
                    <TextField type="password" id="password-basic" label="PW 입력" variant="outlined" style={{ width: '250%' }} value={pw} onChange={handleinputpw} />
                </div>
                <div className='let-go'>
                    <button onClick={()=>Login()}>로그인</button>
                </div>
                <div className='accounting'>
                    <span>회원가입</span>
                    <br />
                    <span>비밀번호를 잊어버리셨나요?</span>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default App;