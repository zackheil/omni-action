const serviceName = 'zackbot';

const signature = `\n<sup>This comment was made by ${serviceName}. To view all commands, comment \`man ${serviceName}\`</sup>`

export const createComment = (msg: string) => msg + signature; 