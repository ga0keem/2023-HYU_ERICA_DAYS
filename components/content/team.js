import Link from 'next/link';
import Image from 'next/image'

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
                        
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                            <h3 class="text-gray-500 mb-3">총무</h3>
                            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                            <h3 class="text-gray-500 mb-3">기획부장</h3>
                            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                            <h3 class="text-gray-500 mb-3">홍보부장</h3>
                            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                            <h3 class="text-gray-500 mb-3">자료부장</h3>
                            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                            <h3 class="text-gray-500 mb-3">스터디부장</h3>
                            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                        </div>
                        </div>
                    </div>
                </div>
             </>
    );
}