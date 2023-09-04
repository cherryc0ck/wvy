import localFont from "next/font/local";
import { PropsWithChildren } from "react";

import { AppProvider, StyledRegistry } from "@/lib";
import { Header, Footer } from "@/components/layout";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/pretendard/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

// 작성 필요
export const metadata = {
  // title: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  // description: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  // openGraph: {
  //   title: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  //   description: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  //   url: "https://cround-client.vercel.app",
  //   siteName: "Cround",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary",
  //   title: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  //   description: "크라운드 - 크리에이터를 위한 커피챗 서비스",
  // },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      ></meta>
      <body>
        <StyledRegistry>
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
