import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      Sidebar
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
