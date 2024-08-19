'use client'
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    //Login Page


    //User info
    const [ phonenumber , setPhonenumber ] = useState('')


    //Check From 'Part 1'
    const [ alertv , setAlertv ] = useState('')
    const checkPhone = /^(09|\\+98|9)[0-9]{9}$/;
    const checkuserinformation = (e) => {
        e.preventDefault()

        if(!checkPhone.test(phonenumber)){
            setAlertv('لطفا یک شماره معتبر وارد کنید')
        }
    }

    //Check Box verify
    const [ btncolor , setBtncolor ] = useState(false)
    const [ checkbox , setCheckbox ] = useState(false)
    const verify = () => {
        if(!checkbox){
            setCheckbox(true)
            setBtncolor(true)
        }
        else {
            setCheckbox(false)
            setBtncolor(false)
        }
    }


    //Recive the UserInformation

    const [ userinfo , setUserinfo ] = useState([])
    const sendinfo = (e) => {
        e.preventDefault()
        
        if(workaddress && homeaddress && constantphone){
            setUserinfo([{
                phonenumber:phonenumber,
            }])
        }
        else{
            alert('اطلاعات خود را کامل کنید.')
        }
    }




    return(
        <main dir="rtl" className="container flex-col mx-auto">
            <div className="container flex-col">

                <div className="title container flex-col mt-10">
                    <h1 className="text-xl font-bold">به کانکت یار خوش امدی “</h1>
                    <span className="paragraf mt-3">لطفا جهت ثبت نام در کانکت یار مشخضات زیرا تکمیل کنید</span>
                </div>

                <form className="form-info pb-10 container flex-col w-[75%] mt-10 gap-1">
                    
                    <label className="pointer-input">شماره همراه:</label>
                    <input onChange={(e) => setPhonenumber(e.target.value)} placeholder=". ۹۳۲۳۰۲۳۲۳۲" className="login-input" type="text" />
                    <h2 className="ml-auto text-red-600 mr-2 mt-[-2px]">{alertv}</h2>

                

                    <div className="container mt-7">
                        <input 
                            type="checkbox" 
                            onClick={verify}
                            className="w-5 h-5 mx-1"
                        />
                        <h2 className=" text-[#5C5CFF] ml-1">شرایط و قوانین</h2> 
                        <h2>کانکت را می پذیرم</h2>
                    </div>

                    <div className="linee container w-[20rem] h-[1px] mt-5 mb-2"></div>

                    <Link href="/Message"><button className="btn-f my-3 px-14 py-3 rounded-xl text-white bg-[#9bb0ff]">وارد شدن </button></Link>
                    <Link href="/"><button>برگشت</button></Link>
                
                </form>
                
            </div>
        </main>
    )
}