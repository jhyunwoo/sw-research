import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "flex w-screen items-center right-0 md:top-0 md:bottom-auto left-0 bottom-0 rounded-t-xl md:rounded-b-xl md:rounded-t-none py-2 fixed justify-around bg-slate-900"
      }
    >
      <Link href={"/"}>
        <div
          className={
            "text-white ring-slate-900 md:ring-white ring-1 p-1 md:p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          행사 정보
        </div>
      </Link>
      <Link href={"/poster"}>
        <div
          className={
            "text-white ring-slate-900 md:ring-white ring-1 p-1 md:p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          발표 포스터
        </div>
      </Link>
      <Link href={"http://it.cnsa.hs.kr"}>
        <div
          className={
            "text-white ring-slate-900 md:ring-white ring-1 p-1 md:p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          CNSA IT과정
        </div>
      </Link>
      <Link href={"https://cnsa.hs.kr"}>
        <div
          className={
            "text-white ring-slate-900 md:ring-white ring-1 p-1 md:p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          충남삼성고
        </div>
      </Link>
    </div>
  );
}
