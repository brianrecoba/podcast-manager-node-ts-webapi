import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTranferModel } from "../models/podcast-trasfer-model";



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTranferModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTranferModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
}