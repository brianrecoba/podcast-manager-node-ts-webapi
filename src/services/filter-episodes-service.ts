import { IncomingMessage } from "http";
import { dataPodcast } from "../data/podcasts-data";
import { PodcastTranferModel } from "../models/podcast-trasfer-model";
import { StatusCode } from "../utils/http-status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTranferModel> => {
    let responseFormat: PodcastTranferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await dataPodcast(queryString);

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;

    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
};