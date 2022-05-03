import Header from "@components/Header/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import YearCalendar from "@components/Calendar/YearCalendar";
import { GitSt } from "@services/gitstory";
import Loading from "@components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { SelectedDateInterface, updateDate } from "@redux/actions";
import CircularProgress from "@mui/material/CircularProgress";
import FancyRender from "@components/Loading/FancyRender";
import Footer from "@components/Footer/Footer";

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
  }, [isLoading, router.query, router.isReady]);

  if (isLoading) {
    return (
      <>
        <GradientHeader>
          <Header title={`${slug[1]}/${slug[2]}`}></Header>
          <RepoBar>
            {slug[1]}/{slug[2]} <CircularProgress style={{ color: "white" }} size={30} thickness={6} />
          </RepoBar>
        </GradientHeader>
      </>
    );
  } else {
    return (
      <>
        <GradientHeader>
        <Header title={`${slug[1]}/${slug[2]}`}></Header>
          <RepoBar>
            {slug[1]}/{slug[2]}
          </RepoBar>
            <Years>
              {activeYears.map((yearElement) => {
                return (
                  <>
                    <YearBox
                      key={yearElement + "-" + Math.random()}
                      onClick={() => {
                        setCalendarYear(yearElement);
                      }}
                      selected={year == yearElement ? true : false}
                    >
                      {" "}
                      {yearElement}
                    </YearBox>
                  </>
                );
              })}
            </Years>
        </GradientHeader>
        <YearCalendar year={year}></YearCalendar>
        <Footer></Footer>
      </>
    );
  }
}

const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);
  //background: linear-gradient(180deg, #13161a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #280b7d 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
`;

const RepoBar = styled.div`
  padding-top: 40px;
  font-size: 40px;
  font-weight: bold;
`;

const Years = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const YearBox: any = styled.div`
  background-color: ${(props: any) => (props.selected ? "white" : null)};
  color: ${(props: any) => (props.selected ? "black" : "white")};

  cursor: pointer;
  transition: 0.2s;
  margin-right: 10px;
  padding: 8px;
  
  border-radius: 5px;

  &:hover {
    background-color: ${(props: any) => (props.selected ? "white" : "#101417")};
    color: ${(props: any) => (props.selected ? "black" : "white")};
  }
`;
