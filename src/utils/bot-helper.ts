import { GitHubActionEvent } from "../types";

const serviceName = 'zackbot';
const signature = `\n<sup>This comment was made by **${serviceName}**. To view all commands, comment \`${serviceName} help\`</sup>`;
export const BotHelper = {
    isAuthorized: (comment: GitHubActionEvent['event']['comment']) =>
        (comment.author_association === 'OWNER') || (comment.author_association === 'COLLABORATOR')
    ,
    makeComment: (msg: string) => msg + signature,
    // TODO:
    getState: (event: GitHubActionEvent) => { },
}