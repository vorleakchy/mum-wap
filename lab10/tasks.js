$(document).ready(() => {
    $('[required="required"]')
        .prev('label')
        .append('<span>*</span>')
        .children('span')
        .addClass('required');

    $('tbody tr:even').addClass('even');

    $('#btnAddTask').click((evt) => {
        evt.preventDefault();
        $('#taskCreation').removeClass('not');
    });

    $('tbody tr').click((evt) => {
        $(evt.target)
            .closest('td')
            .siblings()
            .andSelf()
            .toggleClass('rowHighlight');
    });

    $('#tblTasks tbody').on('click', '.deleteRow', (evt) => {
        evt.preventDefault();
        $(evt.target).parents('tr').remove();
    });

    $('#saveTask').click((evt) => {
        evt.preventDefault();
        const task = $('form').toObject();

        $('#taskRow')
            .tmpl(task)
            .appendTo($('#tblTasks tbody'));
    });

    $('#clearTask').on('click', (evt) => {
        evt.preventDefault();
        const task = {
            task: '',
            requiredBy: '',
            category: 'Personal'
        };
        $('form').fromObject(task);
    })

    $('#btnPrintObject').on('click', (evt) => {
        evt.preventDefault();
        const task = $('form').toObject();
        console.log(JSON.stringify(task));
    });

    $('#btnLoadObject').on('click', (evt) => {
        evt.preventDefault();
        const task = {
            task: "Breakfast",
            requiredBy: "2019-01-28",
            category: "Personal"
        };
        $('form').fromObject(task);
    })
});

(function($) {
    $.fn.extend({
        toObject: function() {
            const result = {};
            this.serializeArray()
                .map(task => result[task.name] = task.value);

            return result;
        },
        fromObject: function(obj) {
            $.each(this.find(':input'), function(i, v) {
                const name = $(v).attr('name');
                if (obj[name]) {
                    $(v).val(obj[name]);
                } else {
                    $(v).val('');
                }
            });
        }
    })
})(jQuery);