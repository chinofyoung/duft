import Link from "next/link";
import { AiFillSetting, AiOutlineDatabase } from "react-icons/ai";
import { BsClipboard2Data, BsFillCartFill } from "react-icons/bs";

export default function SmallLinks() {
  const menu = [
    {
      url: "/record",
      label: "Record",
      icon: <AiOutlineDatabase />,
      disabled: false,
    },
    {
      url: "/products",
      label: "Products",
      icon: <BsFillCartFill />,
      disabled: false,
    },
    {
      url: "/reports",
      label: "Reports",
      icon: <BsClipboard2Data />,
      disabled: false,
    },
    {
      url: "/settings",
      label: "Settings",
      icon: <AiFillSetting />,
      disabled: true,
    },
  ];
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {menu.map(function (menu, index) {
        return (
          <Link
            key={index}
            href={menu.url}
            className={`h-auto p-4 rounded-xl flex items-center justify-center border-2 border-solid flex-col gap-2 ${
              menu.disabled
                ? "bg-slate-200 border-slate-300 text-slate-300"
                : "border-slate-500  text-slate-700"
            }`}
          >
            <span className="text-2xl">{menu.icon}</span>
            <span className="text-xs">{menu.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
