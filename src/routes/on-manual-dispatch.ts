import { GitHubActionEvent } from "../types";
import { ILogger } from "../utils";

export const ManualDispatchHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting ManualDispatchHandler');
    throw new Error('unconfigured route handler: ManualDispatchHandler');
};