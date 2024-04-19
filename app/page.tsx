"use client"
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(()=>{
    redirect("/home")
  })
  return (
    <>
    </>
  );
}
