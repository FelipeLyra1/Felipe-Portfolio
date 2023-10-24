import React from 'react'

const Modal = ({setShowModal}) => {
    return (
        <div tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">

                <div class="relative bg-white rounded-lg shadow dark:bg-slate-900">

                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-slate-50">
                            Terms of Service
                        </h3>
                        <button type="button" onClick={() => setShowModal(false)} class="text-slate-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-slate-900 dark:hover:text-slate-0" data-modal-hide="defaultModal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div class="p-4 space-y-1">
                        <p class=" text-center leading-relaxed text-slate-50 text-xl dark:text-gray-400">
                            The Email had been sent.
                        </p>
                        <p class="text-center text-xl leading-relaxed text-slate-50 dark:text-gray-400">
                            Thank You.
                        </p>
                    </div>

                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={() => setShowModal(false)} type="button" class="text-slate-900 bg-slate-700 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-50 dark:hover:bg-slate-700 dark:focus:ring-slate-700">CLose</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal