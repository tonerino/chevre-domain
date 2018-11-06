import * as mongoose from 'mongoose';

import multilingualString from '../schemaTypes/multilingualString';

const safe = { j: true, w: 'majority', wtimeout: 10000 };

/**
 * 券種スキーマ
 */
const schema = new mongoose.Schema(
    {
        _id: String,
        name: multilingualString,
        description: multilingualString,
        alternateName: multilingualString,
        acceptedPaymentMethod: mongoose.SchemaTypes.Mixed,
        availability: String,
        availabilityEnds: Date,
        availabilityStarts: Date,
        availableAtOrFrom: mongoose.SchemaTypes.Mixed,
        price: Number,
        priceCurrency: String,
        eligibleCustomerType: mongoose.SchemaTypes.Mixed,
        eligibleDuration: mongoose.SchemaTypes.Mixed,
        eligibleQuantity: mongoose.SchemaTypes.Mixed,
        eligibleRegion: mongoose.SchemaTypes.Mixed,
        priceSpecification: mongoose.SchemaTypes.Mixed,
        validFrom: Date,
        validThrough: Date,
        nameForManagementSite: String,
        nameForPrinting: String,
        typeOfNote: Number,
        subject: String,
        nonBoxOfficeSubject: String,
        indicatorColor: String
    },
    {
        collection: 'ticketTypes',
        id: true,
        read: 'primaryPreferred',
        safe: safe,
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        toJSON: { getters: true },
        toObject: { getters: true }
    }
);

export default mongoose.model('TicketType', schema).on(
    'index',
    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore next */
    (error) => {
        if (error !== undefined) {
            // tslint:disable-next-line:no-console
            console.error(error);
        }
    }
);
