import { getServerSession } from 'next-auth'
import { LoginWidget } from '../components/LoginWidget'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'

const fetchUserLoggedinStatus = async () => {
  const session = await getServerSession(authOptions)

  const user = session?.user

  return {
    isUserLoggedIn: Boolean(user),
  }
}

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isUserLoggedIn } = await fetchUserLoggedinStatus()
  return (
    <>
      {!isUserLoggedIn && <LoginWidget />}

      <div className="w-full max-w-2xl mx-auto px-3 md:px-6 gap-3 pt-16 pb-8">
        {children}
      </div>

      <footer className="w-full max-w-2xl mx-auto text-center py-6 border-t border-gray-200">
        <Link href="/" className="flex flex-col items-center">
          <span className="text-system-label-secondary/50 text-xs">
            Powered by onedash
          </span>
          <svg viewBox="0 0 196 240" width={20} fill="none" className="mt-4">
            <path
              fill="#000"
              fillOpacity={0.1}
              fillRule="evenodd"
              d="M76.4539 239.092C142.477 239.092 196 185.57 196 119.546 196 53.5226 142.477 0 76.4539 0v43.0922C34.2296 43.0922.0000037 77.3217 0 119.546-.0000037 161.77 34.2296 196 76.4539 196v43.092ZM76.454 196c42.224 0 76.454-34.23 76.454-76.454 0-42.2242-34.23-76.4538-76.454-76.4538V196Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </footer>
    </>
  )
}
