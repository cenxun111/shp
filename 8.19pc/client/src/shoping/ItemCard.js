import React,{useRef} from "react";
import youhui from '../images/youhui.png'
const ItemCard = () => {
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
  return (
      <div>
         <button className="bg-green-400 text-xl py-8 " onClick={() => scroll(-1500)}>LEFT</button>
          <button className="bg-green-400" onClick={() => scroll(1500)}>RIGHT</button>
    <div className=" overflow-x-scroll scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch w-full" ref={ref}>
       
      <div className="inline-flex pl-8">
    <div className=" h-80 w-80 bg-white mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2 rounded-md"
            />
    </div>
    <div className=" h-80 w-80 bg-white mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-full mx-auto pt-2 rounded-md"
            />
    </div>
    <div className=" h-80 w-80 bg-gray-300 mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2 rounded-lg"
            />
    </div>
    <div className=" h-80 w-80 bg-white mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2 rounded-lg"
            />
    </div>
    <div className=" h-80 w-80 bg-white mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2 rounded-lg"
            />
    </div>
    <div className=" h-80 w-80 bg-white mr-4 rounded-2xl ">
        <h1 className="text-center pt-3">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2 rounded-lg"
            />
    </div>
    <div className=" h-80 w-80 bg-gray-500">
        <h1 className="text-center">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className=" h-80 w-80 bg-gray-500">
        <h1 className="text-center">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2"
            />
    </div> <div className=" h-80 w-80 bg-gray-500">
        <h1 className="text-center">商品名称</h1>
        <img src={youhui} className="h-5/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className=" h-80 w-80 bg-gray-500">
        <h1 className="text-center">商品名称</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    <div className="h-80 w-80 bg-gray-500">
        <h1>hello</h1>
        <img src={youhui} className="h-1/6 w-10/12 mx-auto pt-2"
            />
    </div>
    </div>
    </div>
    </div>
  );
};

export default ItemCard;
