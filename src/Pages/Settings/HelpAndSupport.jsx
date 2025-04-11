import React, { useState } from "react";
import {
  FaPlus,
  FaCheck,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

const FAQItem = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-xl px-4 py-3 flex justify-between items-center shadow-sm mb-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <span>{question}</span>
      <FaPlus className="text-xl" />
    </div>
  );
};

const HelpAndSupport = () => {
  const [type, setType] = useState("Bug");
  const [desc, setDesc] = useState("");

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        {Array(6)
          .fill("What is FundCirkle about?")
          .map((q, idx) => (
            <FAQItem key={idx} question={q} />
          ))}
      </div>

      {/* Report a Problem */}
      <div className="border rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Report a Problem</h2>
        <p className="text-gray-600 mb-4">
          Report any issues or bugs you’re facing while using the App.
        </p>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg p-2 w-full mb-4"
        >
          <option value="Bug">Bug</option>
          <option value="Issue">Issue</option>
          <option value="Suggestion">Suggestion</option>
        </select>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border rounded-lg p-4 w-full h-32 mb-4"
          placeholder="Please describe the bug below"
        ></textarea>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg w-full">
          Submit
        </button>
      </div>

      {/* Contact Support */}
      <div className="border rounded-xl p-6 shadow-md col-span-1 md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold">Email</p>
            <p className="flex items-center gap-2">
              support@fundcirkle.com <MdContentCopy />
            </p>
          </div>
          <div>
            <p className="font-semibold">Phone number</p>
            <p className="flex items-center gap-2">
              +91 784 784 8367 <MdContentCopy />
            </p>
          </div>
          <div>
            <p className="font-semibold">Socials</p>
            <div className="flex gap-4 mt-1 text-green-600 text-xl">
              <FaLinkedin />
              <FaXTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
