$('document').ready(function () {
    $(".datepicker").datepicker("setDate", new Date());
    $("body").on("click", ".PatientCheck", function () {
        if ($(this).is(':checked')) {
            $(this).parent().find('.propertyCli').prop("disabled", false);
        } else {
            $(this).parent().find('.propertyCli').prop("disabled", true);
        }
    });
    $("body").on("click", ".stop-treatment", function () {
        if ($(this).is(':checked')) {
            $(this).parent().find('.Reason').prop("disabled", false);
        } else {
            $(this).parent().find('.Reason').prop("disabled", true);
        }
    });
    $("body").on("blur", ".count-table", function () {
        if (($(this).val() > 0 && $(this).val() < 100) && $.isNumeric($(this).val()) || $(this).val().trim() === "") {
            $(this).removeClass('error-input');
        } else {
            $(this).addClass('error-input');
            $(this).val("");
            let avg = 0;
            let inputs = $(".count-table");
            let count = 0;
            for (let i = 0; i < inputs.length; i++) {
                avg += Number(inputs.eq(i).val());
                if (inputs.eq(i).val() !== "") {
                    count++;
                }
            }
            avg = avg / count;
            $(".count-table-result").val(avg);
        }
    });
    $("body").on("focus", ".count-table", function () {
        $(this).removeClass('error-input');

    });

    $("body").on("blur", ".count-chair", function () {
        if (($(this).val() > 0 && $(this).val() < 100) && $.isNumeric($(this).val()) || $(this).val().trim() === "") {
            $(this).removeClass('error-input');
        } else {
            $(this).addClass('error-input');
            $(this).val("");
            let avg = 0;
            let inputs = $(".count-chair");
            let count = 0;
            for (let i = 0; i < inputs.length; i++) {
                avg += Number(inputs.eq(i).val());
                if (inputs.eq(i).val() !== "") {
                    count++;
                }
            }
            avg = avg / count;
            $(".count-chair-result").val(avg);
        }
    });
    $("body").on("focus", ".count-chair", function () {
        $(this).removeClass('error-input');
    });

    $("body").on("change", ".count-table", function () {
        let avg = 0;
        let inputs = $(".count-table");
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            avg += Number(inputs.eq(i).val());
            if (inputs.eq(i).val() !== "") {
                count++;
            }
        }
        avg = avg / count;
        $(".count-table-result").val(avg);
    });
    $("body").on("change", ".count-chair", function () {
        let avg = 0;
        let inputs = $(".count-chair");
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            avg += Number(inputs.eq(i).val());
            if (inputs.eq(i).val() !== "") {
                count++;
            }
        }
        avg = avg / count;
        $(".count-chair-result").val(avg);
    })

    $('#addRow').click(function () {
        let lastId = Number($('label').last().attr("for").replace("Pt", ""));
        let lastRadioId = Number($('input[type=radio]').last().attr('id').replace("rad", ""));
        let lastRadioName = Number($('input[type=radio]').last().attr('name').replace("Used", ""));
        $("<tr>\n" +
            "        <th scope=\"row\">\n" +
            "            <div class=\"input-group date\" data-provide=\"datepicker\">\n" +
            "                <input type=\"text\" class=\"form-control datepicker\">\n" +
            "                <div class=\"input-group-addon\">\n" +
            "                    <span class=\"glyphicon glyphicon-th\"></span>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </th>\n" +
            "        <td><input type=\"text\"></td>\n" +
            "        <td><input type=\"text\" class=\"count-table\"></td>\n" +
            "        <td><input type=\"text\" class=\"count-chair\"></td>\n" +
            "        <td>\n" +
            "            <div>\n" +
            "                <input type=\"checkbox\" id='Pt" + Number(lastId + 1) + "'>\n" +
            "                <label for='Pt" + Number(lastId + 1) + "'>Pt. tolerated treatment well</label>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <input type=\"checkbox\" class=\"PatientCheck\" id='Pt" + Number(lastId + 2) + "'>\n" +
            "                <label for='Pt" + Number(lastId + 2) + "'>Pt.c/o after use of</label>\n" +
            "                <input type=\"radio\" name='Used" + Number(lastRadioName + 1) + "' id='rad" + Number(lastRadioId + 1) + "'>\n" +
            "                <label for='rad" + Number(lastRadioId + 1) + "'>Scoliosis Table</label>\n" +
            "                <input type=\"radio\" name='Used" + Number(lastRadioName + 1) + "' id='rad" + Number(lastRadioId + 2) + "'>\n" +
            "                <label for='rad" + Number(lastRadioId + 2) + "'>Chair</label>\n" +
            "                <input type=\"text\" class=\"propertyCli\" disabled>\n" +
            "            </div>\n" +
            "\n" +
            "            <div>\n" +
            "                <input type=\"checkbox\" class=\"stop-treatment\" id='Pt" + Number(lastId + 3) + "'>\n" +
            "                <label for='Pt" + Number(lastId + 3) + "'>Stopped treatment prematurely due to</label>\n" +
            "                <input type=\"text\" class=\"Reason\" disabled>\n" +
            "            </div>\n" +
            "\n" +
            "        </td>\n" +
            "    </tr>").insertBefore("tr:last");
        $(".datepicker:last").datepicker("setDate", new Date());
    })

});
