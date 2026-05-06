import Link from "next/link";

const fieldClass =
  "mt-2 h-10 w-full rounded-[9px] border border-[#A3ADC2] px-3 text-[15px] text-[#0F172A] outline-none placeholder:text-[#A3ADC2] focus:border-[#0077B6] focus:ring-2 focus:ring-[#CAF0F8]";

export default function RegisterPage() {
  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center">
        <section className="text-center">
          <h1 className="text-[68px] font-black leading-none tracking-[-0.06em] text-[#031B77]">
            AutoFocus
          </h1>
          <p className="mt-1 text-[18px] text-[#8FA0C2]">Stop scrolling. Start Focusing.</p>
        </section>

        <form className="mt-20 space-y-5">
          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="register-email">
              Email
            </label>
            <input
              id="register-email"
              type="email"
              placeholder="youremail@gmail.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="register-password">
              Password
            </label>
            <input
              id="register-password"
              type="password"
              placeholder="Password"
              className={fieldClass}
            />
          </div>

          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              className={fieldClass}
            />
          </div>

          <button
            type="submit"
            className="h-[48px] w-full rounded-[10px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6]"
          >
            Register
          </button>
        </form>

        <p className="mt-3 text-center text-[14px] text-[#1F2937]">
          Already have an account?{" "}
          <Link href="/" className="text-[#0077B6] underline underline-offset-2">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
