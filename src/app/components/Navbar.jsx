export default function Navbar() {
  return (
    <div className="flex flex-row rounded-3xl bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 justify-between items-center mb-4">
        
        <button
        type="button"
        class="text-gray-900 font-medium rounded-full text-md px-5 py-2.5 flex flex-row"
      >
        DES
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
      </button>

      <div className="md:hidden">
      <button
        type="button"
        class="text-gray-900 font-medium rounded-full text-md px-5 py-2.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>
      </button>
      </div>

      <div className="hidden md:block flex flex-row max-w-md gap-2 justify-center items-center">
      <button
        type="button"
        class="text-gray-900 font-medium rounded-full text-md px-5 py-2.5"
      >
        technology
      </button>
      <button
        type="button"
        class="text-gray-900 font-medium rounded-full text-md px-5 py-2.5"
      >
        solutions
      </button>
      <button
        type="button"
        class="text-gray-900 font-medium rounded-full text-md px-5 py-2.5"
      >
        about
      </button>
      <button
        type="button"
        class="text-gray-900 bg-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-md px-5 py-2.5"
      >
        consult
      </button>
      </div>
    </div>
  );
}
