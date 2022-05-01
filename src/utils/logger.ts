export interface ILogger {
    debug: (...data: any[]) => void;
    info: (...data: any[]) => void;
    warn: (...data: any[]) => void;
    error: (...data: any[]) => void;
}

export const logger = (debug?: boolean): ILogger => ({
    debug: debug ? (...data: any[]) => console.log('[debug]:', ...data) : (...data: any[]) => { },
    info: (...data: any[]) => console.log('[info]:', ...data),
    warn: (...data: any[]) => console.warn('[warn]:', ...data),
    error: (...data: any[]) => console.error('[error]:', ...data),
});
