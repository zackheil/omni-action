import chalk from "chalk";

export const log = {
    info: (...data: any[]) => console.log(chalk.blue('[info]:'), ...data),
    warn: (...data: any[]) => console.warn(chalk.yellow('[warn]:'), ...data),
    error: (...data: any[]) => console.error(chalk.red('[error]:'), ...data),
}