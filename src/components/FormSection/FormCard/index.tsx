"use client";

import React, { useRef, useState } from "react";
import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import { IFormStates } from "./types";
import AppModal from "@/components/AppModal";

const formHeaderData = {
  header: "Schedule an Appointment",
  description:
    "Here, let visitors know what will happen when they complete your form.",
};

const successModalData = {
  header: "Thank You!",
  description: `We'll reach out to confirm your appointment shortly.`,
};

const appointmentOptions = [
  "type of appointment",
  "type 1",
  "type 2",
  "type 3",
];

function FormCard() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formStates, setFormStates] = useState<IFormStates>({
    isError: false,
    isSendingData: false,
    success: false,
    errorMsg: undefined,
  });

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (formStates.isSendingData) return;

    setFormStates((prevState) => ({
      ...prevState,
      isSendingData: true,
      success: false,
      isError: false,
      errorMsg: undefined,
    }));

    const formData = new FormData(formRef.current);

    // Perform form input validation
    let isValid = true;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const appointmentType = formData.get("appointmentType") as string;

    if (!firstName || !lastName || !email || !phoneNumber || !appointmentType) {
      isValid = false;
    }

    if (!isValid) {
      setFormStates((prevState) => ({
        ...prevState,
        isError: true,
        errorMsg: "Please fill in all required fields.",
      }));
      return;
    }

    // Simulate form submission with a resolved promise

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    })
      .then(() => {
        setFormStates((prevState) => ({
          ...prevState,
          success: true,
          isError: false,
        }));
        formRef.current?.reset();
      })
      .catch(() => {
        setFormStates((prevState) => ({
          ...prevState,
          isError: true,
          success: false,
          errorMsg:
            "something went wrong while submitting the form, please try again...",
        }));
      })
      .finally(() => {
        setFormStates((prevState) => ({ ...prevState, isSendingData: false }));
      });
  };

  const onClickModalCancel = () => {
    setFormStates((prevState) => ({
      ...prevState,
      isError: false,
      success: false,
      errorMsg: undefined,
    }));
  };

  return (
    <div
      className={`relative lg:-mt-[150px] sm:-mt-[80px] -mt-[60px] sm:p-8 p-4 md:w-[600px] w-full 
                      bg-backgroundColor-primary rounded-md text-center flex flex-col justify-center`}
    >
      <AppText
        tag="h2"
        semiBold
        extraMedium
        customClass="text-textColor-primary-night"
      >
        {formHeaderData.header}
      </AppText>
      <AppText
        tag="h2"
        default
        customClass="max-w-[400px] w-full mt-4 mx-auto text-textColor-primary-night"
      >
        {formHeaderData.description}
      </AppText>
      <form
        ref={formRef}
        onSubmit={onSubmitForm}
        aria-label={"form to schedule an appointment"}
        className="flex flex-col gap-6 mt-8"
      >
        <input
          placeholder="First name*"
          type="text"
          id="firstName"
          name="firstName"
          required
          aria-label="enter your first name"
        />
        <input
          placeholder="Last Name*"
          type="text"
          id="lastName"
          name="lastName"
          required
          aria-label="enter your last name"
        />
        <input
          placeholder="Email*"
          type="email"
          id="email"
          name="email"
          required
          aria-label="enter your email"
        />
        <input
          placeholder="Phone Number*"
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          required
          aria-label="enter your phone number"
        />
        <select
          id="appointmentType"
          name="appointmentType"
          required
          aria-label="select type of appointment"
        >
          {appointmentOptions.map((type, index) => {
            return (
              <option
                value={type === "type of appointment" ? "" : type}
                key={type}
              >
                {type}
              </option>
            );
          })}
        </select>
        {formStates.isError && (
          <AppText tag="p" isErrorText default>
            {formStates.errorMsg}
          </AppText>
        )}
        <AppButton
          ariaLabel={`click to schedule an appointment`}
          buttonType={"primary"}
          onClick={() => console.log("hello")}
          buttonText="SCHEDULE NOW"
        />
      </form>
      <AppModal showModal={formStates.success}>
        <div
          className={`max-w-[400px] h-[300px] bg-backgroundColor-primary 
                        p-4 absolute left-0 right-0 bottom-0 top-0 m-auto rounded-md 
                        border-t-4 border-primaryColor flex flex-col items-center justify-center text-center`}
        >
          <div className="modalCancelDiv" onClick={onClickModalCancel} aria-label={"click to close modal"}/>
          <AppText
            tag="h3"
            extraMedium
            bold
            customClass="text-textColor-primary-night"
          >
            {successModalData.header}
          </AppText>
          <AppText
            tag="p"
            default
            customClass="mt-4 text-textColor-primary-night"
          >
            {successModalData.description}
          </AppText>
        </div>
      </AppModal>
    </div>
  );
}

export default FormCard;
