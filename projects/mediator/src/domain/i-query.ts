import { IResponse } from './response';
import { IHandler } from './i-handler';
import { IRequest } from './request';

export abstract class IQuery<TRequest extends IRequest<TResponse>, TResponse extends IResponse>
    extends IHandler<TRequest, TResponse> {
}
