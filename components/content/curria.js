import Link from 'next/link';

export default function Curria() {
    return(
             <>      
                <div className="text-center mt-20 mb-20"> 
                    <h1 className="sm:text-5xl text-5xl font-bold text-center title-font text-gray-900 mb-6">자율세션</h1>
                    <p className="text-lg leading-relaxed mx-auto font-medium text-gray-500s">학기, 방학 중 학회원들의 의견을 수렴하여 자율세션을 진행합니다.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                    </div>
                </div>

                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">프로그래밍 언어 심화 스터디</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">데이터 분석 자격증 취득</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">데이터 분석 관련 공모전 출전</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">현직자 커리어 특강</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">알고리즘 심화 스터디</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-semibold">협업 포트폴리오 tool 활용법</span>
                        </div>
                    </div>
                </div>
             </>
    );
}