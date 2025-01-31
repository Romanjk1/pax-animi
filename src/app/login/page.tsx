'use client'

import { useWixClient } from '@/hooks/useWixClient'
import { LoginState } from '@wix/sdk'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useState } from 'react'

enum MODE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const LoginPage = () => {
  const wixClient = useWixClient()
  const router = useRouter()

  const isLoggedIn = wixClient.auth.loggedIn()

  if (isLoggedIn) {
    router.push('/')
  }

  const [mode, setMode] = useState(MODE.LOGIN)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const formTitle =
    mode === MODE.LOGIN
      ? 'Log in'
      : mode === MODE.REGISTER
      ? 'Create Account'
      : mode === MODE.RESET_PASSWORD
      ? 'Reset Your Password'
      : 'Verify Your Email'

  const buttonTitle =
    mode === MODE.LOGIN
      ? 'Login'
      : mode === MODE.REGISTER
      ? 'Register'
      : mode === MODE.RESET_PASSWORD
      ? 'Reset'
      : 'Verify'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      let response

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password,
          })
          break
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          })
          break
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          )
          setMessage('Password reset email sent. Please check your e-mail.')
          break
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          })
          break
        default:
          break
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage('Successful! You are being redirected.')
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken!
          )

          Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken), {
            expires: 2,
          })
          wixClient.auth.setTokens(tokens)
          router.push('/')
          break
        case LoginState.FAILURE:
          if (
            response.errorCode === 'invalidEmail' ||
            response.errorCode === 'invalidPassword'
          ) {
            setError('Invalid email or password!')
          } else if (response.errorCode === 'emailAlreadyExists') {
            setError('Email already exists!')
          } else if (response.errorCode === 'resetPassword') {
            setError('You need to reset your password!')
          } else {
            setError('Something went wrong!')
          }
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION)
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage('Your account is pending approval')
        default:
          break
      }
    } catch (err) {
      console.log(err)
      setError('Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-[35px] font-bold tracking-[0.025em] leading-[1.1]">
          {formTitle}
        </h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-black font-bold mb-[10px] tracking-[0.025em] leading-[1.1]">
              First Name
            </label>
            <input
              type="text"
              name="username"
              className="border-solid border-[1px] border-black w-full py-[8px] px-[10px]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-black font-bold mb-[10px] tracking-[0.025em] leading-[1.1]">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-solid border-[1px] border-black w-full py-[8px] px-[10px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="border-solid border-[1px] border-black w-full py-[8px] px-[10px]"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-black font-bold mb-[10px] tracking-[0.025em] leading-[1.1] ">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-solid border-[1px] border-black w-full py-[8px] px-[10px]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="bg-black w-full text-white p-2 disabled:bg-gray-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  )
}

export default LoginPage
