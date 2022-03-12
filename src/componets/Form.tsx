import React, { useState } from "react";
interface FormData {
    name: string;
    address: string;
    amount: number;
}
const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        address: "",
        amount: 200,
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        if (formData.name || formData.address || formData.amount) {
            alert(JSON.stringify(formData));
            setFormData({} as FormData);
        } else {
            alert("All fields are required");
        }
    };
    return (
        <div className="flex flex-col justify-center items-center p-5 bg-gray-50 ">
            <h1 className="text-3xl font-bold mb-5 border-b-2 text-gray-600">
                {" "}
                Contribute Saraya
            </h1>
            <form
                action=""
                className="space-y-10 border p-5 rounded-lg lg:w-full  lg:flex flex-col items-center justify-center"
            >
                <div>
                    <div className="relative  ">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            className="block w-72 py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            value={formData.name}
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute left-5  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                        >
                            Your Name
                        </label>
                    </div>
                </div>
                <div className="relative  ">
                    <textarea
                        onChange={handleChange}
                        name="address"
                        className="block w-72 py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.address}
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute left-5  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                    >
                        Your Address
                    </label>
                </div>
                <div className="relative  ">
                    <input
                        onChange={handleChange}
                        type="number"
                        name="amount"
                        className="block w-72 py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={formData.amount}
                    />
                    <label
                        htmlFor="amount"
                        className="absolute left-5  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                    >
                        Amount
                    </label>
                </div>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
