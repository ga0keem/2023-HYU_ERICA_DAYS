import Link from 'next/link';
import Image from 'next/image'

export default function Men() {

    return(
             <>
                <div className="text-center mb-20"> 
                    <h1 className="sm:text-5xl text-5xl font-bold text-center title-font text-gray-900 mb-6">회장단</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-100 overflow-hidden">
                        <Image src='/img/gayeong.jpg' 
                            alt="content"
                            width={300}
                            height={300}/>
                        </div>
                        <h2 className="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3">회장 김가영</h2>
                        <p className="leading-relaxed text-base">2021언론정보대학 정보사회미디어학과 주전공<br/>
                            2022소프트웨어융합대학 ICT융합학부 미디어테크놀로지전공 다중전공<br/>
                            2022 프로그래밍 연합 동아리 '멋쟁이 사자처럼' 10기 프론트엔드<br/>
                            2022 Tintincreative 코딩학원 학원 강사<br/>
                            2023 소프트웨어융합대학 IXLAB 학부연구생 </p>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-100 overflow-hidden">
                        <Image src='/img/minseo.jpg' 
                            alt="content"
                            width={300}
                            height={300}/>
                        </div>
                        <h2 className="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3">부회장 김민서</h2>
                        <p className="leading-relaxed text-base">2022언론정보대학 정보사회미디어학과 주전공<br/>
                            2023소프트웨어융합대학 컴퓨터학부 다중전공<br/>
                            2022 SID Audition IT 기술 기반 창업팀 페더블 대표 (SID상)<br/>
                            2022 대학연합창업캠프 메타버스 창업팀 팀원 (3위)<br/>
                            2022 스마트홈리더스클래스 COWAY ESG 경영 기획 제안 PT (3위)</p>
                    </div>
                </div>
             </>
    );
}
