import Observer, { Listener } from "./observer";

let isLoaded = false;
const observer = new Observer()

export const initYouTubeAPI = () => {
  if (isLoaded) return
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = () => {
    observer.trigger('apiReady')
  };
  
  isLoaded = true
};

export const onYoutubeReady = (func: Listener) => {
  observer.on('apiReady', func)
};
