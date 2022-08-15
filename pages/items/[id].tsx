import type { NextPage } from 'next';

const ItemDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 select-none">
      <div className="mb-8">
        <div className="h-96 bg-orange-400" />
        <div className="flex items-center space-x-3 py-3 border-t border-b select-none">
          <div className="w-12 h-12 rounded-full bg-orange-400" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500 cursor-pointer">View profile &rarr;</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-3xl mt-3 text-gray-900 block">$140</span>
          <p className="text-base my-10 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some bullshit about it
            ain&apos;t there, and we got to go someplace else and get it, I&apos;m gonna shoot you
            in the head then and there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
            out where my goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m
            talking to you, motherfucker. You listen: we go in there, and that ni**a Winston or
            anybody else is in there, you the first motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium hover:bg-orange-600">
              Talk to seller
            </button>
            <button className="p-3 flex items-center justify-center text-gray-500 hover:text-gray-600">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full bg-orange-400 mb-4" />
              <h3 className="text text-gray-700">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
