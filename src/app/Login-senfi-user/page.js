'use client'
import Link from "next/link";
import { useState } from "react";

export default function Login_senfi_user() {


    // صفحه ثبت نام کاربران صنفی 

    //Pages
    const [ page , setPage ] = useState(true)

    //User info
    const [ name , setName ] = useState('')
    const [ phonenumber , setPhonenumber ] = useState('')
    const [ worktype , setworktype ] = useState('')
    const [ workaddress , setWorkaddress ] = useState('')
    const [ city , setCity ] = useState('')
    const [ storename , setStorename ] = useState('')
    const [ homeaddress , setHomeaddress ] = useState('') 
    const [ constantphone , setConstantphone ] = useState('')
    //


    //Check From 'Part 1'
    const [ alertv , setAlertv ] = useState('')
    const checkPhone = /^(09|\\+98|9)[0-9]{9}$/;
    const checkuserinformation = (e) => {
        e.preventDefault()

        if(!checkPhone.test(phonenumber)){
            setAlertv('لطفا یک شماره معتبر به زبان انگلیسی وارد کنید')
        }
        else if(!name) {
            alert('لطفا اطلاعات خود را کامل کنید')
        }
        else if(!worktype) {
            alert('لطفا اطلاعات خود را کامل کنید')
        }
        else if(!city) {
            alert('لطفا اطلاعات خود را کامل کنید')
        }
        else if(!storename) {
            alert('لطفا اطلاعات خود را کامل کنید')
        }
        else if(!checkbox) {
            alert('لطفا تیک پذیرفتن قوانین را فعال کنید')
        }
        else{
            setPage(false)
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


    //Show IMG /still has problem
    const [ img , setImg ] = useState('')
    const [ checkpictur , setCheckpicture ] = useState(false)
    const showpicture = (e) => {
        e.preventDefault()
        setCheckpicture(true)
    }


    //Recive the UserInformation

    const [ userinfo , setUserinfo ] = useState([])
    const sendinfo = (e) => {
        e.preventDefault()
        
        if(workaddress && homeaddress && constantphone){
            setUserinfo([{
                name: name,
                phonenumber:phonenumber,
                worktype:worktype,
                workaddress:workaddress,
                city:city,
                storename:storename,
                homeaddress:homeaddress,
                constantphone:constantphone,
            }])
        }
        else{
            alert('اطلاعات خود را کامل کنید.')
        }
    }




    return(
        <main dir="rtl" className="container flex-col mx-auto">
            {page &&

                <div className="container flex-col">

                    <div className="title container flex-col mt-10">
                        <h1 className="text-xl font-bold">به کانکت یار خوش امدی “</h1>
                        <span className="paragraf mt-3">لطفا جهت ثبت نام در کانکت یار مشخضات زیرا تکمیل کنید</span>
                    </div>

                    <form className="form-info pb-10 container flex-col w-[75%] mt-10 gap-1">

                        <label className="pointer-input">نام و نام خانوادگی:</label>
                        <input onChange={(e) => setName(e.target.value)} placeholder=". حمید احمدی" className="login-input" type="text" />

                        <label className="pointer-input">شماره همراه:</label>
                        <input onChange={(e) => setPhonenumber(e.target.value)} placeholder=". ۹۳۲۳۰۲۳۲۳۲" className="login-input" type="text" />
                        <h2 className="ml-auto text-red-600 mr-2 mt-[-2px]">{alertv}</h2>

                        <label className="pointer-input">نوع واحد صنفی:</label>
                        <div className="flex items-center mt-2">
                            <input onChange={(e) => setworktype(e.target.value)} className="login-icon-input" type="text" list="languages" placeholder=" نوع واحد صنفی خود را بنویسید . " />
                            <datalist id="languages">
                                <option value="تولیدی-خدماتی"></option>
                                <option value="توزیعی-خدماتی"></option>
                            </datalist>
                            <div className="contianer-img-offer h-[2rem] w-[10%]">
                                <img className="icon-input mt-3 relative left-5" src="arrow-left.png" alt="png" />
                            </div>
                        </div>

                        <label className="pointer-input">استان و شهر:</label>
                        <input onChange={(e) => setCity(e.target.value)} placeholder=". تهران-تهران" className="login-input" type="text" />

                        <label className="pointer-input">نام فروشگاه:</label>
                        <input onChange={(e) => setStorename(e.target.value)} placeholder=". نام فروشگاه" className="login-input" type="text" />

                        <h2 className="text-[17px] font-bold ml-auto mt-5">جواز کسب خود را بارگذاری کنید</h2>
                        <span className="container text-[15px] justify-start gap-1">* حد اکثر حجم عکس برای بارگذاری 1 مگابایت می باشد 
                            <img className="small-icon rounded-full" src="alert.png" alt="png" />
                        </span>

                        <div className="buttons container w-[85%] ml-auto">
                            <button onClick={(e) => e.preventDefault()} className="container rounded-[12px] h-[3rem] w-[20rem] text-xl text-white bg-[#74D7A9] mt-3">
                                <div className="container">
                                    <img className="w-6" src="upload.png" alt="png" />
                                    بارگذاری
                                </div>
                            </button>
                            <input type="file" onChange={(e) => console.log(e.target.value)} className="container relative left-[5.80rem] cursor-pointer h-[3rem] opacity-0 rounded-[12px] text-xl text-white bg-[#74D7A9]"/>
                            <button onClick={showpicture} className="container gap-1 text-xl paragraf mt-3">
                                <img className="w-6 mt-[-2px]" src="eye.png" alt="png" />
                                مشاهده
                            </button>
                            {checkpictur && 
                            <div className="showmodal fixed w-[100%] h-[100%]">
                            </div>
                            }
                        </div>

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

                        {btncolor &&
                        <button onClick={checkuserinformation} className="btn-f my-3 px-14 py-3 rounded-xl text-white bg-[#5d71b7]">تکمیل مدارک</button> 
                            ||
                        <button onClick={checkuserinformation} className="btn-f my-3 px-14 py-3 rounded-xl text-white bg-[#9bb0ff]">تکمیل مدارک</button> 
                        }
                        <Link href="/"><button>برگشت</button></Link>
                    </form>
                    
                </div>

                ||

                <div className="container flex-col">
                    <div className="title container flex-col mt-10">
                        <h1 className="text-xl font-bold">به کانکت یار خوش امدی “</h1>
                        <span className="paragraf mt-3">لطفا جهت ثبت نام در کانکت یار مشخضات زیرا تکمیل کنید</span>
                    </div>

                    <form className="form-info pb-10 container flex-col w-[75%] mt-10 gap-1">

                        <label className="pointer-input">نشانی واحد صنفی: </label>
                        <textarea onChange={(e) => setWorkaddress(e.target.value)} placeholder=". حمید احمدی" className="login-textarea" type="text" ></textarea>

                        <label className="pointer-input">تلفن ثابت:</label>
                        <input onChange={(e) => setConstantphone(e.target.value)} placeholder=". ۹۳۲۳۰۲۳۲۳۲" className="login-input" type="text"/>

                        <label className="pointer-input">نشانی منزل: </label>
                        <textarea onChange={(e) => setHomeaddress(e.target.value)} placeholder=". حمید احمدی" className="login-textarea" type="text" ></textarea>




                        <div className="line container w-[20rem] h-[1px] mt-5 mb-2"></div>

                        <Link href="/Message"><button className="btn-f my-3 px-14 py-3 rounded-xl text-white bg-[#9bb0ff]">ثبت نشانی</button></Link>
                        <button onClick={() => setPage(true)}>برگشت</button>
                    </form>
                </div>
            }

        </main>
    )
}