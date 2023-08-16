"use client";

import { gsap, gsapBaseDuration } from "../libs/gsap";

export default function TestGsap() {

  const boxFadein = () => {
    gsap.to('#gsap-box', {
      rotate: '360deg',
      duration: gsapBaseDuration
    })
  }

  return (
    <div onClick={boxFadein}>
      <div id="gsap-box" className="bg-black h-80 w-80"></div>
    </div>
  );
}
