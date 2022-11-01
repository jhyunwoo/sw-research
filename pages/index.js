import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import schoolmap from "../public/schoolmap.gif";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div className="bg-slate-100 w-screen relative">
      <Head>
        <title>소프트웨어 과제연구 발표회</title>
      </Head>
      <Header />
      <div className="w-full h-screen flex bg-slate-900 justify-center items-center flex-col">
        <div className="w-4/5 h-4/5 text-white text-5xl flex sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <div className="my-auto">
            2022
            <br />
            소프트웨어
            <br />
            과제연구 발표회
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="bg-white m-4 p-4 rounded-2xl shadow-xl">
            <div className="text-2xl font-bold text-center">장소</div>
            <div className="my-3 font-semibold text-center text-xl">
              충남삼성고등학교 갤럭시 홀
            </div>
            <Image
              src={schoolmap}
              alt="school map"
              className="rounded-xl mx-auto"
            ></Image>
          </div>
          <div className="bg-white m-4 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-center items-center flex-col w-full h-full">
              <div className="text-2xl font-bold text-center">일시</div>
              <div className="my-3 font-semibold text-center text-xl">
                2022.11.08 (화) ET, EP1, EP2
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <Link href="/participants">
            <div className="bg-indigo-900 py-12 hover:bg-indigo-800 transition duration-300 p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-center text-white">
                참가자
              </div>
            </div>
          </Link>
          <Link href="/poster">
            <div className="bg-blue-900 py-12 hover:bg-blue-800 transition duration-300 p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-center text-white">
                발표 포스터
              </div>
            </div>
          </Link>
          <Link href="http://it.cnsa.hs.kr">
            <div className="bg-blue-800 py-12 hover:bg-blue-700 transition duration-300 p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-center text-white">
                CNSA IT과정
              </div>
            </div>
          </Link>
          <Link href="https://cnsa.hs.kr">
            <div className="bg-blue-600 py-12 hover:bg-blue-500 transition duration-300 p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-center text-white">
                충남삼성고
              </div>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}
