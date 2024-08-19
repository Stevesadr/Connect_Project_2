'use client'

import { useState } from "react"

export default function Account() {

    //Account page


    //Show Pages "piblic"
    const [ shwoinfouser , setShowinfouser ] = useState(false)
    const [ shwoinfomarket , setShowinfomarket ] = useState(false)
    const [ shwosuppurt , setShowsuppurt ] = useState(false)
    const [ shwosetting , setShowsetting ] = useState(false)
    const [ show_submit_ticket , setShow_submit_ticket ] = useState(false)

    //Show Modals "setting"
    const [ showmodal , setShowmodal ] = useState(false)
    const [ showmodal2 , setShowmodal2 ] = useState(false)
    const [ showmodal3 , setShowmodal3 ] = useState(false)
    const [ showmodal4 , setShowmodal4 ] = useState(false)

    return(
        <>

            <div className="items mt-4 flex flex-col justify-start w-[85%]">

                <div onClick={() => setShowinfouser(true)} className="info-me cursor-pointer flex justify-start items-center gap-2 my-4 text-[20px]">
                    <img className="w-8" src="account.png" alt="png" />
                    <h1>اطلاعات مالک</h1>
                </div>

                <div onClick={() => setShowinfomarket(true)} className="info-me cursor-pointer flex justify-start items-center gap-2 my-4 text-[20px]">
                    <img className="w-8" src="Account-page/store.png" alt="png" />
                    <h1>اطلاعات فروشگاه</h1>
                </div>

                <div className="info-me cursor-pointer flex justify-start items-center gap-2 my-4 text-[20px]">
                    <img className="w-8" src="Account-page/status.png" alt="png" />
                    <h1>گزارش گیری</h1>
                </div>

                <div onClick={() => setShowsuppurt(true)} className="info-me cursor-pointer mt-7 flex justify-start items-center gap-2 my-4 text-[20px]">
                    <img className="w-8" src="Account-page/suppurt.png" alt="png" />
                    <h1>پشتیبانی</h1>
                </div>

                <div onClick={() => setShowsetting(true)} className="info-me cursor-pointer flex justify-start items-center gap-2 my-4 text-[20px]">
                    <img className="w-8" src="Account-page/setting.png" alt="png" />
                    <h1>تنظیمات</h1>
                </div>


            </div>

            {shwoinfouser &&
                <div className="modal-account overflow-y-scroll mb-20">
                    <div className="container-modal-account py-0 rounded-t-xl">
                        
                        <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                <div className="right">
                                    <h1 className="title ">اطلاعات حساب کاربری</h1>
                                </div>

                                <div className="left mr-auto">
                                    <img onClick={() => setShowinfouser(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div className="container flex-col w-[90%] mx-auto pt-1">

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">نام و نام خانوادگی</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">احمد حمیدی</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">شماره تلفن</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">09056243251</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <button className="btn-account w-[6rem] h-[2rem] rounded-[4px] text-white bg-[#51B486]">تایید شده</button>
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">پست الکترونیک</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">Example@gmail.com</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">شماره شبا حساب</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">IR۹۰۰۰۰۲۳۲٤۲٤۲۹٤۸۱۲۷۸٤۱</p>
                                </div>
                                <div className="right w-[30%] container">
                                <button className="btn-account w-[6rem] h-[2rem] rounded-[4px] text-white bg-[#51B486]">تایید شده</button>
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">استان</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">تهران</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">شهرستان</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">تهران</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 


                        </div>

                        <div className="benner mx-auto title container w-[90%] h-[6rem] bg-[#E3E3E3] mt-6 rounded-[12px]">
                            بنر تبلیغاتی
                        </div>
        
                    </div>
                </div>
            }

            {shwoinfomarket &&
                <div className="modal-account overflow-y-scroll mb-20">
                    <div className="container-modal-account py-0 rounded-t-xl">
                        
                        <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                <div className="right">
                                    <h1 className="title ">اطلاعات فروشگاه</h1>
                                </div>

                                <div className="left cursor-pointer mr-auto">
                                    <img onClick={() => setShowinfomarket(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div className="container flex-col w-[90%] mx-auto pt-1">

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">نوع واحد صنفی</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">احمد حمیدی</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">شماره تلفن</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">09056243251</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <button className="btn-account w-[6rem] h-[2rem] rounded-[4px] text-white bg-[#51B486]">تایید شده</button>
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">تلفن ثابت</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">0216364822</p>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <h1 className="text-right text-[14px] text-[#414141]">نام فروشگاه</h1>
                                    <p className="text-[19px] text-right mt-1 text-[#414141]">نام فروشگاه</p>
                                </div>
                                <div className="right w-[30%] container">
                                <button className="btn-account w-[6rem] h-[2rem] rounded-[4px] text-white bg-[#51B486]">تایید شده</button>
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div>  


                        </div>

                        <div className="adersses container flex-col">
                            <div className="address mt-5 mx-auto w-[90%]">

                                <div className="titr">
                                    <p className="text-right">آدرس واحد صنفی</p>
                                </div>

                                <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                    <div className="left w-[10%] border-l-[#78787843] border-l-[1px] px-2 h-[3rem] container">  
                                        <img className="w-6" src="Account-page/cercle.png" alt="png" />
                                    </div>

                                    <div className="title w-[70%] mr-4">
                                        <p className="text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[20%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div> 

                            </div>

                            <div className="address mt-5 mx-auto w-[90%]">

                                <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                    <div className="left w-[10%] border-l-[#78787843] border-l-[1px] px-2 h-[3rem] container">  
                                        <img className="w-6" src="Account-page/cercle.png" alt="png" />
                                    </div>

                                    <div className="title w-[70%] mr-4">
                                        <p className="text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[20%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div> 

                            </div>
                        </div>

                        <div className="btn h-[14rem] w-[90%] mx-auto">

                            <div className="titr title mt-5">
                                جواز کسب
                            </div>

                            <div className="buttons container">

                                <button className="container rounded-[12px] h-[3rem] w-[40rem] text-xl text-white bg-[#74D7A9] mt-3">
                                    <div className="container gap-1">
                                        <img className="w-6 mb-1" src="Account-page/upload.png" alt="png" />
                                        دانلود
                                    </div>
                                </button>

                                <button className="container gap-1 text-xl paragraf mt-3">
                                    <img className="w-6 mt-[-2px]" src="eye.png" alt="png" />
                                    مشاهده
                                </button>
                                <img className="w-6 cursor-pointer mt-1" src="alert.png" alt="png" />

                            </div>
                        </div>
        
                    </div>
                </div>
            }

            {shwosuppurt &&
                <div className="modal-account overflow-y-scroll mb-20">
                    <div className="container-modal-account py-0 rounded-t-xl">
                        
                        <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                <div className="right">
                                    <h1 className="title ">پشتیبانی</h1>
                                </div>

                                <div className="left cursor-pointer mr-auto">
                                    <img onClick={() => setShowsuppurt(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div className="container flex-col w-[90%] mx-auto pt-1">

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <div className="flex justify-start gap-2 mb-1">
                                        <img className="w-8" src="Account-page/eeita.png" alt="png" />
                                        <p className="text-[19px] text-right mt-1 text-[#414141]" >اتصال به ایتا</p>
                                    </div>
                                    <h1 className="text-right text-[14px] text-[#414141]">برای عملکرد بهتر از پشتیبانی میتوانید حساب خود را به ایتا متصل کنید و راحت ت ربا پشتیبانی ارتبار برقرار کنید</h1>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                            <div onClick={() => setShow_submit_ticket(true)} className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <div className="flex justify-start gap-2 mb-1">
                                        <img className="w-8" src="paper.png" alt="png" />
                                        <p className="text-[19px] text-right mt-1 text-[#414141]" >ثبت تیکت</p>
                                    </div>
                                    <h1 className="text-right text-[14px] text-[#414141]">مشکل خود را درون فرم مورد بنویسید و ارسال کنید تا در اسرع وقت مشکل شما برطرف شود</h1>
                                </div>
                                <div className="right w-[30%] container">
                                    <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                </div>
                            </div> 

                        </div>
        

                        {show_submit_ticket &&
                            <div className="modal-account overflow-y-scroll mb-20">
                                <div className="container-modal-account flex items-center flex-col py-0 rounded-t-xl mx-auto">
                                
                                    <div className="header flex w-[100%] justify-start mt-6 flex-col">
                                        <div className="flex justify-start items-center mx-auto w-[90%] px-4">

                                            <div className="right flex justify-start gap-2">
                                                <img className="w-5 h-7" src="paper.png" alt="png" />
                                                <h1 className="title ">ثبت تیکت</h1>
                                            </div>

                                            <div className="left cursor-pointer mr-auto">
                                                <img onClick={() => setShow_submit_ticket(false)} className="rounded-full w-10" src="arrow.png" alt="png"/>
                                            </div>
                                        
                                        </div>
                                    </div>

                                    <form className="form-info pb-10 container flex-col w-[75%] mt-10 gap-1">

                                        <label className="pointer-input font-bold"> عنوان مشکل : </label>
                                        <input placeholder=".  وجود باگ در بخش کیف پول " className="login-input" type="text" />

                                        <label className="pointer-input">شماره همراه</label>
                                        <input placeholder=". ۹۳۲۳۰۲۳۲۳۲" className="login-input" type="text"/>

                                        <label className="pointer-input">شرح مشکل</label>
                                        <textarea placeholder=".  لورم ایپسیوم" className="login-textarea" type="text" ></textarea>

                                        <div className="mt-10 container gap-2">
                                            <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                            <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                        </div>

                                        <div className="mt-10 container gap-2">
                                            <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                            <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                        </div>

                                        <div className="linee container w-[20rem] h-[1px] mt-5 mb-2"></div>

                                        <button className="btn-f my-3 w-full py-3 rounded-xl text-white bg-[#5d71b7]">ارسال</button> 

                                    </form>
                    
                                </div>
                            </div>
                        }

                    </div>

                </div>
            }

            {shwosetting &&
                <div className="modal-account overflow-y-scroll mb-20">

                    <div className="container-modal-account py-0 rounded-t-xl">
                        
                        <div className="header flex w-[100%] justify-start py-3 flex-col bg-[#CEEABC] rounded-b-[24px]">
                            <div className="flex justify-start items-center mx-auto w-[90%] mt-5 pb-5 px-4">

                                <div className="right">
                                    <h1 className="title ">تنظیمات</h1>
                                </div>

                                <div className="left cursor-pointer mr-auto">
                                    <img onClick={() => setShowsetting(false)} className="rounded-full w-10" src="Account-page/arrow.png" alt="png"/>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div className="container flex-col w-[90%] mx-auto pt-1">

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">

                                <div className="title w-[70%]">
                                    <div className="flex justify-start gap-2 mb-1">
                                        <img className="w-8" src="Account-page/alert.png" alt="png" />
                                        <p className="text-[19px] text-right mt-1 text-black" >اعلانات</p>
                                    </div>
                                    <h1 className="text-right text-[15px] text-[#5a5a5a] mt-2">فعال</h1>
                                </div>

                                <div className="right w-[30%] container">

                                    <label class="switch">
                                        <input className="input" type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                </div>

                            </div>

                            <div className="button container cursor-pointer pb-4 border-b-[2px] mt-5">
                                <div className="title w-[70%]">
                                    <div className="flex justify-start gap-2 mb-1">
                                        <img className="w-8" src="Account-page/darklight.png" alt="png" />
                                        <p className="text-[19px] text-right mt-1 text-black" >اعلانات</p>
                                    </div>
                                    <h1 className="text-right text-[15px] text-[#5a5a5a] mt-2">روشن</h1>
                                </div>

                                <div className="right w-[30%] container">

                                    <label class="switch">
                                        <input className="input" type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                </div>
                            </div> 

                            <div className="button container cursor-pointer pb-4 mt-5">
                                <div className="title w-[85%]">
                                    <div className="flex justify-start gap-2 mb-1">
                                        <img className="w-8" src="Account-page/ticket.png" alt="png" />
                                        <p className="text-[19px] text-right mt-1 text-black" >پذیرش درخواست ها</p>
                                    </div>
                                    <h1 className="text-right text-[12px] text-[#5a5a5a] mt-2">پذیرش از شهر خودم "فقط درخواست های شهر خود را دریافت خواهید کرد"</h1>
                                    <h1 className="text-right text-[12px] text-[#5a5a5a] mt-8">پذیرش سراسری "تمامی درخواست ها از سراسر کشور را دریافت خواهید کرد"</h1>
                                </div>

                                <div className="right w-[15%] container flex-col">

                                    <label class="switch mt-8">
                                        <input className="input" type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                    <label class="switch mt-8">
                                        <input className="input" type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                </div>

                            </div>

                            <div className="benner title container w-[100%] h-[7rem] bg-[#E3E3E3] mt-7 rounded-[12px]">
                                بنر تبلیغاتی
                            </div>

                            <div className="items h-[35rem]">

                                <div onClick={() => setShowmodal(true)} className="button container cursor-pointer pb-6 border-b-[2px] mt-10">
                                    <div className="title w-[70%]">
                                        <div className="flex justify-start gap-2 mb-1">
                                            <img className="w-8" src="Account-page/question.png" alt="png" />
                                            <p className="text-[19px] text-right mt-1 text-black" >پرسش های متداول</p>
                                        </div>
                                        <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[30%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div>

                                <div onClick={() => setShowmodal2(true)} className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                    <div className="title w-[70%]">
                                        <div className="flex justify-start gap-2 mb-1">
                                            <img className="w-8" src="Account-page/lock.png" alt="png" />
                                            <p className="text-[19px] text-right mt-1 text-black" >حریم خصوصی</p>
                                        </div>
                                        <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[30%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div>

                                <div onClick={() => setShowmodal3(true)} className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                    <div className="title w-[70%]">
                                        <div className="flex justify-start gap-2 mb-1">
                                            <img className="w-8" src="Account-page/like.png" alt="png" />
                                            <p className="text-[19px] text-right mt-1 text-black" >شرایط استفاده</p>
                                        </div>
                                        <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[30%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div>

                                <div onClick={() => setShowmodal4(true)} className="button container cursor-pointer pb-6 border-b-[2px] mt-5">
                                    <div className="title w-[70%]">
                                        <div className="flex justify-start gap-2 mb-1">
                                            <img className="w-8" src="Account-page/call.png" alt="png" />
                                            <p className="text-[19px] text-right mt-1 text-black" >تماس با ما</p>
                                        </div>
                                        <p className="line-clamp-1 text-[15px] text-right mt-1 text-[#414141]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>
                                    <div className="right w-[30%] container">
                                        <img className="w-3 mr-auto" src="arrow-left.png" alt="png"/>
                                    </div>
                                </div>

                            </div>

                            {showmodal &&
                                <div className="modal-home">
                                    <div className="container-modal px-5 py-4 rounded-t-xl">
                                        
                                        <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>
            
                                        <div className="title container gap-2">
                                            <img className="w-8" src="Account-page/question.png" alt="png" />
                                            <h1 className="mt-1">پرسش های متداول</h1>
                                            <img onClick={() => setShowmodal(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                                        </div>
                                        
                                        <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>
            
                                        <div className="pr mt-10">

                                            <div className="flex justify-start items-center gap-2">
                                                <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                                <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                            </div>
                        
                                            <p className="mt-3 text-[19px] text-right">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                            </p>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="linee w-full h-[2px] mt-20"></div>
                        
                                            <button onClick={() => setShowmodal(false)} className="w-full h-[3rem] mt-4 rounded-[12px] text-white bg-[#AFC0FF]">برگشت</button>
                        
                                        </div>
                        
                                    </div>
                                </div>
                            }

                            {showmodal2 &&
                                <div className="modal-home">
                                    <div className="container-modal px-5 py-4 rounded-t-xl">
                                        
                                        <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>
            
                                        <div className="title container gap-2">
                                            <img className="w-8" src="Account-page/lock.png" alt="png" />
                                            <h1 className="mt-1"> حریم خصوصی </h1>
                                            <img onClick={() => setShowmodal2(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                                        </div>
                                        
                                        <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>
            
                                        <div className="pr mt-10">

                                            <div className="flex justify-start items-center gap-2">
                                                <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                                <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                            </div>
                        
                                            <p className="mt-3 text-[19px] text-right">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                            </p>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="linee w-full h-[2px] mt-20"></div>
                        
                                            <button onClick={() => setShowmodal2(false)} className="w-full h-[3rem] mt-4 rounded-[12px] text-white bg-[#AFC0FF]">برگشت</button>
                        
                                        </div>
                        
                                    </div>
                                </div>
                            }

                            {showmodal3 &&
                                <div className="modal-home">
                                    <div className="container-modal px-5 py-4 rounded-t-xl">
                                        
                                        <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>
            
                                        <div className="title container gap-2">
                                            <img className="w-8" src="Account-page/like.png" alt="png" />
                                            <h1 className="mt-1"> شرایط استفاده </h1>
                                            <img onClick={() => setShowmodal3(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                                        </div>
                                        
                                        <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>
            
                                        <div className="pr mt-10">

                                            <div className="flex justify-start items-center gap-2">
                                                <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                                <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                            </div>
                        
                                            <p className="mt-3 text-[19px] text-right">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                            </p>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="linee w-full h-[2px] mt-20"></div>
                        
                                            <button onClick={() => setShowmodal3(false)} className="w-full h-[3rem] mt-4 rounded-[12px] text-white bg-[#AFC0FF]">برگشت</button>
                        
                                        </div>
                        
                                    </div>
                                </div>
                            }

                            {showmodal4 &&
                                <div className="modal-home">
                                    <div className="container-modal px-5 py-4 rounded-t-xl">
                                        
                                        <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>
            
                                        <div className="title container gap-2">
                                            <img className="w-8" src="Account-page/call.png" alt="png" />
                                            <h1 className="mt-1">تماس با ما</h1>
                                            <img onClick={() => setShowmodal4(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                                        </div>
                                        
                                        <div className="btn-left h-[70px] w-[10px] bg-[#B7E09F] fixed right-[0px] rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all top-[15rem]"></div>
            
                                        <div className="pr mt-10">

                                            <div className="flex justify-start items-center gap-2">
                                                <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                                <h1 className="font-bold text-[19px]">لورم ایپسوم: </h1>
                                            </div>
                        
                                            <p className="mt-3 text-[19px] text-right">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                            </p>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="mt-10 container gap-2">
                                                <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                                <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                            </div>
                        
                                            <div className="linee w-full h-[2px] mt-20"></div>
                        
                                            <button onClick={() => setShowmodal4(false)} className="w-full h-[3rem] mt-4 rounded-[12px] text-white bg-[#AFC0FF]">برگشت</button>
                        
                                        </div>
                        
                                    </div>
                                </div>
                            }

                        </div>

                    </div>

                </div>
            }



        </>
    )
}