import React, { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllWithdrawRequests from "@/components/Admin/AllWithdrawRequests";
import { getAllWithdraws } from "@/actions/withdraws/getAllWithdraws";

interface Props { }

const Page: FC<Props> = async (props) => {
  const withdraws = await getAllWithdraws();
  return (
    <div>
      <Heading
        title="YoungMoney - Admin"
        description="YoungMoney Best!"
        keywords="YoungMoney,Fezco,Fez,Front-End"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Withdraw requests" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllWithdrawRequests withdraws={withdraws} />
        </div>
      </div>
    </div>
  );
};

export default Page;
