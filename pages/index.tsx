import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="max-w-xs bg-white p-7 rounded-2xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$90</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white text-center p-2 rounded-xl w-3/4 mx-auto">
          Checkout
        </div>
      </div>
      <div className="max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-7 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-2xl relative -top-5 p-7 bg-white">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="max-w-xs bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="max-w-xs bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
