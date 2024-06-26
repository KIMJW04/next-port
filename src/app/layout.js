export const metadata = {
  title: "Next.js",
  description: "Next.js를 이용한 포트폴리오 사이트입니다.",
  keywords: ["포트폴리오", "넥스트", "미엔토"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg"></link>
      <body>{children}</body>
    </html>
  );
}
