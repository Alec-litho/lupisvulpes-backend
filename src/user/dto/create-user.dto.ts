import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false })
  login: string;

  @ApiProperty({ required: false })
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: true })
  role: string;
}
