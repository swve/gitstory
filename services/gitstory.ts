import GitStory from "gitstorykit";
import Cookies from "js-cookie";

interface ParamsInterface {
  client: any;
  owner: string;
  repo: string;
  auth?: string;
}



export class GitSt {
  private config;
  private client: string;
  private gitstory;
  private github_token_cookie = Cookies.get("github_at");

  // Initialize the gitstory object
  init(params: ParamsInterface) {
    this.client = params.client;
    this.config = {
      owner: params.owner,
      repo: params.repo,
      auth: this.github_token_cookie != null ? this.github_token_cookie : params.auth,
    };

    this.gitstory = new GitStory(this.client);
  }

  public async yearsActive() {
    this.gitstory.init(this.config);
    let years = await this.gitstory.yearsActive();
    return years;
  }

  public async getCommitsBetween(startDate: string, endDate: string, per_page: number, page: number) {
    this.gitstory.init(this.config);
    let commits = await this.gitstory.getCommitsBetweenDates(startDate, endDate, per_page, page);
    return commits;
  }
}
