'use client'
import Link from "next/link"
import { useState , useEffect } from "react"

export default function Message() {

    //صفحه ارسال پیام برای احراز هویت 


    // Counter number
    const [num , setNum] = useState(90)
    const [change , setChange] = useState(90)
    useEffect(() => {
        const timer = setTimeout(() => {
          if (change > 0) {
            setNum(num-1);
            setChange(change-1)
          } 
          else if (change < 0) {
            setNum(num-1);
            setChange(change-1)
          }
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [change]);
      

    return(
        <main dir="rtl" className="container flex-col mx-auto">
            <div className="title w-[80%] container flex-col mt-10">
                <h1 className="text-xl font-bold">کد تایید به شماره شما ارسال شد “</h1>
                <span className="paragraf mt-3 text-center">یک کد تایید چهار رقمی به شماره تلفن شما ارسال شده است ، لطفا کد تایید را وارد کنید</span>
            </div>


            <div className="flex justify-start items-start mt-7  text-[#5C5CFF] w-[85%]">
                <img className="small-icon" src="pen.png" alt="png"/>
                <h2>شماره تلفن :</h2>
                <h2>09123456789</h2>
            </div>

            <div className="code">
                <div className="c">
                    <input className="pass" type="number"/>
                </div>
                <div className="c">
                    <input className="pass" type="number"/>
                </div>
                <div className="c">
                    <input className="pass" type="number"/>
                </div>
                <div className="c">
                    <input className="pass" type="number"/>
                </div>
            </div>

            <div className="container flex-col mt-10  text-[#5C5CFF] w-[85%]">
                <h2 className="text-[15px]">{num} ثانیه تا ارسال مجدد </h2>
                <h2 className="text-[#363636] cursor-pointer text-[14px] mt-2">ارسال مجدد</h2>
            </div>

            <div className="line container w-[20rem] h-[1px] mt-20 mb-2"></div>

            <Link href="/Home"><button className="btn-f my-3 px-14 py-3 rounded-xl text-white bg-[#9bb0ff]">ثبت نشانی</button></Link>
            <Link href='/'><button>برگشت</button></Link>

        </main>
    )
}