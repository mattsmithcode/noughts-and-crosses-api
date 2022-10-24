import { Game } from '@mattsmithcode/noughts-and-crosses';
import { APIGatewayProxyEvent } from 'aws-lambda';

function getEventBody(event: APIGatewayProxyEvent): string
{
    if (!event.isBase64Encoded)
        return event.body;

    return Buffer
        .from(event.body, 'base64')
        .toString();
}

function getGameFromEventBody(body: string): Game
{
    const grid = JSON.parse(body);
    return new Game(grid);
}

export { getEventBody, getGameFromEventBody };
