import React, { useEffect, useState } from 'react'
import './modal.css'
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { useSelector } from 'react-redux';

let items = [];

const Modal = () => {
    const DataUse = useSelector((state) => state.addToCartSlice.allProduct);
    const [{ modalShow }, dispatch] = useStateValue();
    const [tot, setTot] = useState(0);
    const [pay, setPay] = useState(false)

    const showModal = () => {
        console.log('showModal');
        dispatch({
            type: actionType.SET_MODAL_SHOW,
            modalShow: !modalShow,
        });
    };
    useEffect(() => {
        items = DataUse;
    }, [DataUse]);

    useEffect(() => {
        let totalprice = DataUse.reduce(function (sum, item) {
            return sum + item.quantity * item.price;
        }, 0);
        setTot(totalprice);
    }, [tot,DataUse]);

    const handlePay = () => {
        setPay(false);
        dispatch({
            type: actionType.SET_MODAL_SHOW,
            modalShow: !modalShow,
        });

        dispatch({
            type: actionType.SET_DataUse,
            DataUse: [],
        });
    }
    return (
        <>
            {modalShow ? (
                <>
                    <div className="justify-center  scrollbar-none items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-5xl">
                            <header className="flex flex-wrap text-center">
                                <nav className="flex w-screen  bg-gray-50 text-gray-700 " >
                                    <div className="w-full xl:px-12 py-6 px-5 flex space-x-12 items-center ">
                                        <h3 className=" text-3xl  font-semibold">Chek Out</h3>
                                    </div>
                                    <button
                                        className="text-black-500  hover:bg-indigo-50 hover:rounded font-bold uppercase px-6 py-2 text-xl"
                                        type="button"
                                        onClick={showModal}
                                    >
                                        X
                                    </button>
                                </nav>
                            </header>
                            <div className="grid grid-cols-3">
                                <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-5 px-5">
                                    <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                                            <div className="text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-medium ml-3">Checkout</div>
                                        </div>
                                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                                        <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                                        </div>
                                    </div>
                                    <div className="rounded-md">
                                        <form id="payment-form">
                                            <section>
                                                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                                                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                        <span className="text-right px-2">Name</span>
                                                        <input name="name" className="focus:outline-none px-3" placeholder="Try Odinsson" required />
                                                    </label>
                                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                        <span className="text-right px-2">Email</span>
                                                        <input name="email" type="email" className="focus:outline-none px-3" placeholder="try@example.com" required />
                                                    </label>

                                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center relative bg-white">
                                                        <span className="text-right px-2">City</span>
                                                        <div id="country" className="focus:outline-none px-3 w-full flex items-center ">
                                                            <select name="country" className="border-none px-3 bg-transparent flex-1 cursor-pointer  appearance-none focus:outline-none">
                                                                <option value="Am" defaultValue>Amman</option>
                                                                <option value="Za">Zarqa</option>
                                                                <option value="Ir">Irbid</option>
                                                            </select>
                                                        </div>
                                                    </label>
                                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                        <span className="text-right px-2">Address</span>
                                                        <input name="address" className="focus:outline-none px-3" placeholder="10 Street XYZ 654" />
                                                    </label>
                                                    <label className="flex border-t border-gray-200 h-12 py-3 items-center">
                                                        <span className="text-right px-2">ZIP</span>
                                                        <input name="postal_code" className="focus:outline-none px-3" placeholder="98603" />
                                                    </label>
                                                </fieldset>
                                            </section>
                                        </form>
                                    </div>
                                    <div className="rounded-md">
                                        <section>
                                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                                            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Card</span>
                                                    <input type="number" name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required />
                                                </label>
                                            </fieldset>
                                        </section>
                                    </div>
                                    <button className=" bg-yellow-500 hover:bg-yellow-700 submit-button px-4 py-3  rounded-full text-white  w-full text-xl font-semibold transition-colors" onClick={() => setPay(true)}>
                                        Pay $ {tot}
                                    </button>

                                    <div><p>       </p></div>
                                </div>
                                <div className="col-span-1 bg-white lg:block hidden">
                                    <h1 className="py-6 border-b-2 text-xl font-bold text-gray-600 px-8">Order Summary</h1>
                                    <ul className="py-6 border-b space-y-6 px-5">
                                        {items && items.length > 0 ? (
                                            <div>
                                                <div className=" h-60 md:h-42 px-6  gap-3 overflow-x-scroll scrollbar-none">
                                                    {items &&
                                                        items.length > 0 &&
                                                        items.map((item) => {
                                                            return (
                                                                <li className="mt-5 grid grid-cols-6 gap-3 border-b-2 product" key={item.id}>
                                                                    <div className="col-span-2 self-center">
                                                                        <img src={item?.image} alt="Product" className="rounded w-full" />
                                                                    </div>

                                                                    <div className="flex flex-col col-span-2 pt-5">
                                                                        <span className="text-black-600 text-md font-semi-bold">{item?.title}</span>
                                                                        {/* <span className="text-gray-400 text-sm inline-block pt-2">{item?.decp}</span> */}
                                                                    </div>
                                                                    <div className="col-span-2 pt-5">
                                                                        <div className="flex items-center space-x-2 text-sm justify-between">
                                                                            <span className="text-black-800">{item?.quantity}</span>
                                                                            <span className="text-yellow-400 font-semibold inline-block">$ {item?.price}</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                                <p className="text-xl text-textColor font-semibold">
                                                    Add some items to your cart
                                                </p>
                                            </div>
                                        )}
                                    </ul>
                                    <div className="px-8 border-b">
                                        <div className="flex justify-between py-4 text-black-600">
                                            <span>Subtotal</span>
                                            <span className="font-semibold text-yellow-400">$ {tot}</span>
                                        </div>
                                        <div className="flex justify-between py-4 text-black-600">
                                            <span>Shipping</span>
                                            <span className="font-semibold text-yellow-400">$ 2.5</span>
                                        </div>
                                    </div>
                                    <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                        <span>Total</span>
                                        <span className=" text-yellow-400">$ {tot + 2.5}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {pay ? (
                <>

                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-8 mx-5 ">
                            <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-yellow-500 outline-none focus:outline-none">
                                <p className='mx-5 py-5 text-xl italic font-black tracking-wide' >THANK YOU FOR YOUR TRUST</p>
                                <button className='pb-2 text-xl italic font-black bg-amber-200  hover:bg-amber-800 tracking-wide' onClick={handlePay}>ok</button>
                            </div>
                        </div>
                    </div>
                </>
            ) :
                null

            }
        </>
    )
}

export default Modal