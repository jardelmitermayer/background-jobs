import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private mailService: MailerService) { }

  @Post('/')
  createUser(@Body() createUser: CreateUserDTO) {
    this.mailService.sendMail({
      to: createUser.email,
      from: "Equipe Code/Drops <codedrops@codedrops.com.br>",
      subject: "Seja bem vindo(a)!",
      text: `Olá ${createUser.name}, seu cadastro foi realizado com sucesso. Seja bem vindo(a)!`
    })
    return createUser;
  }
}
