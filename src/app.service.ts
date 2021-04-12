import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(version): string {
    return `v${version}`;
  }
}
