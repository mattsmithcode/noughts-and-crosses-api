import { APIGatewayProxyEvent } from 'aws-lambda';
import { getEventBody, getGameFromEventBody } from './utility';

async function checkWinner(event: APIGatewayProxyEvent)
{
    const body = getEventBody(event);
    const game = getGameFromEventBody(body);

    return response(game.checkWinner());
}

async function nextMove(event: APIGatewayProxyEvent)
{
    const body = getEventBody(event);
    const game = getGameFromEventBody(body);

    return response(game.nextMove());
}

async function validateGrid(event: APIGatewayProxyEvent)
{
    const body = getEventBody(event);
    const game = getGameFromEventBody(body);

    return response(game.isValid());
}

function response(data)
{
    return {
        body: JSON.stringify(data),
        statusCode: 200
    };
}

export { checkWinner, nextMove, validateGrid };
