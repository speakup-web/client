import { MdOutlineEdit } from "react-icons/md";

export function EditButton() {
    return (
        <div
            className="w-10 h-10 border border-indigo-600 hover:bg-indigo-600 font-bold py-2 rounded justify-center items-center inline-flex mr-3"
        >
            <MdOutlineEdit className="h-5 w-5 text-indigo-600 hover:text-white text-center" />
        </div>
    )
}