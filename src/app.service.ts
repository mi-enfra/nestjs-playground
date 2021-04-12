import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(version, query): Object {
    return {
      v: version,
      query
    };
  }
}
