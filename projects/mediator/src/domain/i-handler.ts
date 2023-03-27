import { Injector } from '@angular/core';

export abstract class IHandler<TRequest, TResponse> {

  public injector!: Injector;

  public addInjector(injector: Injector): void {
    this.injector = injector;
  }

  public abstract handle(request: TRequest): TResponse;
}
