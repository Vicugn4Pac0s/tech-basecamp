import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap };

export const gsapBaseDuration = .5;
export const gsapBaseDelay = .5;