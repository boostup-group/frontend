'use client'
import MainLayout from "@/Layout"
import { useContext, useEffect } from "react";
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { ThemeOptionsAPI } from "@/Utils/AxiosUtils/API";


export default function RootLayout({ children, params: { lng } }) {

  

  // console.log('themeOption',themeOption)
  // useEffect(() => {
  //   document.documentElement.style.setProperty('--theme-color', '#417394');
  //   // refetch();
  //   return () => {
  //     document.documentElement.style.removeProperty('--theme-color');
  //   };
  // }, []);
  return (
    <>
      <MainLayout lng={lng}>
        {children}
      </MainLayout>
    </>
  )
}
