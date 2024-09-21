import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CatergoriesService } from './catergories.service';
import { CreateCatergoryDto } from './dto/create-catergory.dto';
import { UpdateCatergoryDto } from './dto/update-catergory.dto';
import { CurrentUser } from 'src/utility/decorators/current-user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { Roles } from 'src/utility/common/user-roles.enum';
import { CatergoryEntity } from './entities/catergory.entity';

@Controller('catergories')
export class CatergoriesController {
  constructor(private readonly catergoriesService: CatergoriesService) {}

  @UseGuards(AuthenticationGuard, AuthorizeGuard([Roles.ADMIN]))
  @Post()
  async create(
    @Body() createCatergoryDto: CreateCatergoryDto,
    @CurrentUser() CurrentUser: UserEntity,
  ): Promise<CatergoryEntity> {
    return await this.catergoriesService.create(
      createCatergoryDto,
      CurrentUser,
    );
  }

  @Get()
  async findAll(): Promise<CatergoryEntity[]> {
    return await this.catergoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.catergoriesService.findOne(+id);
  }

  @UseGuards(AuthenticationGuard, AuthorizeGuard([Roles.ADMIN]))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatergoryDto: UpdateCatergoryDto,
  ): Promise<CatergoryEntity> {
    return await this.catergoriesService.update(+id, updateCatergoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catergoriesService.remove(+id);
  }
}
