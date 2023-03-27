import { Observable } from 'rxjs';
import { IHandler } from './i-handler';
import { IResponse } from './response';
import { IRequest } from './request';

export abstract class ICommand<TRequest extends IRequest<TResponse>, TResponse extends IResponse>
    extends IHandler<TRequest, TResponse> {

  public abstract undo(): Observable<void>;
}
