import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Header from "../components/header";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    창작물: [
      {
        id: 1,
        title: 'Android studio를 이용한 스트레스 해소 방법 추천 어플',
        researcher: '우승아 백승하'
      },
      {
        id: 2,
        title: "Unity를 사용한 Vurtual Physics Lab 구현",
        researcher: '이여명 권원재 전규진',
      },
      {
        id: 3,
        title: "실버세대를 위한 UI/UX 가이드라인을 바탕으로 기존 앱에 대한 적용 사례 분석 및 개선안 제시",
        researcher: '한소윤',
      },
      {
        id: 4,
        title: "Runway ML 및 P5.js를 사용한 StyleGAN 전환",
        researcher: '김민서',
      },
      {
        id: 5,
        title: "Android Studio를 이용한 청소년 토토 상담 자동 챗봇 어플",
        researcher: '이승주',
      },
      {
        id: 6,
        title: "단축키를 이용한 웹사이트 자동 이동",
        researcher: '심상현',
      },
      {
        id: 7,
        title: "학교 홍보 영상에서의 모션 그래픽(Motion Graphics) 활용 가능성 연구 - After Effects를 중심으로 -",
        researcher: '이효민',
      },
      {
        id: 8,
        title: "역사 학습을 위한 역사 체험 게임 제작",
        researcher: '변상빈 곽은규',
      },
      {
        id: 9,
        title: "unity를 이용한 학교 홍보 게임 제작",
        researcher: '정윤승 임진성 박유민',
      },
      {
        id: 10,
        title: "가정용 가스 중독사고 방지 장치계발",
        researcher: '김승원',
      },
      {
        id: 11,
        title: "3D 렌더링 기법 분석과 UE5를 통한 가상환경 구축 -Rasterizing과 Raytracing을 중심으로-",
        researcher: '윤기완',
      },
      {
        id: 12,
        title: "심 스와핑(SIM Swapping) 예방 앱 개발을 통한 SIM 보안 강화",
        researcher: '권하진',
      },
      {
        id: 13,
        title: "유니티를 활용한 2D 학교 홍보 게임 개발",
        researcher: '강태민 우성민',
      },
      {
        id: 14,
        title: "unity를 이용한 NPC 구현하기",
        researcher: '민채은',
      },
      {
        id: 15,
        title: "자연어 처리를 활용한 일기 감정 분석",
        researcher: '연수인 이은채',
      },
      {
        id: 16,
        title: "자연어처리와 딥러닝을 이용한 한글 문장 C언어 코드 변환 SW자율학습 플랫폼 개발에 관한 연구",
        researcher: '안철민 홍준혁',
      },
      {
        id: 17,
        title: "3D 그래픽을 활용한 가상공간 교실 만들기",
        researcher: '황성현',
      },
      {
        id: 18,
        title: "시각장애인을 위한 제품 정보 제공 서비스",
        researcher: '신혜원',
      },
      {
        id: 19,
        title: "원격제어 식물관리 애플리케이션 및 식물재배기 제작",
        researcher: '김시연',
      },
      {
        id: 20,
        title: "가속도 센서와 React Native를 활용한 거북목 예방 앱 개발",
        researcher: '박성철',
      },
      {
        id: 21,
        title: "So you've bought coffee... now what?",
        researcher: '2h ago',
      },
      {
        id: 22,
        title: "So you've bought coffee... now what?",
        researcher: '2h ago',
      },
    ],
    보고서: [
      {
        id: 1,
        title: 'CNN(합성곱 신경망)을 이용한 이미지 분류에 대한 연구',
        researcher: '김린우',
      },
      {
        id: 2,
        title: '추간판 탈출증에 대한 보존적 치료의 효과:체계적 문헌고찰 및 메타분석',
        researcher: '최현우',
      },
      {
        id: 3,
        title: '실제 영상 촬영 환경에서의 YOLO V7 기반 객체 탐지 정확도 향상에 관한 연구',
        researcher: '전현우',
      },
      {
        id: 4,
        title: '음성을 이용한 공포도 측정 및 범죄율 예방 방법',
        researcher: '권도연',
      },
    ],
    에세이: [
      {
        id: 1,
        title: 'BCI 기술의 보안 강화에 관한 연구',
        researcher: '김도임',
      },
      {
        id: 2,
        title: "Ai를 사용한 3D 모조 총기 테러 예방",
        researcher: '최은성',
      },
      {
        id: 3,
        title: "TextRank를 이용한 독서 지문 분석",
        researcher: '나우혁',
      },
      {
        id: 4,
        title: "AI와 빅데이터를 활용한 첨단의학 -sofrware 및 장단점을 중심으로-",
        researcher: '박민경',
      },
    ],
  })

  return (
    <div>
      <Head>
        <title>포스터</title>
      </Head>
      <Header/>
      <div className='w-screen bg-slate-900 flex flex-col justify-center items-center py-32'>

        <div className='font-bold text-4xl text-white'>포스터</div>
      </div>

      <div className='w-screen flex justify-center'>
        <div className="w-full max-w-md px-2 py-4 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-600/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-900 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
              >
                {category}
              </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.researcher}</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}