export abstract class Command<Type, Params> {
  abstract call(params: Params): Promise<CommandResult<Type>>;
}
export class CommandResult<T> {
  message: String;
  exception: any;
  data: T;
  constructor(message: String, exception: any, data: T) {
    this.message = message;
    this.exception = exception;
    this.data = data;
  }

  public get hasError(): boolean {
    return this.exception !== null;
  }
}
