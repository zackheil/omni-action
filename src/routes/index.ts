import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

import { IssueHandler } from "./on-issue";
import { PullRequestCodeHandler } from "./on-pr-code";
import { PullRequestCommentHandler } from "./on-pr-comment";


// Convert the sane route handler file names that sound event-driven to the actual event names GitHub provides.
export const routeEvent = async (logger: ILogger, actionEvent: GitHubActionEvent) => {
    const { event_name, event } = actionEvent;

    logger.info(`routing event: ${event_name}`);

    switch (event_name) {
        case 'issue_comment':
            // Actual issue comment handler
            if (event.comment?.html_url?.includes('/issues/')) await IssueHandler(logger, actionEvent);

            // Pull request comment handler
            else if (event.comment?.html_url?.includes('/pull/')) await PullRequestCommentHandler(logger, actionEvent);

            else throw new Error(`unconfigured route event: ${event_name} derivative`)
            break;

        case 'pull_request':
            await PullRequestCodeHandler(logger, actionEvent);
            break;

        default: throw new Error(`unconfigured route event: ${event_name}`);
    }
}