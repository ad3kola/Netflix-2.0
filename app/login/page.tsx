"use client";
import NetflixBanner from "@/public/assets/netflix-banner-img1.png";
import NetflixTextLogo from "@/public/assets/Bg-Transparent Netflix Text Logo.png";
import Image from "next/image";
import { footerLinks } from "@/utils/getstarted";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { MouseEvent, useState } from "react";
import { auth } from "@/firebase.config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { createUserAccount, signOut } from "@/redux/features/UserSlice";
import { UserCredentialsProps } from "@/utils/typings";
import PasswordStrengthBar from "react-password-strength-bar";
import { useRouter } from "next/navigation";

function page() {
  const [userNameInput, setUserNameInput] =
    useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [emailPasswordInput, setEmailPasswordInput] =
    useState<string>("");
  const [createUser, setCreateUser] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const password = emailPasswordInput;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }
  const randomNumber = generateRandomNumber();

  const generateEmailAddress = () => {
    const generatedEmail = userNameInput
      .replace(/\s/g, "")
      .toLowerCase();
    setEmailInput(
      `${generatedEmail}${randomNumber}@gmail.com`
    );
  };
  const handleCreateUser = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
  console.log('Creating User')
    setLoading(true);
    await createUserWithEmailAndPassword(auth, emailInput, emailPasswordInput)
        .then((userCredential) => {
          console.log(userCredential)
            const user = userCredential?.user;
            console.log(user);
            const userDetails: UserCredentialsProps = {
              email: user?.email ?? ' ',
              photoURL: '',
              uid: user?.uid ?? ' ',
            }
            console.log(userDetails)
            dispatch(createUserAccount(userDetails));
            router.push("/plans");
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
        setLoading(false);
    } 
  const handleSignIn = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setLoading(true)
    await signInWithEmailAndPassword(auth, emailInput, emailPasswordInput)
    .then((userCredential) => {
        const user = userCredential?.user;
        console.log(user);
        const userDetails: UserCredentialsProps = {
          email: user?.email ?? ' ',
          photoURL: '/assets/sonic-avatar.png',
          uid: user?.uid ?? ' ',
        }
        dispatch(createUserAccount(userDetails));
        router.push("/browse");
    })
    .catch((error) => {
        console.log(error.code, error.message);
    });
    setLoading(false);
  };
  
  return (
    <section className="relative w-full min-h-screen bg-black sm:bg-transparent">
      <div className="absolute -z-10 w-full h-full left-0 top-0 right-0 bottom-0">
        <Image
          src={NetflixBanner}
          alt="Netflix-Banner"
          fill
          className="object-cover filter brightness-[40%]"
        />
      </div>
      <div className="h-full mx-auto z-20 w-full flex flex-col ">
        <nav className="max-w-6xl mx-auto w-full px-2 flex -mt-4 items-center justify-between">
          <Link href={"/"}>
            <div className="relative w-32 md:w-60 h-32 cursor-pointer  flex-shrink-0">
              <Image
                src={NetflixTextLogo}
                alt="netflix-logo"
                fill
                className="object-contain filter brightness-[150%]"
              />
            </div>
          </Link>
        </nav>
        <main className="flex flex-grow flex-col items-start justify-center h-full w-full border-b-2 sm:border-none sm:border-b-0 sm:border-transparent border-neutral-700">
          <div className="w-full sm:max-w-[480px] bg-black/80 md:h-screen flex-grow text-gray-100 -mt-9 px-6 sm:-mt-2 sm:p-6 mx-auto sm:px-[60px] pb-10 space-y-2">
            <h2
              className="md:text-3xl text-2xl mt-5 tracking-wider"
              style={{ fontFamily: "Arial Black" }}
            >
              {createUser
                ? "Create New Account"
                : "Sign into Existing Account"}
            </h2>
            <form className="mt-4 flex flex-col items-start w-full">
              {createUser && (
                <input
                  required
                  type="text"
                  value={userNameInput}
                  onChange={(evt) =>
                    setUserNameInput(evt.target.value)
                  }
                  className="w-full rounded-md text-sm font-normal text-gray-100 mt-4 px-3 py-4 placeholder:text-gray-200 placeholder:text-sm border border-neutral-500 bg-neutral-800 bg-opacity-60 focus:rounded-md focus:outline-neutral-100"
                  placeholder="Create Username"
                />
              )}
              <input
                required
                type="email"
                value={emailInput}
                onChange={(evt) =>
                  setEmailInput(evt.target.value)
                }
                className="w-full rounded-md text-sm font-normal text-gray-100 mt-4 px-3 py-4 placeholder:text-gray-200 placeholder:text-sm border border-neutral-500 bg-neutral-800 bg-opacity-60 focus:rounded-md focus:outline-neutral-100"
                placeholder="Email or phone number"
              />
              {createUser && userNameInput && (
                <p
                  onClick={generateEmailAddress}
                  className="text-sm font-medium cursor-pointer text-gray-400 hover:text-gray-300  mt-1 ml-2"
                >
                  Click to generate email
                </p>
              )}
              <input
                required
                type="password"
                value={emailPasswordInput}
                onChange={(evt) =>
                  setEmailPasswordInput(evt.target.value)
                }
                className="w-full rounded-md text-sm font-normal text-gray-100 mt-4 px-3 py-4 placeholder:text-gray-200 placeholder:text-sm border border-neutral-500 bg-neutral-800 bg-opacity-60 focus:rounded-md focus:outline-neutral-100"
                placeholder="Password"
              />
              {emailPasswordInput && (
                <PasswordStrengthBar
                  password={password}
                  className="mt-3 w-1/2"
                  minLength={8}
                />
              )}
              {createUser ? (
                <button
                  disabled={
                    !userNameInput ||
                    !emailInput ||
                    !emailPasswordInput
                  }
                  type="submit"
                  onClick={handleCreateUser}
                  className="mt-4 bg-red-600 text-gray-100 text-sm font-semibold tracking-wide hover:bg-red-500 w-full duration-100 p-3 transition ease-in rounded-md"
                >
                  {loading ? (
                    <div
                      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-200 rounded-full "
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">
                        Loading...
                      </span>
                      
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              ) : (
                <button
                  disabled={
                    !emailInput ||
                    !emailPasswordInput
                  }
                  type="submit"
                  onClick={handleSignIn}
                  className="mt-4 bg-red-600 text-gray-100 text-sm font-semibold tracking-wide hover:bg-red-500 w-full duration-100 p-3 transition ease-in rounded-md"
                >
                  {loading ? (
                     <div
                     className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-200 rounded-full "
                     role="status"
                     aria-label="loading"
                   >
                     <span className="sr-only">
                       Loading...
                     </span>
                     
                   </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              )}
              <p className="mt-4 text-sm hover:underline duration-100 transition ease-in-out text-gray-200 hover:text-gray-400 cursor-pointer">
                Forgot password?
              </p>
              <div className="flex flex-col mt-20 text-sm">
                <div className="w-full flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    className="accent-red-500 w-4 h-4 rounded-xl  cursor-pointer"
                  />
                  <span>Remember me</span>
                </div>
                <p className="font-light mt-3 text-gray-300">
                  {!createUser
                    ? "New to Netflix?"
                    : "Already have an account?"}
                  <span
                    onClick={() =>
                      setCreateUser((prev) => !prev)
                    }
                    className="font-bold tracking-wide text-gray-100 cursor-pointer hover:underline ml-2"
                  >
                    {!createUser
                      ? "Sign up now"
                      : "Sign In"}
                  </span>
                </p>
                <p className="text-xs mt-3 leading-6 text-gray-400">
                  This page is protected by Google reCAPTCHA
                  to ensure you're not a bot.{" "}
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    Learn more.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </main>
        <footer className="w-full mt-10 bg-black sm:bg-black/80">
          <div className="max-w-6xl relative mx-auto w-full pt-16 pb-20 flex flex-col px-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {footerLinks.map((link, indx) => (
                <Link
                  className="whitespace-nowrap text-gray-300 text-xs underline tracking-wider"
                  key={indx}
                  href={`/${link
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {link}
                </Link>
              ))}
            </div>
            <p
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-300 text-center text-sm font-medium tracking-wider"
              style={{ fontFamily: "Bahnschrift" }}
            >
              &copy; Copyright 2022
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
export default page;
