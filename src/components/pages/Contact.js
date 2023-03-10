import React from "react";

export default function Contact() {
    return (
     <div className="h-screen">
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Junho</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">for any questions regarding myself, please leave a message!</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form>
            </div>
        </section>
     </div>
    );
}