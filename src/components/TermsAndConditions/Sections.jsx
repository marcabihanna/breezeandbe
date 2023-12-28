"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sections = () => {
  const sections = [
    {
      id: "section 1",
      title: "ONLINE STORE TERMS",
      text: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.",
    },
  ];
  const [selectedSection, setSelectedSection] = useState(sections[0].id);
  return (
    <>
      {sections.map((section, index) => {
        return (
          <>
            {selectedSection == section.id && (
              <div key={index} className="flex flex-col space-y-5">
                <div className="relative w-fit flex items-center space-x-3 group">
                  <h2 className="font-bold uppercase cursor-pointer">
                    {section.id}
                  </h2>
                  <IoIosArrowDown className="cursor-pointer text-[20px] rotate-180 group-hover:rotate-0 transition-all duration-100 ease-linear" />
                  <div className="hidden group-hover:flex space-x-5 absolute bg-secondaryColor p-2 top-6 min-w-max text-[12px] select-none cursor-pointer">
                    <div className="grid grid-cols-2 space-x-1">
                      {sections?.map((one) => {
                        return (
                          <span
                            key={one?.id}
                            onClick={() => setSelectedSection(one?.id)}
                            className={`${
                              selectedSection == one?.id
                                ? "text-mainColor"
                                : "text-gray-400"
                            }`}
                          >
                            {one?.id}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-medium">{section.title}</h2>
                  <div>{section.text}</div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Sections;
