import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import User from '../entity/User';
import { bucketName, region } from '../config/s3.config';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    private configService: ConfigService,
  ) {
  }

  async uploadFile(file: Buffer, filename: string, id: number) {
    const accessKeyId = this.configService.get('AWS_ACCESS_KEY');
    const secretAccessKey = this.configService.get('AWS_SECRET_ACCESS_KEY');

    const s3 = new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    await s3.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: filename,
      Body: file,
    }));

    const newAvatar = { avatar: `https://${bucketName}.s3.${region}.amazonaws.com/${filename}` };
    await this.repository.update({ id }, newAvatar);

    return newAvatar;
  }

  async update(id: number, user: User) {
    const { email, ...updatedUser } = user;
    await this.repository.update({ id }, updatedUser);
    return `Successfully updated a #${id} user, email ${email}`;
  }

  async remove(id: number) {
    await this.repository.delete({ id });
    return `Successfully removed a #${id} user`;
  }
}
