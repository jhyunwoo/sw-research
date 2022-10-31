import Link from "next/link";

export default function Header(){
    return (
        <div className={"flex w-screen justify-center items-center right-0 left-0 top-0 py-4 fixed justify-around bg-slate-900"}>
            <Link href={"/"}>
                <div className={"text-white"}>행사 정보</div>
            </Link>
            <Link href={"/poster"}>
                <div className={"text-white"}>발표 포스터</div>
            </Link>
            <Link href={"http://it.cnsa.hs.kr"}>
                <div className={"text-white"}>CNSA IT과정</div>
            </Link>
            <Link href={"https://cnsa.hs.kr"}>
                <div className={"text-white"}>충남삼성고</div>
            </Link>
        </div>
    )
}