import { FAQProps } from "@/utils/typings";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

function FAQDropdown({ data }: { data: FAQProps }) {
  const [showAnswer, setShowAnswer] =
    useState<boolean>(false);

  return (
    <div
      className="mx-auto w-full text-base md:text-lg lg:text-xl bg-neutral-800 tracking-wider"
      style={{ fontFamily: "Arial" }}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between bg-neutral-800 duration-200 transition px-5 py-6 ease-in-out text-left text-gray-100 hover:bg-neutral-700">
              <span>{data.question}</span>
              {open ? <XMarkIcon
                className={`h-7 w-7 text-gray-100`}
              /> : <PlusIcon
			  className={`h-7 w-7 text-gray-100`}
			/>}
            </Disclosure.Button>
            <Disclosure.Panel className="px-5 pb-5 pt-2 text-gray-100">
						  {data.answer1} {data.answer2 && <p className="block mt-3">{data.answer2}</p>}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default FAQDropdown;
