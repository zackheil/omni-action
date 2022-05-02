import * as github from '@actions/github'


// export const branchFileSearch = async (token: string, options: { owner: string, repo: string, branch: string, fileNames: string[] }) => {
//     const octokit = github.getOctokit(token);
//     const { owner, repo, branch, fileNames } = options;

//     const getContent = async (path = '') => (await octokit.rest.repos.getContent({ owner, repo, ref: branch, path }))
//         .data as { name: string, path: string, type: 'dir' | 'file' }[];

//     const allFiles = [];
//     const rootFiles = await getContent();

//     const files = rootFiles.filter((v) => v.type !== 'dir')

//     const dirs = rootFiles.filter((v) => v.type === 'dir').
// }