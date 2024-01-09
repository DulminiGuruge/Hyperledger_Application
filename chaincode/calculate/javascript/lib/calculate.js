/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Calculate extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const numbers = [
            {
                item1: 1,
                item2: 4,
                total: 5,
            },
            {
                item1: 4,
                item2: 3,
                total: 7,
            },
            {
                item1: 1,
                item2: 2,
                total: 3,
            },
            {
                item1: 9,
                item2: 1,
                total: 10,
            },
            {
                item1: 6,
                item2: 4,
                total: 10,
            },
            {
                item1: 2,
                item2: 4,
                total: 6,
            },
            {
                item1: 1,
                item2: 4,
                total: 5,
            },
        ];

        for (let i = 0; i < numbers.length; i++) {
            //numbers[i].docType = 'numbers';
            //
            await ctx.stub.putState('numbers', Buffer.from(JSON.stringify(numbers[i])));
            console.info('Added <--> ', numbers[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    



    async addValues(ctx, val1, val2) {
        console.info('============= START : Add values ===========');

        let sum = parseInt(val1) + parseInt(val2);

        const numbers = {
            item1 : val1,
           // docType: 'numbers',
            item2: val2,
            total: sum,
        
        };

        await ctx.stub.putState('numbers' , Buffer.from(JSON.stringify(numbers)));
        console.info('============= END : Added values ===========');
    }

    async getCalculations(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

 

}

module.exports = Calculate;
