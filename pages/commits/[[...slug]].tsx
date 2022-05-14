import Header from "@components/Header/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GitSt } from "@services/gitstory";
import dayjs from "dayjs";
import Loading from "@components/Loading/Loading";
import CommitIcon from "@mui/icons-material/Commit";
import { useSelector, useDispatch } from "react-redux";
import { SelectedDateInterface, updateDate } from "@redux/actions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import FancyRender from "@components/Loading/FancyRender";
import NumbersIcon from "@mui/icons-material/Numbers";
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

  // React State
  const [isLoading, setIsLoading] = useState(true);
  const [dateCommits, setDateCommits] = useState([]);

  async function getDayCommits(selectDate, page) {
    let commits;
    try {
      const GitStory = new GitSt();
      GitStory.init({ client: "github", owner: slug[1], repo: slug[2] });
      let firsthour = dayjs(selectDate).startOf("day").format("YYYY-MM-DDTHH:mm:ssZ");
      let lasthour = dayjs(selectDate).endOf("day").format("YYYY-MM-DDTHH:mm:ssZ");
      commits = await GitStory.getCommitsBetween(firsthour, lasthour, 100, page);
      setDateCommits(commits.data);
      setIsLoading(false);
    } catch (error) {
      // check for 404 errors
      if (error.response.status === 404) {
        router.push("/repo-not-found");
      }
      setIsLoading(true);
    }
  }

  function updateReduxDate() {
    dispatch(
      updateDate({
        day: parseInt(slug[6]),
        month: parseInt(slug[5]),
        year: parseInt(slug[4]),
      })
    );
  }

  useEffect(() => {
    if (router.isReady) {
      // Get Date
      if (slug[3] === "date") {
        let date = new Date(parseInt(slug[4]), parseInt(slug[5]) - 1, parseInt(slug[6]));
        updateReduxDate();
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
          <Header title={`Commits for ${slug[1]}/${slug[2]}`}></Header>
          <RepoBar>
            {" "}
            {slug[1]}/{slug[2]}
          </RepoBar>
          <SubRepoInfo>
            <BackToCalendarBtn>
              <Link href={`/calendar/${slug[0]}/${slug[1]}/${slug[2]}`}>
                <a>
                  <Tooltip title="Back to Calendar">
                    <KeyboardBackspaceIcon sx={{ fontSize: "20px" }} />
                  </Tooltip>
                </a>
              </Link>
            </BackToCalendarBtn>
            <span>
              <InfoIcon sx={{ fontSize: "13px" }}></InfoIcon> Commits on {dayjs(slug[4] + "-" + slug[5] + "-" + slug[6]).format("DD MMMM YYYY")}
            </span>
            <div>
              <NumbersIcon sx={{ fontSize: "13px" }}></NumbersIcon> {dateCommits.length} Commits
            </div>
          </SubRepoInfo>
        </GradientHeader>
        <ListOfCommitsBox>
          <ul>
            {dateCommits.map((commit) => {
              return (
                <FancyRender>
                  <CommitBox key={commit.sha}>
                    <CommitLeftGlobal>
                      <CommitLeftTopInfo>{commit.commit.message.split("\n")[0]}</CommitLeftTopInfo>
                      <CommitLeftSubInfo>
                        <img src={commit.author ? commit.author.avatar_url : ""}></img>{" "}
                        <span>
                          {commit.commit.author.name} on {dayjs(commit.commit.committer.date).toString()}
                        </span>
                      </CommitLeftSubInfo>
                    </CommitLeftGlobal>
                    <CommitRightGlobal>
                      <a target="_blank" href={commit.html_url}>
                        <Tooltip title="See commit in detail, in GitHub">
                          <CommitIcon sx={{ fontSize: 30 }} />
                        </Tooltip>
                      </a>
                      {console.log(commit)}
                      <a target="_blank" href={`https://github.com/${slug[1]}/${slug[2]}/tree/${commit.sha}/`}>
                        <Tooltip title="Travel in time to that commit, in GitHub">
                          <AccessTimeFilledIcon sx={{ fontSize: 30 }} />
                        </Tooltip>
                      </a>
                    </CommitRightGlobal>
                  </CommitBox>
                  <Separator></Separator>
                </FancyRender>
              );
            })}
          </ul>
        </ListOfCommitsBox>
        <Footer></Footer>
      </>
    );
  }
}

const ListOfCommitsBox = styled.div`
  background-color: #171d21e6;
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);
  padding: 30px;
  width: fit-content;
  border-radius: 6px;
  overflow: clip;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);

  width: 85%;
  top: -150px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
`;

const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;

  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);
`;

const RepoBar = styled.div`
  padding-top: 40px;
  font-size: 40px;
  font-weight: bold;
`;

const BackToCalendarBtn = styled.button`
  background-color: #171d21e6;
  color: white;
  border: none;
  padding: 8px;
  height: 36px;
  margin-top: 10px;
  border-radius: 7px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);
`;

const SubRepoInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding: 18px;
  }

  div {
    padding: 18px;
  }
`;

// Commit Box Design
const CommitBox = styled.li`
  list-style: none;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Separator = styled.div`
  width: 8%;
  height: 3px;
  border-radius: 20px;
  margin: auto;
  background-color: #e6e6e60f;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CommitLeftGlobal = styled.div``;
const CommitRightGlobal = styled.div`
  margin-right: 30px;

  a {
    margin-left: 20px;
  }
`;
const CommitLeftTopInfo = styled.div`
  font-size: 19px;
  font-weight: bold;
`;
const CommitLeftSubInfo = styled.div`
  margin-top: 5px;
  opacity: 0.8;
  span {
    font-size: 14px;
  }
  img {
    width: 11px;
    border-radius: 2px;
  }
`;
