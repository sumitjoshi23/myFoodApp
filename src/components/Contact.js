import React, { useState } from "react";
import Button from "../Button";

const ContactUsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [showDialogueBox, setShowDialogueBox] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setShowDialogueBox(true);
  }

  function handleCloseButtonClick() {
    setShowDialogueBox(false);
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setMessage("");
  }
  const form = (
    <>
      <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">Contact Us</h1>
      <form className="py-4 max-w-lg w-full" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap mb-6">
          <div className="w-1/2 pr-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="John"
            />
          </div>
          <div className="w-1/2 pl-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email Address
          </label>
          <input
            required
            onChange={(e) => setEmailAddress(e.target.value)}
            value={emailAddress}
            className="required appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-message"
            rows="8"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
  const formSubmissionConfirmationBox = (
    <div className="h-96 rounded-lg shadow-lg p-4 my-4 bg-[#CBE4DE] flex flex-col items-center justify-center">
      <h1 className="p-4 font-bold text-xl">
        Thanks for connecting Mr/Ms {firstName} {lastName}
      </h1>
      <p>Your message has been successfully received at our end.</p>
      <p>
        We will contact you shortly on your provided email address i.e.
        <span className="font-semibold text-[#2E4F4F]">{emailAddress}</span>
      </p>
      <Button className="mt-5" onClick={handleCloseButtonClick} type="submit">
        Close
      </Button>
    </div>
  );

  const content = showDialogueBox ? formSubmissionConfirmationBox : form;
  return (
    <div className="py-8 flex flex-col items-center justify-center">
      {content}
    </div>
  );
};

export default ContactUsPage;
