declare module 'create-jest-runner' {
  interface Test {
    path: string
    context: {
      config: unknown
      moduleMap: {
        getRawModuleMap: Function
      }
    }
  }
  interface JestRunner {
    runTests(
      tests: unknown,
      watcher: unknown,
      onStart: unknown,
      onResult: unknown,
      onFailure: unknown,
      options: unknown
    ): Test[]
  }

  interface RunnerInput {
    testPath: string
  }

  interface Pass {
    start: Date
    end: Date
    test: string
  }

  interface Fail {
    start: Date
    end: Date
    test: string
    errorMessage: string
  }

  export function JestRunnerBuilder(input: RunnerInput): Pass | Fail
  export function createJestRunner(runPath: string, getExtraOptions?: Function): JestRunner
}
