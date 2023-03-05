import Link from 'next/link';

export default function Rrcru() {
    return(
             <>
             <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900">정보사회미디어학과 데이터 사이언스 학회</h1>
                <h1 className="title-font sm:text-9xl text-7xl mb-8 font-bold text-gray-900">DAYS</h1>
                <h1 className="title-font sm:text-5xl text-3xl mb-5 font-semibold text-gray-900">2023년도 학회원 모집</h1>
                <p className="mb-8 text-xl leading-relaxed">2023.3.6 월 ~ 2023.3.10 금</p>
                <div className="flex justify-center">
                    <Link href="https://forms.gle/BWQNddwnDxftxsqH9">
                        <a className="btn-project animate-bounce">
                            지원하러 가기
                        </a>
                    </Link>           
                </div>
             </div>
             </>
    );
}

