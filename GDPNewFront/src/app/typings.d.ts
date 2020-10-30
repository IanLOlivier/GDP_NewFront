declare var process: Process;

interface Process {
    env: Env
}

interface Env {
    SERVER: string
}

interface GlobalEnvironment{
    process: Process;
}