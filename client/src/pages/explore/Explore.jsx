import { useEffect } from "react";
import { Leftbar } from "../../components";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import MobileTop from "../../components/mobileComp/MobileTop";

const Item = () => {
  return <div className="item bg-gray-100 aspect-square cursor-pointer">1</div>;
};

const Grid = () => {
  useEffect(() => {
    const thirdElement = document.querySelector(".grid .item:nth-child(3)");
    const sixElement = document.querySelector(".grid .item:nth-child(6)");
    const everySeventh = document.querySelectorAll(
      ".grid .item:nth-child(10n+13)"
    );
    const everyTenth = document.querySelectorAll(
      ".grid .item:nth-child(10n+16)"
    );
    thirdElement?.classList.remove("aspect-square");
    thirdElement?.classList.add("row-span-2");
    sixElement?.classList.remove("aspect-square");
    sixElement?.classList.add("row-span-2");

    everySeventh?.forEach((item) => {
      item.classList.remove("aspect-square");
      item.classList.add("row-span-2");
    });

    everyTenth?.forEach((item) => {
      item.classList.remove("aspect-square");
      item.classList.add("row-span-2");
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1 w-full sm:max-w-[1030px] mx-auto overflow-y-scroll scrollbar-hide">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

const Explore = () => {
  return (
    <div className="flex mt-12 pb-[3.5rem] scrollbar-hide sm:px-2">
      <MobileTop />
      <Leftbar />
      <Grid />
      <MobileMenu />
    </div>
  );
};

export default Explore;
