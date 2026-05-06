import Background from '@/components/Background';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Header with logo area */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden bg-[#CAC4D0]/8 z-10">
        <div className="h-[42px] flex items-center px-4">
          {/* Back button placeholder */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1" />
          {/* Logo */}
          <span className="text-[14px] font-bold text-[#1E1E1E]">Autofocus</span>
          <div className="flex-1" />
          {/* Settings icon placeholder */}
          <div className="w-10 h-10" />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="absolute left-0 right-0 bottom-[69px] flex flex-col items-center z-10 px-6"
        style={{ top: '84px' }}
      >
        <div className="w-full max-w-[320px] pt-8">
          {/* Title */}
          <h1 className="text-[28px] font-bold text-[#1E1E1E] text-center mb-8">
            Create Account
          </h1>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[48px] px-4 bg-[#CAC4D0]/20 rounded-[12px] text-[16px] text-[#1E1E1E] placeholder:text-[#1E1E1E]/50 outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[48px] px-4 bg-[#CAC4D0]/20 rounded-[12px] text-[16px] text-[#1E1E1E] placeholder:text-[#1E1E1E]/50 outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[48px] px-4 bg-[#CAC4D0]/20 rounded-[12px] text-[16px] text-[#1E1E1E] placeholder:text-[#1E1E1E]/50 outline-none"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-8">
            <button className="w-full h-[48px] bg-[#0077B6] rounded-[12px] text-[18px] font-bold text-white active:scale-[0.97] active:shadow-inner transition-all duration-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
}