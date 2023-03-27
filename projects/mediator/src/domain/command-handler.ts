import { ICommand } from './i-command';
import { IHandler } from './i-handler';

export class CommandHandler {

  private history: ICommand<any, any>[] = [];

  public handle<TRequest, TResponse>(handler: IHandler<TRequest, TResponse>, request: TRequest): TResponse {
    const result = handler.handle(request);

    if (handler instanceof ICommand) {
      this.history.push(handler);
      if (this.history.length > 20) {
        this.history.shift();
      }
    }

    return result;
  }

  public undo(): void {
    const command = this.history.pop();
    command?.undo();
  }
}
