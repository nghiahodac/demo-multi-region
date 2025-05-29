"use client";
import { useRouter } from "next/navigation";

export default function MYPage() {
  const router = useRouter();

  const setLocation = (loc: string) => {
    document.cookie = `location=${loc}; path=/`;
    window.location.href = "/";
  };

  return (
    <>
      <h1>Hello from the MY version of the site 🇲🇾</h1>
      <div className="p-4 space-y-2">
        <button onClick={() => setLocation("my")}>Set location = my</button>
        <button onClick={() => setLocation("vn")}>Set location = vn</button>
        <button onClick={() => setLocation("")}>Clear location</button>
      </div>
    </>
  );
}
