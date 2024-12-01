import React, { useState } from "react";
import ButtonType1 from "../buttons/ButtonType1";
import { IoMdArrowForward } from "react-icons/io";
import FadeIn from "../animations/FadeIn";
import SelectInput from "../input/SelectInput";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import MessageInput from "../input/MessageInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./contactSchema";
import MobileInput from "../input/MobileInput";
import MultiSelectInput from "../input/MultiSelectInput";
import axios from "../../api/axios";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const selectedInterests = watch("interest", []);
  const selectedBudget = watch("budget", "");
  const phoneNumber = watch("phone", "");
  const [loading, setLoading] = useState(false);

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // const onSubmit = async (data) => {
  //   setLoading(true);
  //   const formData = new FormData();
  //   Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  //   console.log(data);

  //   try {
  //     const response = await fetch(scriptUrl, {
  //       method: "POST",
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Form Submitted:", result);

  //       if (result.result === "success") {
  //         reset();
  //         alert("Form submitted successfully!");
  //       } else {
  //         console.error("Error in response:", result.error);
  //         alert("There was an error submitting the form.");
  //       }
  //     } else {
  //       console.error("Network response was not ok:", response.statusText);
  //       alert("There was a network error. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     alert("An error occurred while submitting the form.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("/contact-form", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.status === 201 ||
        response.data.message === "Contact saved successfully"
      ) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        console.error(
          "Error in response:",
          response.data.error || "Unknown error"
        );
        toast.error("There was an error submitting the form.");
      }
    } catch (error) {
      console.error(
        "Form submission error:",
        error.response?.data || error.message
      );
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const budgetData = [
    { value: "less_than_5000", label: "Less than 5000" },
    { value: "5000_to_10000", label: "5000 to 10000" },
    { value: "above_10000", label: "Above 10000" },
  ];
  const interestOptions = [
    { value: "web_development", label: "Web Development" },
    { value: "app_development", label: "App Development" },
    { value: "ui_ux_design", label: "UI/UX Design" },
    { value: "digital_marketing", label: "Digital Marketing" },
  ];

  const whatsappNumber = "919628849015"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello, I'd like to connect!"; // Replace with your desired message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className=" mx-auto px-4 py-8 flex flex-col gap-10" id="contact">
      <FadeIn>
        <div className="text-3xl font-semibold ">
          <div>Love to hear from you,</div>
          <div>
            Get in <span className="text-green-accent">touch</span>👋
          </div>
        </div>
      </FadeIn>

      <div className="flex mb-4 w-full">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <ButtonType1 className="flex items-center gap-2">
            <span>Connect with WhatsApp</span>
            <IoMdArrowForward />
          </ButtonType1>
        </a>
      </div>

      <div className="font-light text-xl">OR</div>

      <form>
        <div className="flex flex-col gap-4 w-full">
          <FadeIn delay="0.55">
            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-4 mb-4">
              <Input
                id="name"
                label="Your Name*"
                type="text"
                placeholder={"John doe"}
                register={register}
                errors={errors}
              />

              <Input
                id="email"
                type="email"
                label={"Your Email*"}
                placeholder={"john.doe@example.com"}
                register={register}
                errors={errors}
              />
            </div>
          </FadeIn>
          <FadeIn delay="0.6">
            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-4 mb-4">
              <MobileInput
                value={phoneNumber}
                onChange={(value) => setCustomValue("phone", value)}
                errors={errors}
                id={"phone"}
              />

              <div className="flex flex-col gap-2">
                <div className="block text-sm font-medium">Project Budget</div>
                <SelectInput
                  value={selectedBudget}
                  id={"budget"}
                  options={budgetData}
                  onChange={(value) => setCustomValue("budget", value)}
                  placeholder="Select your budget"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay="0.65">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <MultiSelectInput
                options={interestOptions}
                selectedOptions={selectedInterests}
                onChange={(value) => setCustomValue("interest", value)}
                label="Select your areas of interest"
                errors={errors.interest}
              />
            </div>
          </FadeIn>
          <FadeIn delay="0.65">
            <MessageInput
              id={"message"}
              label={"Message"}
              register={register}
              errors={errors}
            />
          </FadeIn>
          <FadeIn delay="0.7">
            <div className="w-fit group">
              <ButtonType1
                onClick={handleSubmit(onSubmit)}
                className={"inline-flex items-center justify-center gap-2"}
              >
                <span>Send</span>
                <span className="group-hover:translate-x-2 duration-200 group-hover:scale-105">
                  <IoMdArrowForward />
                </span>
              </ButtonType1>
            </div>
          </FadeIn>
        </div>
      </form>
    </div>
  );
};

export default Contact;
