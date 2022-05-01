import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

export const ManualDispatchHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    throw 'unconfigured route handler: ManualDispatchHandler';
};