import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "flex w-screen items-center right-0 left-0 bottom-0 py-4 fixed justify-around bg-slate-900"
      }
    >
      <Link href={"/"}>
        <div
          className={
            "text-white ring-white ring-1 p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          행사 정보
        </div>
      </Link>
      <Link href={"/poster"}>
        <div
          className={
            "text-white ring-white ring-1 p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          발표 포스터
        </div>
      </Link>
      <Link href={"http://it.cnsa.hs.kr"}>
        <div
          className={
            "text-white ring-white ring-1 p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          CNSA IT과정
        </div>
      </Link>
      <Link href={"https://cnsa.hs.kr"}>
        <div
          className={
            "text-white ring-white ring-1 p-2 rounded-lg hover:bg-slate-800 transition duration-300"
          }
        >
          충남삼성고
        </div>
      </Link>
    </div>
  );
}
