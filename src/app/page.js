import { BtnProvider } from "./components/context/BtnContext";
import Login_banner from "./components/Login-banner";

export default function Home() {

  return (
    <main dir="rtl" className="flex pb-10 flex-col items-center justify-center">
      
      <div className="header mt-[2rem] flex justify-center items-center">
        <img className="w-[40%]" src='Concat.png' alt='png'/>
      </div>

      <BtnProvider>
        <div className="banner flex justify-center items-center">
          <Login_banner/>
        </div>
      </BtnProvider>
      
    </main>
  );
}
