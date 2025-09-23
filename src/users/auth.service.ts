import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException(`User with email ${email} already exists`);
    }

    // Hash the users password

    // Create a new user and save it

    // return the user
  }

  signin() {}
}
