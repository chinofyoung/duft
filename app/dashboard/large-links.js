import Link from "next/link";
import { AiFillSetting, AiOutlineDatabase } from "react-icons/ai";
import { BsClipboard2Data, BsFillCartFill } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";

export default function LargeLinks() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Link
        href="/record"
        className="bg-slate-200 w-full rounded-lg text-neutral-700 p-4 flex flex-col gap-2"
      >
        <AiOutlineDatabase className="text-2xl" />
        <strong>Record</strong>
        <p className="text-xs">Record sales and expenses</p>
      </Link>
      <Link
        href="/products"
        className="bg-orange-500 w-full rounded-lg text-white p-4 flex flex-col gap-2"
      >
        <BsFillCartFill className="text-2xl" />
        <strong>Products</strong>
        <p className="text-xs">Add or edit existing products</p>
      </Link>
      <Link
        href="/inventory"
        className="bg-cyan-500 w-full rounded-lg text-white p-4 flex flex-col gap-2"
      >
        <MdOutlineInventory className="text-2xl" />
        <strong>Inventory</strong>
        <p className="text-xs">Update inventory</p>
      </Link>
    </div>
  );
}
