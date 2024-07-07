"use client";

export default function Loading() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-teal-400 via-lime-500 to-teal-600 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-100 dark:bg-slate-950 rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
}
