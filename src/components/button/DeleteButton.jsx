import { MdOutlineDelete } from "react-icons/md";

export function DeleteButton() {
    return (
        <div
            className="w-10 h-10 border border-red-600 hover:bg-red-600 font-bold py-2 rounded justify-center items-center inline-flex"
        >
            <MdOutlineDelete className="h-5 w-5 text-red-500 hover:text-white text-center" />
        </div>
    )
}