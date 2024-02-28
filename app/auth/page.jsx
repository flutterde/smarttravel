import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"


export default function Auth() {
  return (
    <div className="p-6 min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">     
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-6">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a className="font-medium text-indigo-600 hover:text-indigo-500 " href="#">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <Input
                  autoComplete="email"
                  className="appearance-none block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  type="email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <Input
                  autoComplete="current-password"
                  className="appearance-none block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Button
                className="w-full flex justify-center py-2 px-4 border border-gray-200 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-800"
                type="submit">
                Sign in
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex justify-center mb-6">
                <SignInButton mode="modal">
                  <Button className="w-full inline-flex justify-center py-2 px-4 border  border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800">
                    <ChromeIcon className="w-4 h-4 text-gray-500" />
                  </Button>
                 </SignInButton>
               </div>
              <div>
                <Button
                  className="w-full inline-flex justify-center py-2 px-4 border  border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800"
                  variant="outline">
                  <FacebookIcon className="h-5 w-5 text-blue-600" />
                  <span className="sr-only">Sign in with Facebook</span>
                </Button>
              </div>
              <div>
                <Button
                  className="w-full inline-flex justify-center py-2 px-4 border  border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800"
                  variant="outline">
                  <TwitterIcon className="h-5 w-5 text-blue-400" />
                  <span className="sr-only">Sign in with Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}


function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}


function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}




