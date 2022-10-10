export class ApiResult<T> {
  message: String;
  code: String;
  data: T | any;
  error: boolean;

  constructor(message: String, code: String, data: T, error: boolean) {
    this.message = message;
    this.code = code;
    this.data = data;
    this.error = error;
  }
}
