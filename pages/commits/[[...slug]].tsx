import Header from "@components/Header/InsideHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GitSt } from "@services/gitstory";
import dayjs from "dayjs";
import Loading from "@components/Loading/Loading";

export default function Repo() {
  const router = useRouter();
  const slug = router.query.slug || [];

  // React State
  const [isLoading, setIsLoading] = useState(true);
  const [dateCommits, setDateCommits] = useState([]);

  async function getDayCommits(selectDate, page) {
    let commits;
    try {
      const GitStory = new GitSt();
      GitStory.init({ client: "github", owner: slug[1], repo: slug[2], sha: "master" });
      let firsthour = dayjs(selectDate).startOf("day").format("YYYY-MM-DDTHH:mm:ssZ");
      let lasthour = dayjs(selectDate).endOf("day").format("YYYY-MM-DDTHH:mm:ssZ");
      commits = await GitStory.getCommitsBetween(firsthour, lasthour, 100, page);
      console.log(commits.data);
      setDateCommits(commits.data);
    } catch (error) {
      console.log("TODO: Redirect to 404");
      console.log(error);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      setIsLoading(false);

      // Get Date
      if (slug[3] === "date") {
        let date = new Date(parseInt(slug[4]), parseInt(slug[5]) - 1, parseInt(slug[6]));
        getDayCommits(date, 0);
      } else {
        alert("error");
      }
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
          <BackToCalendarBtn>
            <a href={`/calendar/${slug[0]}/${slug[1]}/${slug[2]}`}>Back to Calendar</a>
          </BackToCalendarBtn>
        </GradientHeader>
        <ListOfCommitsBox>
          <ul>
            {dateCommits.map((commit) => {
              return (
                <li key={commit.sha}>
                  {commit.commit.author.name} : {commit.commit.message.split("\n")[0]} (date : {commit.commit.committer.date}){" "}
                </li>
              );
            })}
          </ul>
        </ListOfCommitsBox>
      </>
    );
  }
}

const BackToCalendarBtn = styled.button`
  background-color: #171d21e6;
  color: white;
  border: none;
  padding: 8px;
  margin-top: 10px;
  border-radius: 7px;
`;

const ListOfCommitsBox = styled.div`
  background-color: #171d21e6;
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);
  padding: 10px;
  width: fit-content;
  border-radius: 6px;
  overflow: clip;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);

  width: 85%;
  top: -200px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

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
