"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { UserCredentialsProps } from "@/utils/typings";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { createUserAccount } from "@/redux/features/UserSlice";

function page() {
  const userInfo: UserCredentialsProps | null =
    useAppSelector((state) => state.user.value.userData);
  const selectImageArray: string[] = [
    "/assets/default-img.png",
    "/assets/profile-image-1.png",
    "/assets/profile-image-2.png",
    "/assets/profile-image-3.png",
    "/assets/profile-image-4.png",
    "/assets/k-pop avatar.png",
    "/assets/lupin-avatar.png",
    "/assets/sonic-avatar.png",
    "/assets/wednesday-avatar.png",
    "/assets/squid-game-avatar.png",
  ];
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState<string>(
    "/assets/profile-image-1.png"
  );

  const makeImageActive = (img: string) => {
    setActiveImage(img);
  };
  const [loading, setLoading] = useState<boolean>(false)

  const updatedUserData: UserCredentialsProps = {
    email: userInfo?.email!,
    photoURL: activeImage,
    uid: userInfo?.uid!,
  };
  const redirectToHomePage = () => {
    setLoading(true)
    dispatch(createUserAccount(updatedUserData));
    router.push("/browse");
    setLoading(false)
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full mx-auto max-w-sm rounded-lg shadow bg-gray-800 space-y-3 p-5">
        <h3 className="text-sm text-gray-200 font-bold text-center ">
          Choose Profile Image
        </h3>
        {userInfo && (
          <div
            className="backdrop:
		flex flex-col items-center justify-center mx-auto"
          >
            <Image
              alt="user-img"
              src={activeImage}
              className="object-cover rounded-full"
              height={150}
              width={150}
            />
            <div className="grid grid-cols-5 place-content-center gap-4 py-3 mt-3">
              {selectImageArray.map((image, indx) => (
                <button
                  key={indx}
                  onClick={() => makeImageActive(image)}
                  className={`${
                    activeImage == image &&
                    "border-2 border-gray-100"
                  } outline-none border-none cursor-pointer`}
                >
                  <Image
                    src={image}
                    alt="img"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        <div
          className="flex flex-col items-center pb-10 space-y-2"
          style={{ fontFamily: "Bahnschrift" }}
        >
           <h2 className="text-gray-200 font-bold text-lg uppercase tracking-wider" style={{fontFamily: 'Bahnschrift'}}>
            {userInfo?.displayName}
          </h2>
          <h3 className="text-gray-300 font-semibold tracking-wider">
            {userInfo?.email}
          </h3>
          <div className="flex mt-4 md:mt-6 items-center space-x-3 justify-center">
            <button
              onClick={redirectToHomePage}
              className="flex items-center justify-center px-4 py-3 text-sm font-semibold tracking-wide text-center text-white bg-[#E41B17] rounded-lg hover:bg-red-600 w-28 whitespace-nowrap cursor-pointer duration-200 transition ease-in"
            >
              {loading ? <div
                      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-200 rounded-full "
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">
                        Loading...
                      </span>
                    </div> :'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
