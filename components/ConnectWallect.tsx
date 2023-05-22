import React from 'react';

import briogeLogo from '../assets/images/brioge.png';
import logo from '../assets/images/SRLOGO.svg';
import eth2 from '../assets/images/eth.svg';
import multiChain from '../assets/images/multichain.svg';

import Image from 'next/image';
import { ConnectWalletBtn } from './Button';

const ConnectWallect = () => {
  return (
    <div className=" bg-secondary space-y-5 border px-6 py-6 border-[#D9D9D9] rounded-[16px]">
      <div className=" max-w-[160px] md:max-w-[270px]">
        <Image src={briogeLogo} alt="briogeLogo" />
      </div>
      <p className=" text-sm lg:text-lg ">
        Here you can trade in your BSC-SquidGrow for ETH-SquidGrow
      </p>
      <h2 className="text-sm lg:text-lg !font-bold">3% Trade in Bonus</h2>
      <div>
        <h3 className=" text-lg pb-2 text-muted">
          Enter the amount of BSC-SquidGrow you want to trade in.
        </h3>
        <div className=" space-y-4 relative">
          {/* From */}
          <div className=" bg-extraDark rounded px-4 py-3">
            <h2 className=" text-xs lg:text-sm text-muted">From</h2>
            <div className=" flex items-center py-1 justify-between">
              <div className="flex items-center gap-2  lg:gap-5">
                <Image
                  alt="logo"
                  className="w-[40px] object-cover"
                  src={logo}
                />
                <h2 className="flex text-base lg:text-lg items-center gap-3">
                  <span className=" block">SQUIDGROW</span>
                  <svg
                    width="20"
                    height="20"
                    className=" block"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9333 2.81671H10.7416H6.06664C5.26664 2.81671 4.86664 3.78338 5.43331 4.35004L9.74997 8.66671C10.4416 9.35838 11.5666 9.35838 12.2583 8.66671L13.9 7.02504L16.575 4.35004C17.1333 3.78338 16.7333 2.81671 15.9333 2.81671Z"
                      fill="#57585A"
                    />
                  </svg>
                </h2>
              </div>
              <h2 className=" text-xl">1</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2 className=" text-xs lg:text-sm text-muted">
                BNB Smart Chain
              </h2>
              <h2 className=" text-xs lg:text-sm text-muted"></h2>
            </div>
          </div>
          <div className="w-[44px] cursor-pointer h-[44px] absolute left-[46%] top-[39%]  rounded-full border-muted border-[3px] bg-extraDark flex justify-center items-center">
            <svg
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2325 17.9241C10.8759 17.5805 10.2856 17.5805 9.92901 17.9241L6.91615 20.8264V1.63561C6.91615 1.14992 6.49804 0.747147 5.99385 0.747147C5.48966 0.747147 5.07155 1.14992 5.07155 1.63561V20.8145L2.07099 17.9241C1.71436 17.5805 1.12409 17.5805 0.767468 17.9241C0.410844 18.2676 0.410844 18.8362 0.767468 19.1798L5.32979 23.5747C5.41587 23.6576 5.52655 23.7287 5.64952 23.7761C5.66182 23.7761 5.67412 23.7761 5.68642 23.7879C5.7848 23.8235 5.89547 23.8471 6.00615 23.8471C6.2521 23.8471 6.48574 23.7524 6.65791 23.5865L11.2325 19.1798C11.5892 18.8244 11.5892 18.2676 11.2325 17.9241Z"
                fill="white"
              />
            </svg>
          </div>
          {/* To */}
          <div className="  bg-extraDark rounded px-4 py-3">
            <h2 className=" text-xs lg:text-sm text-muted">To</h2>
            <div className=" py-1 flex items-center justify-between">
              <div className="flex items-center gap-2  lg:gap-5">
                <Image src={eth2} className="w-[40px]" alt="" />
                <h2 className="flex text-base lg:text-lg items-center gap-3">
                  <span className=" block">ETH-SQUIDGROW</span>
                </h2>
              </div>
              <h2 className=" text-base lg:text-xl">1.3</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2 className=" text-xs lg:text-sm text-muted">
                Ethereum Mainnet
              </h2>
              <h2 className=" text-xs lg:text-sm text-muted"></h2>
            </div>
          </div>
        </div>
      </div>

      {/* button collect wallet */}

      <div className="  flex justify-start">
        <ConnectWalletBtn />
      </div>
      {/* footer */}
      <div className="flex items-center gap-3">
        <div className=" text-muted">Powered By Multichain</div>
        <Image src={multiChain} alt="multiChain" />
      </div>
    </div>
  );
};

export default ConnectWallect;
