import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <div className="bg-slate-300 mr-5">Side bar</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
