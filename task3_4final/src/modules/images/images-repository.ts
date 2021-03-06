import {injectable, inject} from 'inversify';

import {BaseRepository} from '../../core/base-repository';

import {dbTokens} from '../../providers/database/tokens';
import {ImageDboModel} from '../../providers/database/models/images';

import {ImageModel} from './models/image-model';
import {ImageModelDboMapper} from './mapping/image-modeldbo-mapper';
import {imageTokens} from './tokens';

export interface IImagesRepository {
    uploadImage(id: guidV4, imageModel: ImageModel): Promise<ImageDboModel>;
}

@injectable()
export class ImagesRepository extends BaseRepository
    implements IImagesRepository {
    @inject(dbTokens.userModel) imageRepo: typeof ImageDboModel; // remake
    @inject(imageTokens.ImageModelDboMapper) mapper: ImageModelDboMapper;

    public async uploadImage(
        id: guidV4,
        imageModel: ImageModel,
    ): Promise<ImageDboModel> {
        const created = await this.imageRepo.create({
            id: id,
            fileName: imageModel.fileName,
            mimeType: imageModel.mimeType,
            data: imageModel.data,
        });

        return created;
    }
}
