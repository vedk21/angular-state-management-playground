import { Injectable } from '@nestjs/common';
import { Message } from '@angular-state-management-playground/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
