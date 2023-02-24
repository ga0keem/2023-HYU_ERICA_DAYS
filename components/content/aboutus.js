import Link from 'next/link';

export default function AboutUs() {
    return(
             <>
             <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-5xl text-5xl mb-10 font-bold text-gray-900">About Us</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">데이즈는 사회를 데이터로 바라보며, 경쟁력 있는 Data Analyst가 되고자,<br/> 
                함께 성장하는 데이터 사이언스 학회입니다.</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">데이터 정제, 시각화, 스토리텔링 등 데이터 분석의 전반적인 과정을 기초부터 학습합니다.</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">EDA Wrap-up, D.V.F, 현업인 특강 등 다양한 프로젝트와 외부 대회에 참여하며 실전 경험을 쌓습니다.</h1>
             </div>

             <div className="text-center lg:w-2/3 w-full mt-40 mb-40">
                <h1 className="title-font sm:text-5xl text-5xl mb-10 font-bold text-gray-900">Goals</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">정보사회미디어학과가 추구하는 데이터 저널리즘, 데이터 사이언스 분야의 인재 육성에 발 맞추어, 학회원들의 전공 소양 향상 및 실무적 능력 함양에 기여</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">데이터 분석을 통해 다양한 사회 이슈 또는 미디어 현상을 향한 통찰력을 강화하는 것을 목표</h1>
                <h1 className="title-font sm:text-xl text-xl mb-5 font-medium text-gray-900">학회원들의 주도적 스터디와 다양한 프로젝트를 진행하며 개개인의 성장에 실질적인 도움이 될 수 있는 커뮤니티</h1>
             </div>
             </>
    );
}
