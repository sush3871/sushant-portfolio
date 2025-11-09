"use client"

import { useState } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

import MemojiWithImac from "../../public/memoji-with-imac.svg"
import Title from "../title"
import { Button } from "../ui/button"

// ✅ Zod validation schema
const formSchema = z.object({
  name: z.string().min(2, "This field is required"),
  email: z.string().email("Enter a valid email"),
  number: z.string().min(10, "Enter a valid number"),
  subject: z.string().min(3, "This field is required"),
  message: z.string().min(5, "This field is required"),
})

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (result.success) {
        toast("Message Sent Successfully 🎉", {
          description: "Your message has been delivered.",
          className: "bg-green-600 text-white border-none",
        })
        reset()
      } else {
        toast("Failed to Send Message ❌", {
          description: "Please try again later.",
          className: "bg-red-600 text-white border-none",
        })
      }
    } catch (error) {
      toast("Something Went Wrong ⚠️", {
        description: "Please check your connection or try again later.",
        className: "bg-red-600 text-white border-none",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div
        id="contact-me"
        className="relative main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 dark:bg-white rounded-[30px] md:rounded-[40px] lg:rounded-[50px]">
          <Title title="Contact Me" color="text-black" />

          {/* ✅ Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full flex flex-col items-start gap-8"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
              {/* Name */}
              <div className="w-full flex flex-col items-start gap-2">
                <div
                  className={`w-full flex items-center dark:bg-secondary bg-theme-white 
                  dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white 
                  gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 
                  rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl 
                  ${errors.name ? "error-input border-red-500" : ""}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="md:w-8 md:h-8 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 
                      0 3.75 3.75 0 017.5 0zM4.501 
                      20.118a7.5 7.5 0 0114.998 
                      0A17.933 17.933 0 0112 21.75c-2.676 
                      0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 pl-6 text-xs sm:text-sm lg:text-base">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full flex flex-col items-start gap-2">
                <div
                  className={`w-full flex items-center dark:bg-secondary bg-theme-white 
                  dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white 
                  gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 
                  rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl 
                  ${errors.email ? "error-input border-red-500" : ""}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="md:w-8 md:h-8 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 
                      0 01-1.183 1.981l-6.478 
                      3.488M2.25 9v.906a2.25 
                      2.25 0 001.183 1.981l6.478 
                      3.488m8.839 2.51l-4.66-2.51m0 
                      0l-1.023-.55a2.25 2.25 0 00-2.134 
                      0l-1.022.55m0 0l-4.661 2.51m16.5 
                      1.615a2.25 2.25 0 01-2.25 
                      2.25h-15a2.25 2.25 0 
                      01-2.25-2.25V8.844a2.25 
                      2.25 0 011.183-1.98l7.5-4.04a2.25 
                      2.25 0 012.134 0l7.5 4.04a2.25 
                      2.25 0 011.183 1.98V19.5z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 pl-6 text-xs sm:text-sm lg:text-base">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Number */}
              <div className="w-full flex flex-col items-start gap-2">
                <div
                  className={`w-full flex items-center dark:bg-secondary bg-theme-white 
                  dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white 
                  gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 
                  rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl 
                  ${errors.number ? "error-input border-red-500" : ""}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="md:w-8 md:h-8 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 
                      0 006 3.75v16.5a2.25 2.25 
                      0 002.25 2.25h7.5A2.25 2.25 
                      0 0018 20.25V3.75a2.25 2.25 
                      0 00-2.25-2.25H13.5m-3 
                      0V3h3V1.5m-3 0h3m-3 
                      18.75h3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Mobile No."
                    className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none"
                    {...register("number")}
                  />
                </div>
                {errors.number && (
                  <p className="text-red-500 pl-6 text-xs sm:text-sm lg:text-base">
                    {errors.number.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="w-full flex flex-col items-start gap-2">
                <div
                  className={`w-full flex items-center dark:bg-secondary bg-theme-white 
                  dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white 
                  gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 
                  rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl 
                  ${errors.subject ? "error-input border-red-500" : ""}`}
                >
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none"
                    {...register("subject")}
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-500 pl-6 text-xs sm:text-sm lg:text-base">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2 w-full flex flex-col items-start gap-2">
                <textarea
                  rows="7"
                  placeholder="Message *"
                  className={`w-full dark:bg-secondary bg-theme-white dark:bg-opacity-5 
                  bg-opacity-5 dark:text-theme-secondary text-theme-white gap-5 border 
                  border-theme-secondary border-opacity-5 rounded-3xl px-4 sm:px-6 md:px-6 
                  lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl py-3.5 sm:py-4 md:py-5 lg:py-6 
                  outline-none ${errors.message ? "error-input border-red-500" : ""}`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 pl-6 text-xs sm:text-sm lg:text-base">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* ✅ Submit Button */}
            <Button
            type="submit"
            disabled={loading}
            className="mt-2 px-[30px] py-[30px] text-black bg-theme-primary rounded-[50px] hover:bg-theme-primary-800 transition-all flex items-center gap-2 cursor-pointer"
            >
            <span>{loading ? "Sending..." : "Send Message"}</span>
            <div className="shrink-0">
                {/* Simple arrow icon */}
                <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </div>
            </Button>


            
          </form>
        </div>

        <Image
          src={MemojiWithImac}
          alt="Memoji with IMac"
          width={435}
          height={435}
          className="absolute bottom-0 right-2 sm:right-5 lg:right-16 w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto"
        />
      </div>
    </div>
  )
}
