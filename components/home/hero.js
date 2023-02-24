import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return(
             <>
             <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-4xl mb-3 font-semibold text-gray-900">DAYS <br/> DATA ANALYSIS SOCIETY</h1>
                <h1 className="title-font sm:text-xl mb-4 font-medium text-gray-900">한양대학교 ERICA 언론정보대학 정보사회미디어학과의 데이터 사이언스 학회 입니다.</h1>
                <p className="mb-8 leading-relaxed">
                DAYS는 사회과학 영역에서의 데이터 분석을 근간으로 하여, <br/>데이터 분석을 통해 다양한 사회 이슈 또는 미디어 현상을 향한 통찰력을 강화하는 것을 목표로 합니다. <br/>또한 DAYS는, 정보사회미디어학과가 추구하는 데이터 저널리즘, 데이터 사이언스 분야의 인재 육성에 발 맞추어, <br/>학생 주도적 스터디와 다양한 프로젝트를 진행하며 구성원들의 전공 소양 향상 및 실무적 능력 함양에 <br/>기여하고자 합니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/recruiting">
                        <a className="btn-project">
                            모집 공고 보러가기 
                        </a>
                    </Link>           
                </div>
            </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation/>
                </div>
             </>
    );
}