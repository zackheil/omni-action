import { octokit } from "..";
import { GitHubActionEvent } from "../types";
import { BotHelper, ILogger } from "../utils";
import { getOctokit } from '@actions/github'

export const PullRequestCommentHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting PullRequestCommentHandler');

    const {
        repository_owner: owner,
        event,
        token
    } = actionEvent;

    const issue_number = event.issue.number;
    const repo = event.repository.name;

    let today = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
    const latestComment = (await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number,
        since: today
    })).data.slice(-1)[0];

    const actionOcto = getOctokit(actionEvent.wfToken).rest.actions;

    logger.info(JSON.stringify(latestComment, null, 2))
    const botMadeLastComment = latestComment.user?.login === 'github-actions[bot]' && latestComment.body?.includes('This comment was made by')
    if (latestComment.body?.toLowerCase().includes('zackbot publish beta')) {
        logger.info(`triggering workflow for: ${owner}/${repo}`)
        await actionOcto.createWorkflowDispatch({
            owner,
            repo: 'omni-action',
            ref: 'main',
            workflow_id: 'update-version.yml',
            inputs: {
                version: '0.5.10-beta2',
                tag: 'beta'
            },
        })
    }
    else if (!botMadeLastComment) await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number,
        body: BotHelper.makeComment('You said: ' + latestComment.body)
    });


};