import GitStory from "gitstorykit";

interface ParamsInterface {
  client: any;
  owner: string;
  repo: string;
  sha: string;
  token?: string;
}

export class GitSt {
  private config;
  private client: string;
  private gitstory;

  // Initialize the gitstory object
  init(params: ParamsInterface) {
    this.client = params.client;
    this.config = {
      owner: params.owner,
      repo: params.repo,
      token: params.token,
      sha: params.token,
    };
    this.gitstory = new GitStory(this.client);
  }

  public async yearsActive() {
    console.log("testing..");
    console.log(this.config);

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
