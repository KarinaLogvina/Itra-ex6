import { useState } from "react";
import axios from "axios";

const Main = (data) => {
    const info = data.data;
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const deleteItem = (userId) => {
        return axios.delete("http://localhost:3000/users/${id}", async (res, req) => {

        })
    }

    const handleonChange = () => {
        setIsChecked(!isChecked);
    }

    const selectAll = (value) => {

    };

    return (
        <div className="bg-white">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 bg-white">
                <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div
                        class="bg-white px-6 py-4 my-3 w-3/4 mx-auto rounded-md flex items-center"
                    >
                        <div class="w-full text-center mx-auto">
                            <button
                                type="button"
                                class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >
                                Unblock
                            </button>
                            <button
                                type="button"
                                class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                            >
                                Block
                            </button>
                            <button
                                type="button"
                                class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 text-center tracking-wider">Select All
                                    <p className="text-gray-600 ">
                                        <p><input type="checkbox" name="selectAll" id="" checked={isCheckAll} /></p>
                                    </p>
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 text-center tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 text-center tracking-wider">Username</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 text-center tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 text-center tracking-wider">Status</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 text-center tracking-wider">Created At</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 text-center tracking-wider">Lust Update</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                info.map((value, key) => {
                                    return (
                                        <tr id={key}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 leading-5">
                                                <input type="checkbox" name={value.username} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm text-center leading-5 text-center  text-gray-800">{value.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                <div className="text-sm leading-5 text-blue-900">{value.username}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{value.mail}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative text-xs">{value.status}</span>
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{value.createdAt.slice(0, 10)}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{value.updatedAt.slice(0, 10)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main;