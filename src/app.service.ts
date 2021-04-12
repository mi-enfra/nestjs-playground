import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(version): Object {
    return {
      v: version
    };
  }
}
