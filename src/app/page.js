"use client";
import React from 'react';
import { useState } from 'react';
import Introduction from "@/components/Introduction";
import AfterIntroduction from "@/components/AfterIntroduction";

export default function Home() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <main>
     {!showAfter && (
        <Introduction
          onFinish={() => {
            setTimeout(() => setShowAfter(true), 600);
          }}
        />
      )}
      {showAfter && <AfterIntroduction />}
    </main>
  );
}