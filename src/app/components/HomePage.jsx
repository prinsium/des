import Image from "next/image";
import toothImg from "@/app/public/tooth.png";

export default function HomePage() {
  return (
    <div>
      <div className="w-full h-[80vh] flex flex-col rounded-3xl bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-6 pt-6 mb-4 overflow-hidden">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="w-full mb-16">
            <div className="flex flex-row justify-between items-baseline">
              <h1>Dental</h1>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700  
                font-medium rounded-full text-lg px-5 py-2.5 text-center "
              >
                Consult
              </button>
            </div>

            <div className="flex flex-row gap-3 items-baseline">
              <h1>Expert Solutions</h1>
              <div className="size-[2vw] rounded-full bg-blue-600"></div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start">
            <div className="max-w-sm ml-20">
              <p>
                We develop revolutionary technology with delivering quality
                healthcare through medical technology.
              </p>
            </div>

            <div className="flex justify-end translate-y-[20%]">
              <div className="relative flex justify-center items-center z-0 border-2 border-gray-50 size-[24vh] md:size-[24vw] rounded-full bg-slate-100">
                <div className="absolute z-10 border-2 border-gray-50 size-[20vh] md:size-[20vw] rounded-full bg-slate-100"></div>
                {/* <div className="absolute z-20 overflow-visible">
                        <Image className='size-[30vw]' src={toothImg} alt='Heart' width={500} height={500} />
                        </div> */}
              </div>
              <div className="hidden md:block">
                <p className="mr-2">/ EST 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-0">
        <div className="absolute z-20 left-3/4 right-0 -translate-x-[35%] -translate-y-[70%]">
          <Image
            className="size-[24vh] md:size-[24vw]"
            src={toothImg}
            alt="Heart"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-row bg-blue-600 rounded-2xl py-2 overflow-hidden">
        <div className="flex flex-row gap-3 whitespace-nowrap items-center animate-marquee">
          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h3>Get Your CheckUp Done</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
