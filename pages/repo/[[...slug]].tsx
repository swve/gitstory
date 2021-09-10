import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import YearCalendar from "../../components/Calendar/YearCalendar";

export default function Repo() {
  const router = useRouter();
  const slug = router.query.slug || [];
  const [year, setYear] = useState(0);
  function redirectTo404() {
    router.push("/404");
  }

  useEffect(() => {
    console.log(slug);
  });

  function handleYear() {
    setYear(Math.floor(1000 + Math.random() * 9000));
  }

  return (
    <>
      <h1 onClick={handleYear}>Slug: {slug[0]}</h1>
      <YearCalendar year={year}></YearCalendar>
    </>
  );
}
