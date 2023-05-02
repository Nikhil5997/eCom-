/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiTwotoneBell } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Offer() {
  return (
    <div className="bg-gray-200 ">
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
        <div className="w-[95%] h-screen bg-slate-200 my-[5%] mx-9">
          <div className="h-9 rounded bg-red-600">
            <h1 className="text-center text-xl font-sans">
              Account Health: Average
            </h1>
          </div>
          <br />
          <p className="mx-5 text-gray-400 text-sm">
            Order & Sales Summary as of Yesterday (1/10/2024) from today
          </p>
          <div className="grid grid-cols-4 mx-5">
            <div className="h-3/5 rounded ">
              <div className="h-32 w-64 bg-white  float">
                <div className=" border-b  border-black h-10">
                  <h2 className="mx-2 float-left font-sans my-2  text-gray-600">
                    Sales Completed
                  </h2>
                  <div className="bg-blue-400 text-white h-6 float-right  mr-2 my-2 w-15">
                    <button className="text-sm">Monthly</button>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-xl mx-4 font-thin"> 4299</h1>
                  <p className="mx-4 float-left font-serif">Total income</p>

                  <div className="float-right mx-6 text-blue-600 float">
                    <p className="float-left font-semibold">98%</p>
                    <div className="float-right my-1">
                      <BsFillLightningChargeFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3/5 rounded  ">
              <div className="h-32 w-64 bg-white  float">
                <div className=" border-b  border-black h-10">
                  <h2 className="mx-2 float-left font-sans my-2  text-gray-600">
                    Sales Returned
                  </h2>
                  <div className="bg-green-400 text-white h-6 float-right mr-2 my-2 w-15">
                    <button className="text-sm">Annual</button>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-xl mx-4 font-thin"> 0</h1>
                  <p className="mx-4 float-left font-serif">New Order</p>

                  <div className="float-right mx-6 text-green-400 float">
                    <p className="float-left font-semibold">20%</p>
                    <div className="float-right my-1">
                      <BsArrowUp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2/5 rounded ">
              <div className="h-32 w-64 bg-white  float">
                <div className=" border-b  border-black h-10">
                  <h2 className="mx-2 float-left font-sans my-2  text-gray-600">
                    Order Booked
                  </h2>
                  <div className="bg-gray-400 text-white h-6 float-right mr-2 my-2 w-15">
                    <button className="text-sm">Today</button>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-xl mx-4 font-thin"> 0</h1>
                  <p className="mx-4 float-left font-serif">New Visits</p>

                  <div className="float-right mx-6 text-gray-400 float">
                    <p className="float-left font-semibold">44%</p>
                    <div className="float-right my-1">
                      <BsArrowUp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3/5 rounded ">
              <div className="h-32 w-64 bg-white  float">
                <div className=" border-b  border-black h-10">
                  <h2 className="mx-2 float-left font-sans my-2  text-gray-600">
                    Order Processed
                  </h2>
                  <div className="bg-red-400 text-white h-6 float-right mr-2 my-2 w-15">
                    <button>Low value</button>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-xl mx-4 font-thin"> 0</h1>
                  <p className="mx-4 float-left font-serif">In first Month</p>

                  <div className="float-right mx-6 text-red-600 float">
                    <p className="float-left font-semibold">38%</p>
                    <div className="float-right my-1">
                      <BsArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-3/5 rounded my-9">
              <div className="h-32 w-64 bg-white  float">
                <div className=" border-b  border-black h-10">
                  <h2 className="mx-2 float-left font-sans my-2  text-gray-600">
                    Order Returned
                  </h2>
                  <div className="bg-red-400 text-white h-6 float-right mr-2 my-2 w-15">
                    <button>Low value</button>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-xl mx-4 font-thin"> </h1>
                  <p className="mx-4 float-left font-serif">In first month</p>

                  <div className="float-right mx-6 text-red-600 float">
                    <p className="float-left font-semibold">3008%</p>
                    <div className="float-right my-1">
                      <BsArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dashboard */}
          <div className="h-screen float bg-black">
            <div className="float-left h-3/6 w-[60%]  mx-5">
              {/* Orders */}
              <div className="h-36 w-full bg-white">
                <p className="mx-2 font-thin text-sm text-gray-400 inline-block">
                  Orders
                </p>
                <a
                  href="#"
                  className="font-serif text-sm text-blue-400 float-right mr-2"
                >
                  View Details
                </a>
                <div>
                  <ul className="flex justify-between mx-2 text-gray-400 border-b-2 ">
                    <li>
                      <strong className="text-black">Dropship(4)</strong>
                    </li>
                    <li>Onship(0)</li>
                    <li>Vendor Self(0)</li>
                    <li>OCPlus(0)</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between text-black font-semibold text-sm my-3 mx-6">
                    <li>SLA Breaching Today</li>
                    <li>Today</li>
                    <li>SLA Breached</li>
                    <li>Pending</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between  font-thin text-sm my-3 mx-5">
                    <li className="mx-2">To Pack</li>
                    <li>To Pack</li>
                    <li>To Print</li>
                    <li>To Pack</li>
                    <li>To Print</li>
                    <li>To Print </li>
                    <li>To Pack </li>
                    <li> </li>
                    <li> </li>
                  </ul>
                  <ul className="flex justify-between  font-semibold text-sm my-1 mx-6">
                    <li className="mx-2">0</li>
                    <li>0</li>
                    <li>0</li>
                    <li>0</li>
                    <li>0</li>
                    <li>0 </li>
                    <li>4</li>
                    <li> </li>
                    <li> </li>
                  </ul>
                </div>
              </div>
              {/* order ends */}
              {/* speedometer start */}
              <div className="h-full  w-full bg-pink-600 my-5"></div>

              {/* speedometer end */}
              {/* Payment start */}
              <div className="h-36 w-full bg-white">
                <p className="mx-2  text-sm text-gray-400 inline-block">
                  Payments
                </p>
                <a
                  href="#"
                  className="font-serif text-sm text-blue-400 float-right mr-2"
                >
                  View Details
                </a>
                <div>
                  <ul className="flex justify-between mx-2 text-xs text-gray-400 border-b-2 my-5">
                    <li>Unsettled Payment</li>
                    <li>Due Date :16 May 2019</li>
                    <li>Last Settled Payments</li>
                    <li>Last Settled Date:--</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between text-black font-semibold text-xs my-3 mx-5">
                    <li>COD</li>
                    <li>NCOD</li>
                    <li>COD</li>
                    <li>COD</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between  font-semibold text-xs mx-5">
                    <li>Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> </li>
                    <li> </li>
                  </ul>
                </div>
              </div>
              {/* Payment end */}
              <div className="h-36 w-full bg-gray-800">
                <p className="mx-2  text-sm text-gray-400 inline-block">
                  Payments
                </p>
                <a
                  href="#"
                  className="font-serif text-sm text-blue-400 float-right mr-2"
                >
                  View Details
                </a>
                <div>
                  <ul className="flex justify-between mx-2 text-xs text-gray-400 border-b-2 my-5">
                    <li>Unsettled Payment</li>
                    <li>Due Date :16 May 2019</li>
                    <li>Last Settled Payments</li>
                    <li>Last Settled Date:--</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between text-black font-semibold text-xs my-3 mx-5">
                    <li>COD</li>
                    <li>NCOD</li>
                    <li>COD</li>
                    <li>COD</li>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between  font-semibold text-xs mx-5">
                    <li>Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> Rs-90,0000</li>
                    <li> </li>
                    <li> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {/* Ads widget */}
              <div className="float-right bg-white  w-[35%] mr-6 my-3">
                <p className="text-sm font-semibold mx-2 my-3 text-gray-500">
                  Ads Widget
                </p>
                <div className="float">
                  <div className="float-left">{IoMdCheckmarkCircleOutline}</div>
                  <p className="text-sm font-semibold mx-2 text-gray-500">
                    CPC Rates Reduced By 40%!
                  </p>
                  <p className="text-sm mx-2  font-thin">
                    To make running ads more economical for you ,we have reduced
                    our clicked rate
                  </p>
                  <p className="text-sm mx-2  ">
                    <strong>Ads Campaigns</strong> Last 0 days Summary
                  </p>
                  <ul className="flex justify-between mx-2 my-2">
                    <li className="text-sm mx-2  font-thin">Impressions</li>
                    <li className="text-sm mx-2  font-thin">Clicks</li>
                    <li className="text-sm mx-2  font-thin">Sales</li>
                    <li></li>
                  </ul>
                  <ul className="flex justify-between mx-2 my-2">
                    <li className="text-sm mx-9  font-semibold">0</li>
                    <li className="text-sm mx-9  font-semibold">0</li>
                    <li className="text-sm mx-9  font-semibold">0</li>
                    <li></li>
                  </ul>
                  <div className="h-9 bg-black text-white w-[60%] mx-16  my-6">
                    <button className="uppercase mx-5 font-serif leading-4 text-sm">
                      start/marge your Campaigns
                    </button>
                  </div>
                </div>
              </div>

              <div className="float-right bg-white  w-[35%] mr-6 my-3">
                <p className="mx-2  text-sm text-gray-400 inline-block">
                  Returns
                </p>
                <a
                  href="#"
                  className="font-serif text-sm text-blue-400 float-right mr-2"
                >
                  View Details
                </a>
                <br />
                <p className="mx-2  text-xs text-gray-400 inline-block">
                  Return issue with return-Dispute product - I have Modified
                  today
                </p>
                <a
                  href="#"
                  className="font-serif text-xs text-blue-400 float-right mr-2"
                >
                  Pending on SD
                </a>
                <br />

                <p className="mx-2  text-xs text-gray-400 inline-block">
                  Return issue with return-Dispute product - I have Modified
                  today
                </p>
                <a
                  href="#"
                  className="font-serif text-xs text-blue-400 float-right mr-2"
                >
                  Pending on SD
                </a>
                <p className="mx-2  text-xs text-gray-400 inline-block">
                  Return issue with return-Dispute product - I have Modified
                  today
                </p>
                <a
                  href="#"
                  className="font-serif text-xs text-blue-400 float-right mr-2"
                >
                  Pending on SD
                </a>
              </div>
            </div>
            {/* <div className="float-right bg-white  w-[35%] mr-6 my-3">
              <p className="mx-2  text-sm text-gray-400 inline-block">
                Returns
              </p>
              <a
                href="#"
                className="font-serif text-sm text-blue-400 float-right mr-2"
              >
                View Details
              </a>
              <br />
              <p className="mx-2  text-xs text-gray-400 inline-block">
                Return issue with return-Dispute product - I have Modified today
              </p>
              <a
                href="#"
                className="font-serif text-xs text-blue-400 float-right mr-2"
              >
                Pending on SD
              </a>
              <br />

              <p className="mx-2  text-xs text-gray-400 inline-block">
                Return issue with return-Dispute product - I have Modified today
              </p>
              <a
                href="#"
                className="font-serif text-xs text-blue-400 float-right mr-2"
              >
                Pending on SD
              </a>
              <p className="mx-2  text-xs text-gray-400 inline-block">
                Return issue with return-Dispute product - I have Modified today
              </p>
              <a
                href="#"
                className="font-serif text-xs text-blue-400 float-right mr-2"
              >
                Pending on SD
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
