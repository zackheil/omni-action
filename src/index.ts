// import * as core from '@actions/core'
import { getInput, setFailed } from '@actions/core'
import { routeEvent } from './routes';
import { GitHubActionEvent } from './types';
import { logger as loggerConfig } from './utils';
import { getOctokit } from '@actions/github'

const event = JSON.parse(getInput('context', { required: true })) as GitHubActionEvent;
export const octokit = getOctokit(event.token);
export const serviceName = 'zackbot';

const main = async () => {
    const debug = Boolean(getInput('debug'));
    const logger = loggerConfig(debug);

    logger.info('starting the test-action');
    try {
        await routeEvent(logger, event);
    }
    catch (err) {
        logger.error('An error occurred:', err);
        setFailed(err.message);
    }
};

main();
