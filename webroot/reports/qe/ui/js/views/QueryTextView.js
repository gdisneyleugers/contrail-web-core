/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

define([
    "core-constants",
    "query-form-view",
    "core-basedir/reports/qe/ui/js/common/qe.utils"
], function(coreConstants, QueryFormView, qeUtils) {
    var QueryTextView = QueryFormView.extend({
        render: function() {
            var queryPageTmpl = contrail.getTemplate4Id(coreConstants.TMPL_QUERY_TEXT),
                viewConfig = this.attributes.viewConfig,
                queryFormAttributes = contrail.checkIfExist(viewConfig.queryFormAttributes) ? viewConfig.queryFormAttributes : {};

            this.$el.append(queryPageTmpl);

            this.$el.find(".queryText").append(qeUtils.formatEngQuery(queryFormAttributes.engQueryStr));
        }
    });

    return QueryTextView;
});
