import { useRouter } from "next/router";
import { useEffect } from "react";
import Calendar from "../../components/Calendar/calendar";

export default function Repo() {
  const router = useRouter();
  const slug = router.query.slug || [];

  function redirectTo404() {
    router.push("/404");
  }

  useEffect(() => {
    console.log(slug);
  });

  return (
    <>
      <h1>Slug: {slug[0]}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Calendar date="1998-09-08" />
        <Calendar date="2012-09-08" />
        <Calendar date="2005-09-08" />
      </div>
    </>
  );
}
