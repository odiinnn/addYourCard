import {nanoid} from 'nanoid';
import {prisma} from '../tools/Prisma';
import * as PrismaClient from '@prisma/client';

const REQUEST_ID_SIZE = 48;

async function addCardData(input: {
        prisma: PrismaClient.PrismaClient,
        cardNumber: number,
        expirationDate: string,
        CVV: number,
        amount: number,
        requestId: string
    }
) {
    const {cardNumber, expirationDate, CVV, amount, requestId} = input;
    await input.prisma.cardData.create({
        data: {
            cardNumber,
            expirationDate,
            CVV,
            amount,
            requestId
        }
    });

}

const mutation = {
    Mutation: {
        echo: (_parent: unknown, args: { text: string }) => {
            console.log({args});
            return args.text;
        },
        addCardCredits: async (_parent: unknown, args: { cardNumber: number, expirationDate: string, CVV: number, amount: number }) => {
            const requestId = nanoid(REQUEST_ID_SIZE);
            console.log({args});
            const {cardNumber, expirationDate, CVV, amount} = args;
            await addCardData({
                prisma,
                cardNumber,
                expirationDate,
                CVV,
                amount,
                requestId
            });
            return {
                requestId: requestId,
                amount: args.amount
            };
        }
    }
};

export default mutation;
