import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import AnimatedTextWord from "../components/AnimatedTextWord";
export default function Thanks() {
  return (
    <div>
      <Head>
        <title>참가자 및 스태프</title>
      </Head>
      <Header />
      <div className="flex justify-center items-center flex-col">
        <div className="bg-slate-900 p-10 w-full flex justify-center items-center py-24">
          <AnimatedTextWord text="참가자 및 스태프" />
        </div>

        <div className="mt-8">
          <div>
            <div className="px-4 border-b-4 text-xl flex">
              <div className="mx-auto">주관</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-3 md:col-span-4 lg:col-span-5 p-3 bg-slate-100 rounded-lg flex justify-center ">
                CNSA IT 편집부
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                권하진
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                나우혁
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                이승주
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                전현우
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                정윤승
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                박유민
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                이은채
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                임진성
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <div className="px-4 border-b-4 text-xl flex">
              <div className="mx-auto">사회</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                권하진
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                나우혁
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                이승주
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                전현우
              </div>
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                정윤승
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <div className="px-4 border-b-4 text-xl flex">
              <div className="mx-auto">포스터</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="p-3 bg-pink-500 text-white rounded-lg flex justify-center">
                박유민
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <div className="px-4 border-b-4 text-xl flex">
              <div className="mx-auto">발표</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-3 md:col-span-4 lg:col-span-5 p-3 bg-slate-100 rounded-lg flex justify-center ">
                IT를 주제로 연구한 8기
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <div className="px-4 border-b-4 text-xl flex">
              <div className="mx-auto">Special Thanks</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5">
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                김다인
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                김민서
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                민채은
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                윤기완
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                홍준혁
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                윤용철
                <br />
                선생님
              </div>
              <div className="p-3 bg-slate-100 rounded-lg flex justify-center items-center">
                이정석
                <br />
                선생님
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}