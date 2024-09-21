import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatergoryDto } from './dto/create-catergory.dto';
import { UpdateCatergoryDto } from './dto/update-catergory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatergoryEntity } from './entities/catergory.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class CatergoriesService {
  constructor(
    @InjectRepository(CatergoryEntity)
    private readonly categoryRepository: Repository<CatergoryEntity>,
  ) {}

  async create(
    createCatergoryDto: CreateCatergoryDto,
    CurrentUser: UserEntity,
  ): Promise<CatergoryEntity> {
    const category = this.categoryRepository.create(createCatergoryDto);
    category.addedBy = CurrentUser;
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<CatergoryEntity[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<CatergoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { id: id },
      relations: { addedBy: true },
      select: {
        addedBy: { id: true, name: true, email: true },
      },
    });
    if (!category) throw new NotFoundException('Category not found.');
    return category;
  }

  async update(
    id: number,
    fields: Partial<UpdateCatergoryDto>,
  ): Promise<CatergoryEntity> {
    const catergory = await this.findOne(id);
    if (!catergory) throw new NotFoundException('Category not found');
    Object.assign(catergory, fields);
    return await this.categoryRepository.save(catergory);
  }

  remove(id: number) {
    return `This action removes a #${id} catergory`;
  }
}
