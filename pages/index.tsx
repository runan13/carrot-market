import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-7 rounded-2xl shadow-lg">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-lg">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">230</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full items-end relative -top-20" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="realtive flex flex-col items-center -top05">
            <span>Tony Molly</span>
            <span>미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <div className="flex mb-5 justify-between items-center">
          <span>⃪</span>
          <div className="space-x-3">
            <span>★4.9</span>
            <span className="shadow-xl p-2 rounded-md">♥</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-80 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-3 flex justify-between items-center">
            <div>
              <input type="radio" name="" id="" />
              <input type="radio" name="" id="" />
              <input type="radio" name="" id="" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 h-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 h-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-lg"></div>
    </div>
  );
};

export default Home;
