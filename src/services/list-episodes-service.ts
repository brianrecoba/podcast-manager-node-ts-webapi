import { dataPodcast } from "../data/podcasts-data";
import { PodcastTranferModel } from "../models/podcast-trasfer-model";
import { StatusCode } from "../utils/http-status-code";


export const serviceListEpisodes = async (): Promise<PodcastTranferModel> => {


    let responseFormat: PodcastTranferModel = {
        statusCode: 0,
        body: []
    }


    const data = await dataPodcast();

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
        responseFormat.body = data;

    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }



    return responseFormat;
};