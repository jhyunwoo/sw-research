import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    창작물: [
      {
        id: 1,
        title: 'React Native와 가속도 센서를 활용한 거북목 예방 앱',
        researcher: '박성철'
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        researcher: '2h ago',
      },
    ],
    보고서: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        researcher: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        researcher: 'Mar 19',
      },
    ],
    에세이: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        researcher: '2d ago',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        researcher: '4d ago',
      },
    ],
  })

  return (
    <div>
      <Head>
        <title>포스터</title>
      </Head>
      <div className='w-screen bg-slate-900 flex flex-col justify-center items-center'>
        <div>
          <Link href="/">
            <div>2022 소프트웨어 과제연구 발표회</div>
          </Link>
        </div>
        <div className='font-bold text-4xl text-white'>포스터</div>
      </div>

      <div className='w-screen flex justify-center items-center'>
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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