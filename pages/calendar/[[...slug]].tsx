import Header from "@components/Header/InsideHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import YearCalendar from "@components/Calendar/YearCalendar";
import { GitSt } from "@services/gitstory";
import Loading from "@components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { SelectedDateInterface, updateDate } from "@redux/actions";

interface RootState {
  selectedDate: SelectedDateInterface;
}

export default function Repo() {
  const router = useRouter();
  const slug = router.query.slug || [];

  // Redux
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.selectedDate);

  const currentYear = state.year;
  const [year, setYear] = useState(currentYear);

  // React State
  const [activeYears, setActiveYears] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getActiveYears() {
    let active_years;
    try {
      const GitStory = new GitSt();
      GitStory.init({
        client: "github",
        owner: slug[1],
        repo: slug[2],
      });
      active_years = await GitStory.yearsActive();
    } catch (error) {
      //router.push("/error/404");
      console.log("TODO: Redirect to 404");
      console.log(error);
    }
    setActiveYears(active_years);
    setIsLoading(false);
  }

  function setCalendarYear(year: number) {
    setYear(year);
  }

  useEffect(() => {
    if (router.isReady) {
      getActiveYears();
    }
  }, [isLoading, router.isReady]);

  if (isLoading) {
    return (
      <>
        <GradientHeader>
          <Header></Header>
          <RepoBar>
            {slug[1]}/{slug[2]}
          </RepoBar>
          <Loading></Loading>
        </GradientHeader>
      </>
    );
  } else {
    return (
      <>
        <GradientHeader>
          <Header></Header>
          <RepoBar>
            {slug[1]}/{slug[2]}
          </RepoBar>
          <Years>
            {activeYears.map((yearElement) => {
              return (
                <b
                  key={yearElement}
                  onClick={() => {
                    setCalendarYear(yearElement);
                  }}
                >
                  {yearElement} {year == yearElement ? "selected" : null}
                </b>
              );
            })}
          </Years>
        </GradientHeader>
        <YearCalendar year={year}></YearCalendar>
      </>
    );
  }
}

const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;

  background: linear-gradient(180deg, #13161a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #280b7d 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
`;

const RepoBar = styled.div`
  padding-top: 40px;
  font-size: 40px;
  font-weight: bold;
`;

const Years = styled.div`
  padding-top: 30px;
  b {
    padding-right: 20px;
  }
`;
