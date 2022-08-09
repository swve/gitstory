const repos = [
  "tryghost/ghost",
  "vercel/next.js",
  "facebook/react",
  "tiangolo/fastapi",
  "tiangolo/typer",
  "mongodb/mongo",
  "swve/framestack",
  "swve/gitstory",
  "framer/motion",
  "torvalds/linux",
  "apple/swift",
  "chromium/chromium",
  "twbs/bootstrap",
  "facebook/react-native",
  "python/cpython",
];

export function getExampleRepo() {
  return repos[Math.floor(Math.random() * repos.length)];
}
