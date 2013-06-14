"use strict";

define(['app', 'Shared/FormatHelpers','backgrid'], function () {
    NzbDrone.Cells.FileSizeCell = Backgrid.Cell.extend({

        className: "file-size-cell",

        render: function () {
            var size = this.model.get(this.column.get("name"));
            this.$el.html(NzbDrone.Shared.FormatHelpers.FileSizeHelper(size));
            this.delegateEvents();
            return this;
        }
    });
});
