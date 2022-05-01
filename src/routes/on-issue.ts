import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

export const IssueHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    throw 'unconfigured route handler: IssueHandler';
};