import { useState } from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Header from "../components/header";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    창작물: [
      {
        id: 1,
        title: "Android studio를 이용한 스트레스 해소 방법 추천 어플",
        researcher: "우승아 백승하",
        poster: "보고서01",
      },
      {
        id: 2,
        title: "Unity를 사용한 Vurtual Physics Lab 구현",
        researcher: "이여명 권원재 전규진",
        poster: "보고서02",
      },
      {
        id: 3,
        title:
          "실버세대를 위한 UI/UX 가이드라인을 바탕으로 기존 앱에 대한 적용 사례 분석 및 개선안 제시",
        researcher: "한소윤",
        poster: "보고서03",
      },
      {
        id: 4,
        title: "Runway ML 및 P5.js를 사용한 StyleGAN 전환",
        researcher: "김민서",
        poster: "보고서04",
      },
      {
        id: 5,
        title: "Android Studio를 이용한 청소년 토토 상담 자동 챗봇 어플",
        researcher: "이승주",
        poster: "보고서05",
      },
      {
        id: 6,
        title: "단축키를 이용한 웹사이트 자동 이동",
        researcher: "심상현",
        poster: "보고서06",
      },
      {
        id: 7,
        title:
          "학교 홍보 영상에서의 모션 그래픽(Motion Graphics) 활용 가능성 연구 - After Effects를 중심으로 -",
        researcher: "이효민",
        poster: "보고서07",
      },
      {
        id: 8,
        title: "역사 학습을 위한 역사 체험 게임 제작",
        researcher: "변상빈 곽은규",
        poster: "보고서08",
      },
      {
        id: 9,
        title: "unity를 이용한 학교 홍보 게임 제작",
        researcher: "정윤승 임진성 박유민",
        poster: "보고서09",
      },
      {
        id: 10,
        title: "가정용 가스 중독사고 방지 장치계발",
        researcher: "김승원",
        poster: "보고서10",
      },
      {
        id: 11,
        title:
          "3D 렌더링 기법 분석과 UE5를 통한 가상환경 구축 -Rasterizing과 Raytracing을 중심으로-",
        researcher: "윤기완",
        poster: "보고서11",
      },
      {
        id: 12,
        title: "심 스와핑(SIM Swapping) 예방 앱 개발을 통한 SIM 보안 강화",
        researcher: "권하진",
        poster: "보고서12",
      },
      {
        id: 13,
        title: "유니티를 활용한 2D 학교 홍보 게임 개발",
        researcher: "강태민 우성민",
        poster: "보고서13",
      },
      {
        id: 14,
        title: "unity를 이용한 NPC 구현하기",
        researcher: "민채은",
        poster: "보고서14",
      },
      {
        id: 15,
        title: "자연어 처리를 활용한 일기 감정 분석",
        researcher: "연수인 이은채",
        poster: "보고서15",
      },
      {
        id: 16,
        title:
          "자연어처리와 딥러닝을 이용한 한글 문장 C언어 코드 변환 SW자율학습 플랫폼 개발에 관한 연구",
        researcher: "안철민 홍준혁",
        poster: "보고서16",
      },
      {
        id: 17,
        title: "3D 그래픽을 활용한 가상공간 교실 만들기",
        researcher: "황성현",
        poster: "보고서17",
      },
      {
        id: 18,
        title: "시각장애인을 위한 제품 정보 제공 서비스",
        researcher: "신혜원",
        poster: "보고서18",
      },
      {
        id: 19,
        title: "원격제어 식물관리 애플리케이션 및 식물재배기 제작",
        researcher: "김시연",
        poster: "보고서19",
      },
      {
        id: 20,
        title: "가속도 센서와 React Native를 활용한 거북목 예방 앱 개발",
        researcher: "박성철",
        poster: "보고서20",
      },
      {
        id: 21,
        title: "머신러닝을 이용한 분리수거 도움 어플",
        researcher: "김혜우",
        poster: "보고서21",
      },
      {
        id: 22,
        title: "가상현실 기반 충남삼성고 모의 면접 시뮬레이션 제작",
        researcher: "이준화",
        poster: "보고서22",
      },
    ],
    보고서: [
      {
        id: 1,
        title: "CNN(합성곱 신경망)을 이용한 이미지 분류에 대한 연구",
        researcher: "김린우",
        poster: "보고서01",
      },
      {
        id: 2,
        title:
          "추간판 탈출증에 대한 보존적 치료의 효과:체계적 문헌고찰 및 메타분석",
        researcher: "최현우",
        poster: "",
      },
      {
        id: 3,
        title:
          "실제 영상 촬영 환경에서의 YOLO V7 기반 객체 탐지 정확도 향상에 관한 연구",
        researcher: "전현우",
        poster: "보고서02",
      },
      {
        id: 4,
        title: "음성을 이용한 공포도 측정 및 범죄율 예방 방법",
        researcher: "권도연",
        poster: "보고서03",
      },
      {
        id: 5,
        title:
          "Face Dection의 정확도에 대한 연구와 가상 출석 시스템 구현에 대한 제언",
        researcher: "안관영 김다인",
        poster: "보고서04",
      },
      {
        id: 6,
        title: "물가를 예측해서 인플레이션 피해를 막을 수 있을까",
        researcher: "허준영",
        poster: "보고서05",
      },
      {
        id: 7,
        title:
          "웹 크롤링을 통한 언론 보도 편향성 조사 -경찰청 범죄 통계와의 비교를 중심으로-",
        researcher: "임서진",
        poster: "보고서06",
      },
      {
        id: 8,
        title: "카카오뱅크에 포함된 IT 기술요소 분석",
        researcher: "문승주",
        poster: "보고서07",
      },
      {
        id: 9,
        title:
          "Obstacle Avoidance for Autonomous Driving with Deep Reinforcement Learning",
        researcher: "김연준",
        poster: "보고서08",
      },
    ],
    에세이: [
      {
        id: 1,
        title: "BCI 기술의 보안 강화에 관한 연구",
        researcher: "김도임",
        poster: "",
      },
      {
        id: 2,
        title: "Ai를 사용한 3D 모조 총기 테러 예방",
        researcher: "최은성",
        poster: "에세이01",
      },
      {
        id: 3,
        title: "TextRank를 이용한 독서 지문 분석",
        researcher: "나우혁",
        poster: "에세이02",
      },
      {
        id: 4,
        title:
          "AI와 빅데이터를 활용한 첨단의학 -sofrware 및 장단점을 중심으로-",
        researcher: "박민경",
        poster: "에세이03",
      },
      {
        id: 5,
        title: "필터버블(Filter Bubble), 발생 원인과 치명적 오류",
        researcher: "서장원",
        poster: "에세이04",
      },
    ],
  });
  const [type, setType] = useState("product");

  return (
    <div>
      <Head>
        <title>포스터</title>
      </Head>
      <Header />
      <div className="w-screen bg-slate-900 flex flex-col justify-center items-center py-32">
        <div className="font-bold text-4xl text-white">포스터</div>
      </div>
      <div>
        <div className="flex justify-around p-2 ">
          <div
            className={`${
              type === "product"
                ? "bg-slate-900 text-slate-50"
                : "bg-slate-100 text-slate-900"
            } px-6 py-3 rounded-xl basis-1/3 text-center mx-2`}
            onClick={() => setType("product")}
          >
            창작물
          </div>
          <div
            className={`${
              type === "research"
                ? "bg-slate-900 text-slate-50"
                : "bg-slate-100 text-slate-900"
            } px-6 py-3 rounded-xl basis-1/3 text-center mx-2`}
            onClick={() => setType("research")}
          >
            보고서
          </div>
          <div
            className={`${
              type === "assay"
                ? "bg-slate-900 text-slate-50"
                : "bg-slate-100 text-slate-900"
            } px-6 py-3 rounded-xl basis-1/3 text-center mx-2`}
            onClick={() => setType("assay")}
          >
            에세이
          </div>
        </div>
      </div>
    </div>
  );
}
