import Link from 'next/link';
import Image from 'next/image';

export default function Team() {

    return(
             <>
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-5xl text-5xl font-bold text-center title-font text-gray-900 mb-2">운영진</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                    </div> 
                </div>
                <div class="flex flex-wrap -m-4 mb-20">
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                         <Image src='/img/해림.jpeg' className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4"
                            alt="jung"
                            width={300}
                            height={300}
                            objectFit="cover"/>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-semibold text-xl text-gray-900">정해림</h2>
                            <h3 class="text-gray-500 mb-3">총무</h3>
                            <p class="mb-1">2022 언론정보대학 정보사회미디어학과 주전공</p>
                            <p class="mb-4">2022 COWAY 스마트홈리더스클래스 ESG 지원사업 특별상 수상</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                         <Image src='/img/휘성.jpg' className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4"
                            alt="choi"
                            width={300}
                            height={320}
                            objectFit="cover"/>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-semibold text-xl text-gray-900">최휘성</h2>
                            <h3 class="text-gray-500 mb-3">기획부장</h3>
                            <p class="mb-1">2022 언론정보대학 정보사회미디어학과 주전공</p>
                            <p class="mb-1">2023 소프트웨어융합대학 ICT융합학부 미디어테크놀로지전공 다중전공</p>
                            <p class="mb-1">2022 정보사회미디어학과 학술제 커넥션 1팀 "POP!"팀원 (최우수상)</p>
                            <p class="mb-4"> 2023 정보사회미디어학과 학회 ‘시간을멈추는사람들’ 부반장</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                         <Image src='/img/소희.png' className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4"
                            alt="han"
                            width={280}
                            height={300}
                            objectFit="cover"/>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-semibold text-xl text-gray-900">한소희</h2>
                            <h3 class="text-gray-500 mb-3">홍보부장</h3>
                            <p class="mb-1">2021 언론정보대학 정보사회미디어학과 주전공</p>
                            <p class="mb-1">2022 경상대학 경영학부 다중전공</p>
                            <p class="mb-1">2022 한양대 에리카 공학교육혁신센터 학생기자단</p>
                            <p class="mb-1">2022 안산다문화작은도서관 SNS 및 홍보 담당</p>
                            <p class="mb-1">2022 멘토링 &교육 강연기부 봉사단 멘토</p>
                            <p class="mb-4">2023 콘텐츠 사업부 인턴</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                         <Image src='/img/숭기.jpg'  className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4" 
                            alt="kim"
                            width={260}
                            height={300}
                            objectFit="cover"/>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-semibold text-xl text-gray-900">김숭기</h2>
                            <h3 class="text-gray-500 mb-3">자료부장</h3>
                            <p class="mb-1">2018 언론정보대학 정보사회학과 주전공</p>
                            <p class="mb-1">2019 콘텐츠 학회 ICON 총무</p>
                            <p class="mb-1">2021 대한민국 육군 병장 만기 전역</p>
                            <p class="mb-1">2022 융합전공대학 신산업소프트웨어학과 다중전공</p>
                            <p class="mb-4">2022 정보사회미디어학과 학술제 커넥션 4팀 팀원 (대상)</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <Image src='/img/종운.png'  className="flex-shrink-0 rounded-lg w-48 h-48 sm:mb-0 mb-4" 
                            alt="keem"
                            width={340}
                            height={370}
                            objectFit="cover"/>
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-semibold text-xl text-gray-900">김종운</h2>
                            <h3 class="text-gray-500 mb-3">스터디부장</h3>
                            <p class="mb-1">2022 언론정보대학 정보사회미디어학과 주전공</p>
                            <p class="mb-4">2023 소프트웨어융합대학 ICT융합학부 미디어테크놀로지전공 다중전공</p>
                        </div>
                        </div>
                    </div>
                </div>
             </>
    );
}