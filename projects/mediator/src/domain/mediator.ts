import { Injectable, Injector } from '@angular/core';
import { CommandHandler } from './command-handler';
import { IHandler } from './i-handler';

@Injectable({
  providedIn: 'root'
})
export class Mediator {

  private currentHandler: CommandHandler | undefined;

  private commandHandlers: Map<string, CommandHandler> = new Map<string, CommandHandler>();

  constructor(
      private injector: Injector
  ) {
  }

  public setActiveComponent(component: string): void {
    const hasHandler = this.commandHandlers.has(component);
    if (!hasHandler) {
      this.currentHandler = new CommandHandler();
      this.commandHandlers.set(component, this.currentHandler);
    } else {
      this.currentHandler = this.commandHandlers.get(component);
    }
  }

  public undo(): void {
    this.currentHandler!.undo();
  }

  public send<TRequest, TResponse>(handler: IHandler<TRequest, TResponse>, request: TRequest): TResponse {
    handler.addInjector(this.injector);
    return this.currentHandler!.handle(handler, request);
  }
}
