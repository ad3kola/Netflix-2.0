"use client";
import { useEffect } from "react";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import GetStarted from "@/components/GetStarted";
import Netflix from "@/components/Netflix";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { createUserAccount } from "@/redux/features/UserSlice";
import { UserCredentialsProps } from "@/utils/typings";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useAppSelector((state) => state.user.value.userData);
  const router = useRouter();
  useEffect(() => {
      onAuthStateChanged(auth, (userExists) => {
        if (userExists) {
          console.log(userExists)
          const userData = userExists
          console.log(userData);
          const userDetails: UserCredentialsProps = {
            email: userData?.email!,
            photoURL: ' ',
            uid: userData?.uid,
          }
          dispatch(createUserAccount(userDetails));
          router.push('/browse')
        }
      });

  }, []);
  return <div className ='overflow-hidden scrollbar-hide'>
    {!user ? <GetStarted /> : <Netflix />}
  </div>
}