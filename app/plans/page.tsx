"use client";
import Image from "next/image";
import NetflixTextLogo from "@/public/assets/Bg-Transparent Netflix Text Logo.png";
import { chooseNetflixPlan } from "@/utils/netflixPricePlan";
import Plan from "@/components/Plan";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";
import { signOut as signOutOfAccount } from "@/redux/features/UserSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

function page() {
  const [activeTab, setActiveTab] = useState(
    chooseNetflixPlan[0].title
  );
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const selectActiveTab = (title: string): void => {
    setActiveTab(title);
  };
  const router = useRouter();

  const signOutBtn = () => {
    setLoading(true);
    signOut(auth);
    dispatch(signOutOfAccount());
    router.push("/");
    setLoading(false);
  };
  return (
    <div className="flex flex-col pb-10 w-full">
      <nav className="flex items-center pr-3 -mt-3 md:-mt-5 justify-between border-b-2 border-gray-200 w-full">
        <div className="relative w-32 h-20 md:w-60 md:h-28">
          <Image
            src={NetflixTextLogo}
            alt="netflix-logo"
            fill
            className="object-contain "
          />
        </div>
        <button
          onClick={signOutBtn}
          className="text-gray-800 text-sm cursor-pointer font-semibold tracking-wider"
        >
          Sign Out
        </button>
      </nav>
      <div className="w-full max-w-7xl mx-auto flex flex-col px-5 sm:px-20 md:px-40 lg:px-5 space-y-7 mt-10">
        <h4 className="text-sm font-bold uppercase tracking-wide underline">
          NEXT STEP
        </h4>
        <h3 className="text-3xl/8 font-semibold tracking-wide text-gray-800">
          Choose the plan that's right for you
        </h3>
        <div className="w-full lg:hidden flex flex-col">
          <Tab.Group>
            <Tab.List className="grid grid-cols-2 sm:grid-cols-4 gap-3 place-content-center w-full">
              {chooseNetflixPlan.map((plan) => (
                <Tab
                  key={plan.title}
                  className={({ selected }) =>
                    `flex flex-col p-4 pb-8 h-28 outline-none rounded-xl border border-gray-400 ${
                      selected
                        ? `bg-gradient-to-br from-blue-900 ${plan.gradient} text-gray-100 `
                        : "bg-gray-100 text-gray-500"
                    }   font-semibold`
                  }
                >
                  <h3 className="text-base">
                    {plan.title}
                  </h3>
                  <h4 className="md:text-sm text-xs">
                    {plan.res}
                  </h4>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-3">
              {chooseNetflixPlan.map((plan) => (
                <Tab.Panel key={plan.title} className="">
                  <Plan plan={plan} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="hidden lg:flex flex-col mx-auto w-full">
          <div className="flex space-x-3 justify-center w-full">
            {chooseNetflixPlan.map((plan, indx) => (
              <Plan
                key={indx}
                plan={plan}
                onSelectTab={selectActiveTab}
                activeTab={activeTab}
              />
            ))}
          </div>
        </div>
        <p className="w-full text-sm font-medium mt-3 text-gray-700">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
          availability subject to your internet service and
          device capabilities. Not all content is available
          in all resolutions. See our{" "}
          <span className="text-blue-500">
            Terms of Use{" "}
          </span>
          for more details.
        </p>
        <p className="w-full text-sm font-medium mt-2 text-gray-700">
          Only people who live with you may use your
          account. Watch on 4 different devices at the same
          time with Premium, 2 with Standard, and 1 with
          Basic and Mobile.
        </p>
      </div>
      <div className="px-5 w-full">
        <button
          onClick={() => router.push("/profile-settings")}
          className="mt-8 w-full mx-auto flex items-center justify-center flex-grow max-w-96 py-5 rounded-sm text-gray-100 text-lg font-bold tracking-wide bg-[#E41B17] hover:opacity-80 duration-200 transition ease-in-out"
        >
          {loading ? (
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-200 rounded-full "
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </div>
  );
}

export default page;
