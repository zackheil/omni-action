import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

export const PullRequestCommentHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting PullRequestCommentHandler');
    throw 'unconfigured route handler: PullRequestCommentHandler';
};