import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { UserDto } from '../dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    // Run something before a request is handled
    // by the request handler
    // console.log('I am running before a handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log('I am run before response is sent out', data);

        return plainToInstance(UserDto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }

}
