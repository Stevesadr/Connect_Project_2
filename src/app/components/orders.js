'use client'
import { useContext, useState } from "react"
import { SelectContext } from "./context/SelectContext"
import Link from "next/link"

export default function() {


    //Order Page


    //Recive the style info From "SelectContext"
    const { bg , bg2 , Changebgright , Changebgleft } = useContext(SelectContext)
    
    //Handle Click buttons "Change style & Change info"
    const [ checkfilter , setCheckfilter ] = useState(true)
    const [ title , setTitle ] = useState('سفارشات روز')

    const Clickhandler_left = (e) => {
        e.preventDefault()
        Changebgleft()
        setCheckfilter(true)
        setTitle("سفارشات روز")
    }

    const Clickhandler_right = (e) => {
        e.preventDefault()
        Changebgright()
        setCheckfilter(false)
        setTitle("درحال انجام")
    }


        //Show Modals
        const [ showmodal_1 , setShowmodal_1 ] = useState(false)
        const [ showmodal_2 , setShowmodal_2 ] = useState(false)
        const [ showmodal_3 , setShowmodal_3 ] = useState(false)

        const [ btnright , setBtnright ] = useState(false)
        const [ btnright2 , setBtnright2 ] = useState(false)
        const [ btnright3 , setBtnright3 ] = useState(false)

        const [ btnright_1 , setBtnright_1 ] = useState(false)
        const [ btnright2_2 , setBtnright2_2 ] = useState(false)
        const [ btnright3_3 , setBtnright3_3 ] = useState(false)

        const [ card1 , setCard1 ] = useState(true)
        const [ card2 , setCard2 ] = useState(true)
        const [ card3 , setCard3 ] = useState(true)

        

    return(
        <>
            <div className="search w-[90%] container relative bottom-[22px]">
                <div className="cursor-pointer w-[3rem] h-[3rem] bg-white border-[#363636] border-[1px] border-l-0 rounded-r-[12px] container">
                    <img className="w-[2rem] h-[2rem]" src="search.png" alt="png" />
                </div>
                <input placeholder="جست و جوی آگهی ..." className="w-[80%] h-[3rem] text-[20px] px-2 border-[#363636] border-[1px] rounded-r-none rounded-[12px] border-solid border-r-0" type="text" />
            </div>

            <div className="buttons w-[90%] flex justify-center items-center h-[5rem] rounded-[12px] bg-[#EFEFEF]">
                <button onClick={Clickhandler_left} style={{background:bg}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">صندوق سفارشات</button>
                <button onClick={Clickhandler_right} style={{background:bg2}} className="transition-all w-[45%] h-[4rem] text-[19px] px-2 rounded-[8px]">سفارشات پذیرفته شده</button>
            </div>

            <div className="items w-[90%] container flex-col mt-4">
                
                <div className="titr container gap-2">
                    <img className="w-8  " src="recently.png" alt="png" />
                    <h1 className="text-[23px] mt-1">{title}</h1>
                    <img className="w-[15rem] mt-1" src="line.png" alt="png" />
                </div>


                {checkfilter &&

                    <div className="cards mt-7 mb-[7rem] w-[100%]">

                        {card1 && 
                        <div className="container flex items-center">
                            {btnright &&
                                <div onClick={() => setShowmodal_1(true)} className="btn-right-absolute relative right-[15px] text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#72B8BD] rounded-r-[20px] cursor-pointer hover:bg-[#7fd3c9] transition-all">
                                    پذیرش
                                </div>
                            }
                            <div onClick={() => !btnright && setBtnright(true) || btnright && setBtnright(false)} className="btn-right relative right-[15px] h-[90px] w-[15px] bg-[#72B8BD] rounded-l-[10px] cursor-pointer hover:bg-[#7fd3c9] transition-all"></div>

                            <div className="card-order h-[10rem] rounded-[12px] cursor-pointer w-[100%] px-4 py-3 my-10">
                                
                                <div className="top container gap-2">
                                    
                                    
                                    <div className="right w-[20%] flex justify-start items-start">
                                        <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                    </div>            
                                    
                                    <div onClick={() => setBtnright_1(true)} className="center w-[80%] container flex-col">
                                        <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                        <div className="container gap-2">
                                            <img className="w-4" src="paper.png" alt="png" />
                                            <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                        </div>
                                    </div>

                                    <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                                
                                </div>

                                <div className="bottom mt-3">
                                    <p className="text-[14px] text-right mr-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                            </div>

                            {btnright_1 &&
                                <div onClick={() => setCard1(false)} className="btn-right-absolute relative text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#b56f6f] rounded-l-[20px] cursor-pointer hover:bg-[#c54c4c] transition-all">
                                    رد کردن
                                </div>
                            }

                        </div>
                        }

                        {card2 && 
                        <div className="container flex items-center">
                            {btnright2 &&
                                <div onClick={() => setShowmodal_2(true)} className="btn-right-absolute relative right-[15px] text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#c0c055] rounded-r-[20px] cursor-pointer hover:bg-[#c6c630] transition-all">
                                    پذیرش
                                </div>
                            }
                            <div onClick={() => !btnright2 && setBtnright2(true) || btnright2 && setBtnright2(false)} className="btn-right relative right-[15px] h-[90px] w-[15px] bg-[#c0c055] rounded-l-[10px] cursor-pointer hover:bg-[#c6c630] transition-all"></div>

                            <div className="card-order h-[10rem] rounded-[12px] cursor-pointer w-[100%] px-4 py-3 my-10">
                                
                                <div className="top container gap-2">
                                    
                                    
                                    <div className="right w-[20%] flex justify-start items-start">
                                        <img className="w-14 rounded-full" src="3Dyellow.png" alt="png" />
                                    </div>            
                                    
                                    <div onClick={() => setBtnright2_2(true)} className="center w-[80%] container flex-col">
                                        <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                        <div className="container gap-2">
                                            <img className="w-4" src="paper.png" alt="png" />
                                            <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                        </div>
                                    </div>

                                    <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                                
                                </div>

                                <div className="bottom mt-3">
                                    <p className="text-[14px] mr-4 text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                            </div>

                            {btnright2_2 &&
                                <div onClick={() => setCard2(false)} className="btn-right-absolute relative text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#b56f6f] rounded-l-[20px] cursor-pointer hover:bg-[#c54c4c] transition-all">
                                    رد کردن
                                </div>
                            }

                        </div>
                        }

                        {card3 &&
                        <div className="container flex items-center">
                            {btnright3 &&
                                <div onClick={() => setShowmodal_3(true)} className="btn-right-absolute relative right-[15px] text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#707070] rounded-r-[20px] cursor-pointer hover:bg-[#4e4e4e] transition-all">
                                    پذیرش
                                </div>
                            }
                            <div onClick={() => !btnright3 && setBtnright3(true) || btnright3 && setBtnright3(false)} className="btn-right relative right-[15px] h-[90px] w-[15px] bg-[#707070] rounded-l-[10px] cursor-pointer hover:bg-[#4e4e4e] transition-all"></div>

                            <div className="card-order h-[10rem] rounded-[12px] cursor-pointer w-[100%] px-4 py-3 my-10">
                                
                                <div className="top container gap-2">
                                    
                                    
                                    <div className="right w-[20%] flex justify-start items-start">
                                        <img className="w-14 rounded-full" src="3Dblack.png" alt="png" />
                                    </div>            
                                    
                                    <div onClick={() => setBtnright3_3(true)} className="center w-[80%] container flex-col">
                                        <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                        <div className="container gap-2">
                                            <img className="w-4" src="paper.png" alt="png" />
                                            <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                        </div>
                                    </div>

                                    <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                                
                                </div>

                                <div className="bottom mt-3">
                                    <p className="text-[14px] text-right mr-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
                            </div>

                            {btnright3_3 &&
                                <div onClick={() => setCard3(false)} className="btn-right-absolute relative text-white font-bold container text-[20px] h-[9rem] w-[100px] bg-[#b56f6f] rounded-l-[20px] cursor-pointer hover:bg-[#c54c4c] transition-all">
                                    رد کردن
                                </div>
                            }

                        </div>
                        }

                    </div>

                    ||
                    
                    <div className="cards mt-7 mb-[7rem] w-[95%]">

                        <div className="card-order cursor-pointer w-[100%] px-4 py-3">
                            
                            <div className="top container gap-2">
                                
                                <div className="right w-[20%] flex justify-start items-start">
                                    <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                </div>

                                <div className="center w-[80%] container flex-col">
                                    <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                    <div className="container gap-2">
                                        <img className="w-4" src="paper.png" alt="png" />
                                        <h2 className="ml-auto text-[14px] mt-1">توسط شما پذیرفته شد</h2>
                                    </div>
                                </div>

                                <img className="left w-[20px] mb-8 mr-auto" src="notification.png" alt="png" />
                            
                            </div>

                            <div className="bottom container w-full">
                                <div className="right w-[40%] container gap-2">
                                    <img className="w-[20px]" src="recently.png" alt="png" />
                                    <h2>زمان گفتگو</h2>
                                </div>
                                <div className="left w-[60%] container">
                                    <h2>00 : 00 :24 ساعت باقی مانده </h2>
                                </div>
                            </div>

                            <div className="end w-[17.5rem] mx-auto mt-2">
                                <div className="line w-full h-[5px] bg-[#E5E5E5] rounded-[14px]">
                                    <div className="w-[30%] h-[5px] bg-[#FF8585] rounded-[14px] mr-auto"></div>
                                </div>
                            </div>

                            <div className="line-end container py-3 w-[90%] border-t-[0.5px] border-t-[#9c9c9c] mt-5">
                                <h2 className="text-[#9c9c9c] text-[17px]">شروع گفتگو</h2>
                            </div>

                        </div>

                        <div className="card-order cursor-pointer w-[100%] px-4 py-3">
                            
                            <div className="top container gap-2">
                                
                                <div className="right w-[20%] flex justify-start items-start">
                                    <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                </div>

                                <div className="btn-left h-[90px] w-[10px] bg-[#72B8BD] relative left-[90px] top-10 rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all"></div>
                                
                                <div className="center w-[80%] container flex-col">
                                    <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                    <div className="container gap-2">
                                        <img className="w-4" src="paper.png" alt="png" />
                                        <h2 className="ml-auto text-[14px] mt-1">توسط شما در حال انجام است</h2>
                                    </div>
                                </div>

                                <img className="left w-[20px] mb-8 mr-auto" src="notification.png" alt="png" />
                            
                            </div>

                            <div className="bottom container w-full">
                                <div className="right w-[40%] container gap-2">
                                    <img className="w-[20px]" src="recently.png" alt="png" />
                                    <h2>زمان گفتگو</h2>
                                </div>
                                <div className="left w-[60%] container">
                                    <h2>۲۲ : ۱۰ :۲۲ ساعت باقی مانده </h2>
                                </div>
                            </div>

                            <div className="end w-[17.5rem] mx-auto mt-2">
                                <div className="line w-full h-[5px] bg-[#E5E5E5] rounded-[14px]">
                                    <div className="w-[30%] h-[5px] bg-[#FF8585] rounded-[14px] mr-auto"></div>
                                </div>
                            </div>

                            <Link href="/Chat_page" className="line-end container py-3 w-[90%] border-t-[0.5px] border-t-[#9c9c9c] mt-5">
                                <h2 className="text-[#9c9c9c] text-[17px]">صفحه گفتگو</h2>
                            </Link>

                        </div>

                        <div className="linee w-full h-[2px] mb-5 mt-7"></div>

                        <div className="container flex-col gap-3">
                            
                            <div className="container gap-3">
                                <img className="w-6 rotate-90" src="dot-green.png" alt="png" />
                                <h1 className="text-[20px] font-bold mt-2">انجام شده ها</h1>
                                <img className="w-6" src="dot-green.png" alt="png" />
                            </div>
                            
                            <div className="container gap-1">
                                <h1 className="w-[40%] text-[17px] text-[#363636]">امروز ، ۱۲ام فروردین ۱٤۰۲</h1>
                                <div className="linee2 w-[60%] h-[2px]"></div>
                            </div>

                            <div className="card-order cursor-pointer w-[100%] px-4 py-3">
                            
                            <div className="top container gap-2">
                                
                                <div className="right w-[20%] flex justify-start items-start">
                                    <img className="w-14 rounded-full" src="3Dgreen.png" alt="png" />
                                </div>

                                <div className="center w-[80%] container flex-col">
                                    <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                    <div className="container gap-2">
                                        <img className="w-4" src="paper.png" alt="png" />
                                        <h2 className="ml-auto text-[14px] mt-1">تکمیل شد</h2>
                                    </div>
                                </div>

                                <img className="left w-[20px] mb-8 mr-auto" src="download-black.png" alt="png" />
                            
                            </div>

                            <div className="bottom container w-full">
                                <div className="right w-[40%] container gap-2">
                                    <img className="w-[20px]" src="recently.png" alt="png" />
                                    <h2>زمان گفتگو</h2>
                                </div>
                                <div className="left w-[60%] container">
                                    <h2>00 : 00 : 00 ساعت باقی مانده </h2>
                                </div>
                            </div>

                            <div className="end w-[17.5rem] mx-auto mt-2">
                                <div className="line w-full h-[5px] bg-[#E5E5E5] rounded-[14px]">
                                    <div className="w-[100%] h-[5px] bg-[#FF8585] rounded-[14px] mr-auto"></div>
                                </div>
                            </div>

                        </div>

                        </div>

                    </div>

                }

            </div>

                { showmodal_1 &&
                    <div className="modal-orders">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="share.png" alt="png" />
                                <img onClick={() => setShowmodal_1(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>

                            <div className="card-modal mt-5 mx-auto container flex-col w-[90%] bg-[#CEEABC] gap-3 px-4 py-4 rounded-[24px]">

                                <div className="title  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="save.png" alt="png" />
                                    <h1 className="">موضوع : طراحی محصول دیجیتال</h1>
                                </div>

                                <div className="name  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-6" src="account-green.png" alt="png" />
                                    <h1 className="mt-1">حمید احمدی</h1>
                                </div>

                                <div className="location  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-5" src="location-green.png" alt="png" />
                                    <h1 className="mt-1">ادرس :  تهران ، یوسف اباد ، نبش کوچه لادن</h1>
                                </div>

                                <div className="date  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="date-green.png" alt="png" />
                                    <h1>تاریخ سفارش :  ۱٤۰۲/۱۲/۲٦</h1>
                                </div>

                                <div className="container">
                                    <div className="number bg-white px-3 py-2 rounded-[12px] text-[#99BC85] flex justify-start items-center ml-auto gap-2">
                                        <img className="w-7" src="call.png" alt="png" />
                                        <h1>تماس : 093022332123</h1>
                                    </div>
                                    <div className="comment flex justify-start items-center mr-auto ml-2 gap-2">
                                        <img className="w-3 mb-1" src="star.png" alt="png" />
                                        <h1 className="text-[15px]">12 نظر</h1>
                                    </div>
                                </div>

                            </div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]"> توضیحات </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="container fixed bottom-[5rem] bg-white">
                                    <button className="w-[60%] h-[3rem] mt-4 rounded-[12px] bg-[#74D7A9] text-white">پذیرش سفارش</button>
                                    <button className="w-[40%] h-[3rem] mt-4 rounded-[12px] text-[#FD9372]">رد سفارش</button>
                                </div>
                                

                            </div>
                            
                            <div className="more-items container flex-col mt-7">
                                <div className="line w-full h-[10px] mb-7 bg-[#FFEAE3] rounded-xl"></div>

                                <label className="pointer-input">جنسیت</label>
                                <h1 className="w-full h-[3rem] text-right mb-3 bg-[#FFEAE3] p-3 rounded-[8px]">ترجیحا آقا</h1>
                                
                                <label className="pointer-input">نرم افزار های مد نظر</label>
                                <h1 className="w-full h-[3rem] text-right mb-3 bg-[#FFEAE3] p-3 rounded-[8px]">فتوشاپ،فیگما،ایلاستریتور</h1>
                                
                                <button className="btn-order px-3 rounded-[8px] mt-8 w-full container h-[3.5rem]">
                                    ثبت تخلف سفارش 
                                    <img className="w-2 mr-auto" src="arrow-left.png" alt="png" />
                                </button>

                                <div className="w-full h-[5rem] container rounded-[8px] mt-5 bg-[#E1F0DA]">
                                    بنر تبلیغات 
                                </div>

                            </div>

                            <div className="more-orders mt-10 container flex-col">
                                
                                <div className="con flex justify-center items-center">
                                    <h1 className="text-[40px] text-[#363636] mb-2">__ _ _</h1>
                                    <div className="shadow-btn"> دیگر سفارشات</div>
                                    <h1 className="text-[40px] text-[#363636] mb-2">__ ___</h1>
                                </div>

                                <div className="card-order cursor-pointer w-[100%] px-4 py-3 my-10">
                            
                                    <div className="top container gap-2">
                                
                                        <div className="right w-[20%] flex justify-start items-start">
                                            <img className="w-14 rounded-full" src="store.png" alt="png" />
                                        </div>

                                        <div className="btn-left h-[90px] w-[10px] bg-[#FECF75] relative left-[90px] top-10 rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all"></div>
                                    
                                        <div className="center w-[80%] container flex-col">
                                            <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                            <div className="container gap-2">
                                                <img className="w-4" src="paper.png" alt="png" />
                                                <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                            </div>
                                        </div>

                                        <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                                
                                    </div>

                                    <div className="bottom">
                                        <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>

                                </div>

                                <div className="card-order cursor-pointer w-[100%] px-4 py-3 my-10">
                            
                            <div className="top container gap-2">
                        
                                <div className="right w-[20%] flex justify-start items-start">
                                    <img className="w-14 rounded-full" src="store.png" alt="png" />
                                </div>

                                <div className="btn-left h-[90px] w-[10px] bg-[#FECF75] relative left-[90px] top-10 rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all"></div>
                            
                                <div className="center w-[80%] container flex-col">
                                    <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                    <div className="container gap-2">
                                        <img className="w-4" src="paper.png" alt="png" />
                                        <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                    </div>
                                </div>

                                <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                        
                            </div>

                            <div className="bottom">
                                <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                            </div>

                        </div>

                            </div>

                        </div>
                    </div>
                }

                {showmodal_2 &&
                    <div className="modal-orders">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="share.png" alt="png" />
                                <img onClick={() => setShowmodal_2(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>

                            <div className="card-modal mt-5 mx-auto container flex-col w-[90%] bg-[#CEEABC] gap-3 px-4 py-4 rounded-[24px]">

                                <div className="title  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="save.png" alt="png" />
                                    <h1 className="">موضوع : طراحی محصول دیجیتال</h1>
                                </div>

                                <div className="name  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-6" src="account-green.png" alt="png" />
                                    <h1 className="mt-1">حمید احمدی</h1>
                                </div>

                                <div className="location  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-5" src="location-green.png" alt="png" />
                                    <h1 className="mt-1">ادرس :  تهران ، یوسف اباد ، نبش کوچه لادن</h1>
                                </div>

                                <div className="date  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="date-green.png" alt="png" />
                                    <h1>تاریخ سفارش :  ۱٤۰۲/۱۲/۲٦</h1>
                                </div>

                                <div className="container">
                                    <div className="number bg-white px-3 py-2 rounded-[12px] text-[#99BC85] flex justify-start items-center ml-auto gap-2">
                                        <img className="w-7" src="call.png" alt="png" />
                                        <h1>تماس : 093022332123</h1>
                                    </div>
                                    <div className="comment flex justify-start items-center mr-auto ml-2 gap-2">
                                        <img className="w-3 mb-1" src="star.png" alt="png" />
                                        <h1 className="text-[15px]">12 نظر</h1>
                                    </div>
                                </div>

                            </div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]"> توضیحات </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="container fixed bottom-[5rem] bg-white">
                                    <button className="w-[60%] h-[3rem] mt-4 rounded-[12px] bg-[#74D7A9] text-white">پذیرش سفارش</button>
                                    <button className="w-[40%] h-[3rem] mt-4 rounded-[12px] text-[#FD9372]">رد سفارش</button>
                                </div>
                                

                            </div>
                            
                            <div className="more-items container flex-col mt-7">
                                <div className="line w-full h-[10px] mb-7 bg-[#FFEAE3] rounded-xl"></div>

                                <label className="pointer-input">جنسیت</label>
                                <h1 className="w-full h-[3rem] text-right mb-3 bg-[#FFEAE3] p-3 rounded-[8px]">ترجیحا آقا</h1>
                                
                                <label className="pointer-input">نرم افزار های مد نظر</label>
                                <h1 className="w-full h-[3rem] text-right mb-3 bg-[#FFEAE3] p-3 rounded-[8px]">فتوشاپ،فیگما،ایلاستریتور</h1>
                                
                                <button className="btn-order px-3 rounded-[8px] mt-8 w-full container h-[3.5rem]">
                                    ثبت تخلف سفارش 
                                    <img className="w-2 mr-auto" src="arrow-left.png" alt="png" />
                                </button>

                                <div className="w-full h-[5rem] container rounded-[8px] mt-5 bg-[#E1F0DA]">
                                    بنر تبلیغات 
                                </div>

                            </div>

                            <div className="more-orders mt-10 container flex-col">
                                
                                <div className="con flex justify-center items-center">
                                    <h1 className="text-[40px] text-[#363636] mb-2">__ _ _</h1>
                                    <button className="shadow-btn"> دیگر سفارشات</button>
                                    <h1 className="text-[40px] text-[#363636] mb-2">__ ___</h1>
                                </div>

                                <div className="card-order cursor-pointer w-[100%] px-4 py-3 my-10">
                            
                                    <div className="top container gap-2">
                                
                                        <div className="right w-[20%] flex justify-start items-start">
                                            <img className="w-14 rounded-full" src="store.png" alt="png" />
                                        </div>

                                        <div className="btn-left h-[90px] w-[10px] bg-[#FECF75] relative left-[90px] top-10 rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all"></div>
                                    
                                        <div className="center w-[80%] container flex-col">
                                            <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                            <div className="container gap-2">
                                                <img className="w-4" src="paper.png" alt="png" />
                                                <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                            </div>
                                        </div>

                                        <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                                
                                    </div>

                                    <div className="bottom">
                                        <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                    </div>

                                </div>

                                <div className="card-order cursor-pointer w-[100%] px-4 py-3 my-10">
                            
                            <div className="top container gap-2">
                        
                                <div className="right w-[20%] flex justify-start items-start">
                                    <img className="w-14 rounded-full" src="store.png" alt="png" />
                                </div>

                                <div className="btn-left h-[90px] w-[10px] bg-[#FECF75] relative left-[90px] top-10 rounded-l-[10px] cursor-pointer hover:bg-[#9dd37f] transition-all"></div>
                            
                                <div className="center w-[80%] container flex-col">
                                    <h1 className="font-bold ml-auto text-[20px]">طراحی لوگو</h1>
                                    <div className="container gap-2">
                                        <img className="w-4" src="paper.png" alt="png" />
                                        <h2 className="ml-auto text-[16px] mt-1">وضعیت : در دسترس</h2>
                                    </div>
                                </div>

                                <img className="left w-[7px] mb-8 mr-auto" src="meno-white.png" alt="png" />
                        
                            </div>

                            <div className="bottom">
                                <p className="text-[14px] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                            </div>

                        </div>

                            </div>

                        </div>
                    </div>
                }

                {showmodal_3 &&
                    <div className="modal-orders">
                        <div className="container-modal px-5 py-4 rounded-t-xl">
                            
                            <div className="line w-[55px] h-[7px] mb-7 bg-black mx-auto rounded-xl"></div>

                            <div className="title container gap-2">
                                <img className="w-7" src="share.png" alt="png" />
                                <img onClick={() => setShowmodal_3(false)} className="w-10 mr-auto cursor-pointer" src="arrow.png" alt="png" />
                            </div>

                            <div className="card-modal mt-5 mx-auto container flex-col w-[90%] bg-[#CEEABC] gap-3 px-4 py-4 rounded-[24px]">

                                <div className="title  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="save.png" alt="png" />
                                    <h1 className="">موضوع : طراحی محصول دیجیتال</h1>
                                </div>

                                <div className="name  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-6" src="account-green.png" alt="png" />
                                    <h1 className="mt-1">حمید احمدی</h1>
                                </div>

                                <div className="location  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-5" src="location-green.png" alt="png" />
                                    <h1 className="mt-1">ادرس :  تهران ، یوسف اباد ، نبش کوچه لادن</h1>
                                </div>

                                <div className="date  flex justify-start items-center ml-auto gap-2">
                                    <img className="w-7" src="date-green.png" alt="png" />
                                    <h1>تاریخ سفارش :  ۱٤۰۲/۱۲/۲٦</h1>
                                </div>

                                <div className="container">
                                    <div className="number bg-white px-3 py-2 rounded-[12px] text-[#99BC85] flex justify-start items-center ml-auto gap-2">
                                        <img className="w-7" src="call.png" alt="png" />
                                        <h1>تماس : 093022332123</h1>
                                    </div>
                                    <div className="comment flex justify-start items-center mr-auto ml-2 gap-2">
                                        <img className="w-3 mb-1" src="star.png" alt="png" />
                                        <h1 className="text-[15px]">12 نظر</h1>
                                    </div>
                                </div>

                            </div>

                            <div className="pr mt-10">
                                <div className="flex justify-start items-center gap-2">
                                    <div className="w-[16px] h-[16px] rounded-[6px] bg-[#AFC0FF]"></div>
                                    <h1 className="font-bold text-[19px]"> توضیحات </h1>
                                </div>
            
                                <p className="mt-3 text-[19px] text-right">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .
                                </p>
            
                                <div className="mt-10 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>
            
                                <div className="mt-7 container gap-2">
                                    <div className="w-[12px] h-[12px] rounded-full relative bottom-[14px] bg-[#99BC85]"></div>
                                    <p className="w-[90%] text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
                                </div>

                                <div className="container fixed bottom-[5rem] bg-white">
                                    <button className="w-[60%] h-[3rem] mt-4 rounded-[12px] bg-[#74D7A9] text-white">پذیرش سفارش</button>
                                    <button className="w-[40%] h-[3rem] mt-4 rounded-[12px] text-[#FD9372]">رد سفارش</button>
                                </div>
                                

                            </div>

                        </div>
                    </div>
                }
        </>
    )
}