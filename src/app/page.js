"use client";
import React from "react";
import { useState } from "react";
import Introduction from "@/components/Introduction";
import AfterIntroduction from "@/components/AfterIntroduction";
import HomePage from "./HomePage";
import { ToastContainer,Bounce } from "react-toastify";

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <main>
      {step === 0 && (
        <Introduction onFinish={() => setTimeout(() => setStep(1), 600)} />
      )}
      {step === 1 && <AfterIntroduction onFinish={() => setStep(2)} />}
      {step === 2 && <HomePage />}
    </main>
  );
}