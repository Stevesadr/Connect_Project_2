'use client'
import Link from "next/link"
import { useState , useContext } from "react"
import { BtnContext } from "./context/BtnContext"

export default function Login_banner() {


    

    const { bg1 , color1 , bg_2 , color2 , bg3 , color3 , Changecolordefault , Changecolorgreen , Changecolordefault2 , Changecolorgreen2 ,Changecolordefault3 , Changecolorgreen3 } = useContext(BtnContext)

    const [ tik , setTik ] = useState('tik.png')
    const [ tik2 , setTik2 ] = useState('tik.png')
    const [ tik3 , setTik3 ] = useState('tik.png')
    const [ check , setCheck ] = useState(1)
    const [bannerinfo , setBannerinfo] = useState([
        {
         src: 'Login1.png',
         btn: 'ادامه' , 
         btn2: 'رد کردن',
         title: 'به کمک بقیه بشتاب !' , 
         pr: 'اگر خدماتی ارائه میدهی پس منتظر چی هستی به کمک کانکت بیا و تبدیل به کانکت یار شو' , 
         id:1
        }
    ])


    const Clickhandlerjump = (e) => {
        e.preventDefault()
        setBannerinfo([
            {
             src: '', 
             btn: 'تایید' ,
             btn2: 'برگشت', 
             title: 'جز کدام دسته اید ؟' , 
             pr:'دسته بندی فعالیت خود را مشخص کنید و مدارک مورد نیاز هر بخش را تکمیل کنید' , 
             id:2
            }
        ])
        setCheck(3)
    }

    const Clickhandler = (e) => {
        e.preventDefault()
        if(check == 1){
            setBannerinfo([
                {
                 src: 'Login2.png' , 
                 btn: 'ادامه' , 
                 btn2: 'رد کردن',
                 title: 'کانکت یار “' , 
                 pr:'شما به عنوان شخصی که خدمات صنفی و کسب و کار خانگی دارد به بقیه کمک میکنید تا نیاز خود را رفع کنند .' , 
                 id:2
                }
            ])
            setCheck(2)
        }
        else if(check == 2){
            setBannerinfo([
                {
                 src: '', 
                 btn: 'تایید' ,
                 btn2: 'برگشت', 
                 title: 'جز کدام دسته اید ؟' , 
                 pr:'دسته بندی فعالیت خود را مشخص کنید و مدارک مورد نیاز هر بخش را تکمیل کنید' , 
                 id:2
                }
            ])
            setCheck(3)
        }
    }

    const Clickhandlerback = (e) => {
        e.preventDefault()
        setBannerinfo([
            {
                src: 'Login1.png',
                btn: 'ادامه' , 
                btn2: 'رد کردن',
                title: 'به کمک بقیه بشتاب !' , 
                pr: 'اگر خدماتی ارائه میدهی پس منتظر چی هستی به کمک کانکت بیا و تبدیل به کانکت یار شو' , 
                id:1
            }
        ])
        setCheck(1)
    }  
    
    //Set Page one (1)
    const [ checktheme1 , setChecktheme1 ] = useState(1)
    const Changetheme = () => {
        if(checktheme1 == 1){
            Changecolorgreen()
            setChecktheme1(2)
            setChecktheme2(null)
            setChecktheme3(null)
            setTik('tik-green.png')
        }
        else if(checktheme1 == 2){
            Changecolordefault()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik('tik.png')
        }
    }

    //Set Page tow (2)
    const [ checktheme2 , setChecktheme2 ] = useState(1)
    const Changetheme2 = () => {
        if(checktheme2 == 1){
            Changecolorgreen2()
            setChecktheme2(2)
            setChecktheme1(null)
            setChecktheme3(null)
            setTik2('tik-green.png')
        }
        else if (checktheme2 == 2) {
            Changecolordefault2()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik2('tik.png')
        }
    }

    //Set Page three (3)
    const [ checktheme3 , setChecktheme3 ] = useState(1)
    const Changetheme3 = () => {
        if(checktheme3 == 1){
            Changecolorgreen3()
            setChecktheme3(2)
            setChecktheme2(null)
            setChecktheme1(null)
            setTik3('tik-green.png')
        }
        else if (checktheme3 == 2) {
            Changecolordefault3()
            setChecktheme1(1)
            setChecktheme2(1)
            setChecktheme3(1)
            setTik3('tik.png')
        }
    }

    return(
        <>  
            {bannerinfo.map((item) => {
                return(
                    <div key={item.id} className="flex justify-center items-center flex-col w-[85%]">
                        <div className="items">
                            {check == 2 | check == 1 && <img src={item.src} alt="png"/> || ''}
                            {check == 3 && 
                            <div className="list flex w-full justify-center items-center gap-5 flex-col mt-10 mb-5">
                                <button onClick={Changetheme} style={{background:bg1 , borderBlockColor:color1}} className="btn-login">
                                    <img className="tik" src={tik} alt="png"/>
                                    کانکت یار هستم 
                                </button>
                                <button onClick={Changetheme2} style={{background:bg_2 , borderBlockColor:color2}} className="btn-login">
                                    <img className="tik" src={tik2} alt="png"/>
                                    واحد صنفی دارم
                                </button>
                                <button onClick={Changetheme3} style={{background:bg3 , borderBlockColor:color3}} className="btn-login">
                                    <img className="tik" src={tik3} alt="png"/>
                                    کسب و کار خانگی دارم
                                </button>
                            </div>
                            }
                        </div>

                        <div className="info mb-10 w-[80%] mt-10 flex flex-col justify-center items-center">
                            <div className="line bg-black h-[4px] rounded-full w-10 mb-5 mt-1"></div>
                            
                            <h1 className="text-[25px] mb-2 font-bold">{item.title}</h1>
                            <p className="paragraf text-center">{item.pr}</p>
                        
                            {check == 1 && <div className="show">
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#74D7A9]"></div>
                            </div>}
                            {check == 2 && <div className="show">
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#74D7A9]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                            </div>}
                            {check == 3 && <div className="show ">
                                <div className="dot w-1 h-1 rounded-full bg-[#74D7A9]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                                <div className="dot w-1 h-1 rounded-full bg-[#C7C7C7]"></div>
                            </div>}
                            
                            {check == 3 & checktheme1 == 2 && 
                                <Link href="/Login-connect-user"><button className="my-3 py-2 px-14 rounded-xl text-white bg-[#AFC0FF]">{item.btn}</button></Link> 
                            
                            ||check == 3 & checktheme2 == 2 && 
                                <Link href="/Login-senfi-user"><button className="my-3 py-2 px-14 rounded-xl text-white bg-[#AFC0FF]">{item.btn}</button></Link> 
                            
                            ||check == 3 & checktheme3 == 2 &&
                                <Link href="/Login-home-user"><button className="my-3 py-2 px-14 rounded-xl text-white bg-[#AFC0FF]">{item.btn}</button></Link>
                            
                            || check == 1|2 &&  
                                <button onClick={Clickhandler} className="my-3 py-2 px-14 rounded-xl text-white bg-[#AFC0FF]">{item.btn}</button>
                            }  
                            
                            
                            {check == 3 && <button onClick={Clickhandlerback} className="mb-2 py-2 px-10">{item.btn2}</button>  || check == 1|2 && <button onClick={Clickhandlerjump} className="mb-7 py-2 px-10">{item.btn2}</button> }
                        
                            <div className="login gap-2 container py-2 rounded-t-[20px] w-[80%] bg-[#AFC0FF]">
                                <p className="text-white">آیا حساب کاربری دارید؟</p>
                                <Link href="/Login"><button className="text-green-300">ورود</button></Link>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>
    )
}