import { GitHubActionEvent } from "../types";
import { BotHelper, ILogger } from "../utils";
import { octokit } from "..";

export const PullRequestCodeHandler = async (logger: ILogger, actionEvent: GitHubActionEvent): Promise<void> => {
    logger.info('Starting PullRequestCodeHandler');

    const {
        repository_owner: owner,
        event,
        token,
        head_ref: ref
    } = actionEvent;

    // TODO: add additional types for all event types
    const pr_number = (event as any).number
    const repo = event.repository.name;

    logger.info(`Running action in ${owner}/${repo}#${pr_number}.`);

    /**
     * We need to fetch the list of files that were changes in the Pull Request
     * and store them in a variable.
     * We use octokit.paginate() to automatically loop over all the pages of the
     * results.
     * Reference: https://octokit.github.io/rest.js/v18#pulls-list-files
     */
    const { data: changedFiles } = await octokit.rest.pulls.listFiles({
        owner,
        repo,
        pull_number: pr_number,
    });


    /**
     * Contains the sum of all the additions, deletions, and changes
     * in all the files in the Pull Request.
     **/
    let diffData = {
        additions: 0,
        deletions: 0,
        changes: 0
    };

    // Testing getting repo content
    // logger.info({ msg: 'inputs for getBranch', owner, repo, branch });
    // const branchData = (await octokit.rest.repos.getBranch({ owner, repo, branch })).data;
    // logger.info(JSON.stringify(branchData, null, 2))

    const branchFiles = (await octokit.rest.repos.getContent({ owner, repo, ref, path: '' })).data;
    logger.info(JSON.stringify(branchFiles, null, 2))

    // Reference for how to use Array.reduce():
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // diffData = changedFiles.reduce((acc, file) => {
    //     acc.additions += file.additions;
    //     acc.deletions += file.deletions;
    //     acc.changes += file.changes;
    //     return acc;
    // }, diffData);

    /**
     * Loop over all the files changed in the PR and add labels according 
     * to files types.
     **/
    // for (const file of changedFiles) {
    //     /**
    //      * Add labels according to file types.
    //      */
    //     const fileExtension = file.filename.split('.').pop();
    //     switch (fileExtension) {
    //         case 'md':
    //             await octokit.rest.issues.addLabels({
    //                 owner,
    //                 repo,
    //                 issue_number: pr_number,
    //                 labels: ['markdown'],
    //             });
    //         case 'js':
    //             await octokit.rest.issues.addLabels({
    //                 owner,
    //                 repo,
    //                 issue_number: pr_number,
    //                 labels: ['javascript'],
    //             });
    //         case 'yml':
    //             await octokit.rest.issues.addLabels({
    //                 owner,
    //                 repo,
    //                 issue_number: pr_number,
    //                 labels: ['yaml'],
    //             });
    //         case 'yaml':
    //             await octokit.rest.issues.addLabels({
    //                 owner,
    //                 repo,
    //                 issue_number: pr_number,
    //                 labels: ['yaml'],
    //             });
    //     }
    // }

    /**
     * Create a comment on the PR with the information we compiled from the
     * list of changed files.
     */
    // const botMadeLastComment = latestComment.user?.login === 'github-actions[bot]' && latestComment.body?.includes('This comment was made by')
    // if (!botMadeLastComment)
    if (false)
        await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: pr_number,
            body: BotHelper.makeComment(
                `This PR has been updated with: \n` +
                ` - ${diffData.changes} changes \n` +
                ` - ${diffData.additions} additions \n` +
                ` - ${diffData.deletions} deletions \n\n\n`
            )
        });
};