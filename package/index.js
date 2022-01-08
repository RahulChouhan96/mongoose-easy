function conditionalSort(query, sortCondition, order, normalSortQuery = null, callback) {
    let sortQuery = { priority: order };
    if (normalSortQuery)
        sortQuery = { ...sortQuery, ...normalSortQuery };

    console.log(sortQuery)
    this.aggregate()
        .match(query)
        .addFields({ priority: sortCondition })
        .sort(sortQuery)
        .exec(callback);
}

module.exports = function (schema) {
    schema.statics.conditionalSort = conditionalSort;
}

module.exports.conditionalSort = conditionalSort;