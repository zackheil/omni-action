import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

export const IssueHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting IssueHandler');
    throw new Error('unconfigured route handler: IssueHandler');
};