'use client';

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '@/components/Icons';
import { Cat } from 'lucide-react';

interface CategoriesModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CategoriesModal: React.FC<CategoriesModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="
              fixed 
              inset-0 
              bg-gray-500 
              bg-opacity-75 
              transition-opacity
            "
          />
        </Transition.Child>

        <div className="fixed mx-auto inset-0 z-10 w-[95vw] overflow-y-auto">
          <div 
            className="
              flex 
              min-h-full 
              w-full
              items-center 
              justify-center 
              p-4
              text-center 
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel 
                // overflow-hidden
                // text-left 
                className="
                  relative 
                  transform 
                  rounded-xl
                  bg-[#edf7fc]
                  px-4 
                  pb-4
                  pt-5 
                  shadow-xl 
                  transition-all
                  w-full
                  sm:my-8 
                  sm:p-6
                  "
                // sm:w-full 
                // sm:max-w-lg 
                  >
                <div 
                  className="
                    absolute 
                    right-0 
                    top-0 
                    hidden 
                    pr-4 
                    pt-4 
                    sm:block
                    z-10
                  "
                >
                  <button
                    type="button"
                    className="
                      rounded-lg
                      bg-[#edf7fc]
                      text-[#50b8e7]
                      hover:text-gray-500 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-offset-2
                      "
                      // focus:ring-indigo-500 
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                      <CloseIcon/>
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CategoriesModal;