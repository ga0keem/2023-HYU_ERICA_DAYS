import Link from 'next/link';

export default function Curri() {
    return(
             <>
             <div  className="text-center mt-10 mb-20">
                <h1  className="sm:text-5xl text-5xl font-bold title-font text-gray-900 mb-6">정규세션</h1>
                <p  className="text-lg leading-relaxed mx-auto font-medium text-gray-500s">정규세션은 학기 중에 진행되며, 3단계로 나누어 데이터 분석의 전 과정을 학습하고 다양한 프로젝트를 수행합니다.</p>
                <div  className="flex mt-6 justify-center">
                    <div  className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
            </div>
            <div  className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div  className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div  className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <div  className="flex-grow">
                    <h2  className="text-gray-900 text-xl title-font font-semibold mb-3">데이터 정제</h2>
                    <p  className="leading-relaxed text-base">Python 기초 스터디, EDA 실습, EDA Wrap-up Proj</p>
                    </div>
                </div>
                <div  className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div  className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                    </div>
                    <div  className="flex-grow">
                    <h2  className="text-gray-900 text-xl title-font font-semibold mb-3">데이터 시각화</h2>
                    <p  className="leading-relaxed text-base">Tableau 기초 스터디, 시각화 실습, 대시보드 설계 및 디자인</p>
                    </div>
                </div>
                <div  className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div  className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div  className="flex-grow">
                    <h2  className="text-gray-900 text-xl title-font font-semibold mb-3">데이터 스토리텔링</h2>
                    <p  className="leading-relaxed text-base">Days Visualization Festival, 인사이트 도출 및 공유</p>
                    </div>
                </div>
            </div>
             </>
    );
}

