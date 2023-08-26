import { navigationHeight } from "../../common/size";

const useMoveScroll = () => {
  const onMove = (type) => {
    const element = document.getElementById(`${type}`);

    const [navHeight] = navigationHeight.split("p");
    const top = element?.offsetTop - Number(navHeight);

    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  };

  return onMove;
};

export default useMoveScroll;
