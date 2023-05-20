import React from 'react';
import SquidGrow from '../assets/images/SquidGrow.png';
import Image from 'next/image';
import Container from './Container';
import {
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
const FooterDesktop = () => {
  const links = [
    {
      href: '',
      label: <FaTelegramPlane size={25} />,
    },
    {
      href: '',
      label: <FaDiscord size={25} />,
    },
    {
      href: '',
      label: <FaYoutube size={25} />,
    },
    {
      href: '',
      label: <FaTiktok size={25} />,
    },
    {
      href: '',
      label: <FaTwitter size={25} />,
    },
  ];
  return (
    <Container>
      <div className="  border-t-2 border-[#57585A] mt-20 py-10 hidden lg:flex items-start">
        <div className=" basis-1/2">
          <Image src={SquidGrow} alt="SquidGrow" />
          <p className=" text-sm max-w-xs py-9">
            SquidGrow aspires to be the top, secure utility coin on Binance
            Smart Chain through marketing and utility.
          </p>
          <p className=" text-sm text-muted">
            All rights reserved. © 2022, SquidGrow
          </p>
        </div>
        <div className=" basis-1/2">
          <div className="flex  relative justify-between">
            <div className=" flex flex-col">
              <div>
                <h2 className=" text-xl !font-semibold">About</h2>
                <ul className=" space-y-2">
                  <li className=" text-base text-muted">Home</li>
                  <li className=" text-base text-muted">What is SquidGrow</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Governance</h2>
                <ul className=" space-y-2">
                  <li className=" text-base text-muted">Tokenomics</li>
                  <li className=" text-base text-muted">SquidGrow ILO</li>
                  <li className=" text-base text-muted">SquidGrow Bridge</li>
                  <li className=" text-base text-muted">SquidGrow Trade In</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Product</h2>
              <ul className=" space-y-2">
                <li className=" text-base text-muted">SGS</li>
                <li className=" text-base text-muted">Staking</li>
                <li className=" text-base text-muted">Farming</li>
                <li className=" text-base text-muted">Bridge</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Other Links</h2>
              <ul className=" space-y-2">
                <li className=" text-base text-muted">Blog</li>
                <li className=" text-base text-muted">White Paper</li>
                <li className=" text-base text-muted">
                  <Link
                    href={'https://skynet.certik.com/projects/squidgrow'}
                    target="_blank"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="py-12 absolute right-0 top-[60%] ">
              <div className=" flex items-center justify-center gap-7">
                {links.map((link, key) => (
                  <div
                    key={key}
                    className=" w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full text-black "
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterDesktop;
