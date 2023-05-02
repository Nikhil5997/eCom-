/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiTwotoneBell } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

export default function Catelog() {
  return (
    <div>
      <div className=" h-20 bg-red-600 w-full">
        <nav>
          <ul className="flex justify-end  space-x-9 ">
            <li className="text-l uppercase text-white font-mono cursor-pointer">
              D-Mart
            </li>
            <li className="text-gray-300  cursor-pointer leading-9">
              <span className="relative inline-block">
                <svg
                  className="w-6 h-6 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-900 transform translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full">
                  99
                </span>
              </span>
            </li>
            <li className="text-gray-300  cursor-pointer ">
              <AiTwotoneBell size={30} />
            </li>
            <li className="text-gray-300  cursor-pointer ">
              <RiArrowRightCircleFill size={30} />
            </li>
            <li className=" uppercase text-white font-mono cursor-pointer font-bold">
              Logout
            </li>

            <li className="text-gray-300  cursor-pointer ">
              <AiOutlineMenuFold size={30} />
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
      <div className=" bg-gray-100 h-24 w-full ">
        <p className="text-3xl font-serif mx-6  inline">Products grid</p>
        <ul className="flex justify-end space-x-8">
          <li>
            <button className="uppercase border-red-700 bg-red-600 text-white text-l h-9 w-40">
              track listing
            </button>
          </li>
          <li>
            {" "}
            <button className="uppercase border-red-700 bg-red-600 text-white text-l h-9 w-40">
              add product
            </button>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[18%] mx-6 rounded-lg shadow-md lg:max-w-sm mb-6 lg:mb-0">
            <img
              className="object-cover  my-2 h-48"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight ">Jacket</h4>
              <div className="flex">
                <AiFillStar /> <AiFillStar />
              </div>
              <div className="flex">
                <del>₹1200</del>
                <span className="ml-2">₹1999</span>
                <button className="border border-gray-700 rounded mx-6 text-sm h-6 w-15">
                  20% OFF
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[18%] mx-6 rounded-lg shadow-md lg:max-w-sm mb-6 lg:mb-0">
            <img
              className="object-cover w-full  my-2 h-48"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight ">Jacket</h4>
              <div className="flex">
                <AiFillStar /> <AiFillStar />
              </div>
              <div className="flex">
                <del>₹1200</del>
                <span className="ml-2">₹1999</span>
                <button className="border border-gray-700 rounded mx-6 text-sm h-6 w-15">
                  20% OFF
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[18%] mx-6 rounded-lg shadow-md lg:max-w-sm mb-6 lg:mb-0">
            <img
              className="object-cover w-full  my-2 h-48"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight ">Jacket</h4>
              <div className="flex">
                <AiFillStar /> <AiFillStar />
              </div>
              <div className="flex">
                <del>₹1200</del>
                <span className="ml-2">₹1999</span>
                <button className="border border-gray-700 rounded mx-6 text-sm h-6 w-15">
                  20% OFF
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[18%] mx-6 rounded-lg shadow-md lg:max-w-sm">
            <img
              className="object-cover w-full  my-2 h-48"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight ">Jacket</h4>
              <div className="flex">
                <AiFillStar /> <AiFillStar />
              </div>
              <div className="flex">
                <del>₹1200</del>
                <span className="ml-2">₹1999</span>
                <button className="border border-gray-700 rounded mx-6 text-sm h-6 w-15">
                  20% OFF
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[18%] mx-6 rounded-lg shadow-md lg:max-w-sm my-6">
            <img
              className="object-cover w-full  my-2 h-48"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight ">Jacket</h4>
              <div className="flex">
                <AiFillStar /> <AiFillStar />
              </div>
              <div className="flex">
                <del>₹1200</del>
                <span className="ml-2">₹1999</span>
                <button className="border border-gray-700 rounded mx-6 text-sm h-6 w-15">
                  20% OFF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
