interface Color {
    [key: string]: string;
}

export class Logger {

    public debugMode: boolean = false;

    private color: Color = {
        fgBlack   : "\x1b[30m",
        fgRed     : "\x1b[31m",
        fgGreen   : "\x1b[32m",
        fgYellow  : "\x1b[33m",
        fgBlue    : "\x1b[34m",
        fgMagenta : "\x1b[35m",
        fgCyan    : "\x1b[36m",
        fgWhite   : "\x1b[37m",
    };

    public getDate(): string {
        const date = new Date();
        const options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
        return "\x1b[0m[ " + date.toLocaleString("FR-ca", options) + " ]   - ";
    }

    public log(message: any): void {
        console.log(this.formatOutput(this.color.fgWhite), "[LOG]     ", message, "\x1b[0m");
    }

    public info(message: any): void {
        console.log(this.formatOutput(this.color.fgMagenta), "[INFO]    ", message, "\x1b[0m");
    }

    public warn(message: any): void {
        console.log(this.formatOutput(this.color.fgYellow), "[INFO]    ", message, "\x1b[0m");
    }

    public success(message: any): void {
        console.log(this.formatOutput(this.color.fgGreen), "[SUCCESS] ", message, "\x1b[0m");
    }

    public error(message: any): void {
        console.log(this.formatOutput(this.color.fgRed), "[ERROR]   ", message, "\x1b[0m");
    }

    public debug(message: any): void {
        if (this.debugMode) {
            console.log(this.formatOutput(this.color.fgCyan), "[DEBUG]   ", message, "\x1b[0m");
        }
    }

    private formatOutput(color: string): string {
        return this.getDate() + color;
    }
}
