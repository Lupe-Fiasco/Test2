import React, { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllInvoices from "@/components/Admin/AllInvoices";
import { getAllInvoices } from "@/actions/invoices/getAllInvoices";

const Page = async () => {
  const data = await getAllInvoices();

  return (
    <div>
      <Heading
        title="YoungMoney - Admin"
        description="YoungMoney Best!"
        keywords="YoungMoney,Fezco,Fez,Front-End"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Invoices" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllInvoices isDashboard={false} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Page;
