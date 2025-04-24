import React from 'react';
import whatsAppLogo from '../utils/images/whatsAppLogo.png';
import facebookLogo from '../utils/images/facebookLogo.png';
import instagramLogo from '../utils/images/instagramLogo.png';
import twitterLogo from '../utils/images/twitterLogo.png';
import telegramLogo from '../utils/images/telegramLogo.png';
import quoraLogo from '../utils/images/quoraLogo.png';
import { useSelector } from 'react-redux';

const FixedSideBars = () => {
  const { profile } = useSelector((store) => store.signedInUser);

  const leftSideBar = (
    <div
      className="h-80 fixed top-[50%] translate-y-[-40%] text-black text-center font-semibold bg-[#EA5C2B] pr-1 pl-2 py-4 rounded rotate-180 hover:scale-125 duration-300"
      style={{
        writingMode: 'vertical-rl',
      }}
    >
      <i>
        {profile ? (
          <>
            Currently logged in as{' '}
            <span className="text-white font-bold">{profile.name}</span>
          </>
        ) : (
          <>
            <span className="not-italic">🙃</span> Delicious stuff ... Order
            quickly &nbsp;<span className="not-italic">🙃</span>
          </>
        )}
      </i>
    </div>
  );

  const rightSideBar = (
    <div className="fixed flex flex-col top-[50%] right-0 translate-y-[-40%] font-semibold bg-[#EA5C2B] p-1.5 rounded hover:scale-125 duration-300">
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 duration-300 my-1 py-1"
        href="https://www.facebook.com/sumit.joshi.9469545/"
      >
        <img src={facebookLogo} alt="facebookLogo" className="w-6 rounded-xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300 my-1 py-1"
        href="https://www.instagram.com/sumitjoshi420/"
      >
        <img
          src={instagramLogo}
          alt="instagramLogo"
          className="w-6 rounded-xl"
        />
      </a>
      <a
        className="hover:scale-125 duration-300 my-1 py-1"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/"
      >
        <img src={twitterLogo} alt="twitterLogo" className="w-6 rounded-xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300  my-1 py-1"
        href="https://telegram.com/"
      >
        <img src={telegramLogo} alt="telegramLogo" className="w-6 rounded-xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300 my-1 py-1"
        href="https://quora.com/"
      >
        <img alt="quoraLogo" src={quoraLogo} className="w-6 rounded-xl" />
      </a>
    </div>
  );

  const bottomWhatsAppLink = (
    <div className="fixed bottom-0 right-0 hover:scale-125 duration-300 m-3">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://web.whatsapp.com/send?phone=918285049037"
      >
        <img
          src={whatsAppLogo}
          alt="whatsappLogo"
          className="w-14 rounded-lg"
        />
      </a>
    </div>
  );

  return (
    <>
      {leftSideBar}
      {rightSideBar}
      {bottomWhatsAppLink}
    </>
  );
};

export default FixedSideBars;
