import { GitHubActionEvent } from "../types";
import { createComment, ILogger } from "../utils";
import * as github from '@actions/github'

export const PullRequestCommentHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting PullRequestCommentHandler');

    const {
        repository_owner: owner,
        repository: repo,
        event,
        token
    } = actionEvent;

    const octokit = github.getOctokit(token);
    const issue_number = event.issue.number;

    let today = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
    const latestComment = (await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number,
        since: today
    })).data.slice(-1)[0];

    logger.info(JSON.stringify(latestComment, null, 2))
    const botMadeLastComment = latestComment.user?.login === 'github-actions[bot]' && latestComment.body?.includes('This comment was made by')
    if (!botMadeLastComment) await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number,
        body: createComment('You said: ' + latestComment.body)
    });
};