/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

define([
    "lodash",
    "core-constants",
    "query-form-model",
    "core-basedir/reports/qe/ui/js/common/qe.model.config"
], function (_, coreConstants, QueryFormModel, qeModelConfig) {
    var ObjectLogsFormModel = QueryFormModel.extend({

        defaultSelectFields: [],

        constructor: function (modelConfig, queryReqConfig) {
            var defaultConfig = qeModelConfig.getQueryModelConfig(coreConstants.QE_OL_DEFAULT_MODEL_CONFIG);

            var modelData = _.merge(defaultConfig, modelConfig);

            _.merge({
                chunkSize: coreConstants.QE_RESULT_CHUNK_SIZE_10K
            }, queryReqConfig);

            QueryFormModel.prototype.constructor.call(this, modelData, queryReqConfig);

            return this;
        },

        isTableNameAvailable: function () {
            var tableName = this.table_name();

            return !(tableName === null || tableName === "");
        },
    });

    return ObjectLogsFormModel;
});
